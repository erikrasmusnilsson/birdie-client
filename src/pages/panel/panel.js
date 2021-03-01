import './panel.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import Protected from '../../hoc/protected'; 
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useTimeRestrictedSearch from '../../hooks/useTimeRestrictedSearch';

import { createRoom, subscribeToRoom, subscribeToRoomWithPassword } from '../../services/rooms';
import useJoinedRooms from '../../hooks/useJoinedRooms';
import * as CreateRoomForm from '../../hooks/useCreateRoomForm';
import { update } from '../../services/user';
import { TYPE_LOG_IN, TYPE_LOG_OUT } from '../../store/actions';

import Header from '../../fragments/header';
import UserProfile from '../../fragments/user-profile';
import RoomList from '../../containers/room-list';
import CreateRoomModal from '../../containers/create-room-modal';
import RoomPasswordModal from '../../containers/room-password-modal';
import Icon from '../../components/icon';
import { TextButton, PrimaryButton } from '../../components/buttons';

const Panel = ({ user, onLogout, updateUser }) => {
    const history = useHistory();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [joinedRooms, refreshRooms, deleteRoom] = useJoinedRooms();

    const [createRoomModalVisible, setCreateModalVisible] = useState(false);
    const [createRoomForm, createRoomDispatch, resetCreateRoomForm] = CreateRoomForm.useCreateRoomForm();

    const [editingDescription, setEditingDescription] = useState(false);
    const [description, setDescription] = useState(user.description);

    const [roomPasswordModalVisible, setRoomPasswordModalVisible] = useState(false);
    const [joinRoomPassword, setJoinRoomPassword] = useState('');
    const [joinRoomId, setJoinRoomId] = useState(null);
    const [roomPasswordPrompt, setRoomPasswordPrompt] = useState(null);

    useTimeRestrictedSearch({
        query: searchQuery,
        setResults: setSearchResults,
        url: '/room/search'
    });

    const logout = () => {
        onLogout();
    }

    const onDescriptionSave = async () => {
        try {
            const newUser = {...user};
            newUser.description = description;
            await update(
                newUser.firstName,
                newUser.lastName,
                newUser.description
            );
            updateUser(newUser);
            setEditingDescription(false);
        } catch (err) {
            alert(err.message);
        }
    }

    const onDescriptionCancel = () => {
        setDescription(user.description);
        setEditingDescription(false);
    }

    const onCreateRoom = async () => {
        await createRoom(
            createRoomForm.roomName,
            createRoomForm.roomDescription,
            createRoomForm.roomIsPrivate,
            createRoomForm.roomPassword
        );
        setCreateModalVisible(false);
        createRoomDispatch({ type: CreateRoomForm.RESET_ROOM });
        refreshRooms();
    }

    const onJoinRoom = id => {
        history.push(`/chat/${id}`);
    }

    const onSubscribeToRoom = async (id, isPrivate) => {
        if (isPrivate) {
            setRoomPasswordModalVisible(true);
            setJoinRoomId(id);
        } else {
            await subscribeToRoom(id);
            setTimeout(() => {
                refreshRooms();
            }, 300);
        }
    }

    const onSubscribeToRoomWithPassword = async (id, password) => {
        try {
            await subscribeToRoomWithPassword(id, password);
            setTimeout(() => {
                refreshRooms();
            }, 300);
            setRoomPasswordModalVisible(false);
        } catch (err) {
            setRoomPasswordPrompt(err.message);
        }
    }
 
    return (
        <Protected>
            <main className="row panel">
                <div className="panel__logout-button u-margin-top-small">
                    <TextButton onclick={ logout }>
                        <Icon icon="icon-log-out" className="panel__logout-icon" />
                    </TextButton>
                </div>
                <CreateRoomModal 
                    visible={ createRoomModalVisible } 
                    onclose={ () => setCreateModalVisible(false) }
                    roomName={ createRoomForm.roomName }
                    setRoomName={ payload => createRoomDispatch({ type: CreateRoomForm.UPDATE_ROOM_NAME, payload }) }
                    roomDescription={ createRoomForm.roomDescription }
                    setRoomDescription={ payload => createRoomDispatch({ type: CreateRoomForm.UPDATE_ROOM_DESCRIPTION, payload }) }
                    roomIsPrivate={ createRoomForm.roomIsPrivate }
                    setRoomIsPrivate={ payload => createRoomDispatch({ type: CreateRoomForm.UPDATE_ROOM_IS_PRIVATE, payload }) }
                    roomPassword={ createRoomForm.roomPassword }
                    setRoomPassword={ payload => createRoomDispatch({ type: CreateRoomForm.UPDATE_ROOM_PASSWORD, payload }) }
                    onCreateRoom={ onCreateRoom }
                />
                <Header 
                    firstName={ user.firstName } 
                    lastName={ user.lastName } 
                    img={ `${process.env.PUBLIC_URL}/images/developers/erik-rasmus-nilsson.png` } 
                    searchQuery={ searchQuery }
                    setSearchQuery={ setSearchQuery }
                    searchResults={ searchResults }
                    onSubscribeToRoom={ onSubscribeToRoom }
                />
                <RoomPasswordModal 
                    visible={ roomPasswordModalVisible }
                    onClose={ () => setRoomPasswordModalVisible(false) }
                    password={ joinRoomPassword }
                    setPassword={ setJoinRoomPassword }
                    onSubscribeToRoom={ onSubscribeToRoomWithPassword }
                    roomId={ joinRoomId }
                    prompt={ roomPasswordPrompt }
                />
                <UserProfile 
                    className="u-margin-top-medium"
                    description={ description } 
                    setDescription={ setDescription }
                    edit={ editingDescription }
                    onStartEdit={ () => setEditingDescription(true) }
                    onCancel={ onDescriptionCancel }
                    onSave={ onDescriptionSave }
                />
                <PrimaryButton 
                    className="panel__create-room-button u-margin-top-small"
                    onclick={ () => setCreateModalVisible(true) }>
                    <Icon className="panel__create-room-icon" icon="icon-plus" />
                </PrimaryButton>
                <RoomList 
                    className="u-margin-top-small"
                    rooms={ joinedRooms } 
                    onDeleteRoom={ deleteRoom }
                    onJoinRoom={ onJoinRoom }
                />
            </main>
        </Protected>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch({
            type: TYPE_LOG_OUT
        }),
        updateUser: user => dispatch({
            type: TYPE_LOG_IN,
            user
        }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
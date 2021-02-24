import './panel.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import Protected from '../../hoc/protected'; 
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { createRoom, searchRoomByName, subscribeToRoom, subscribeToRoomWithPassword } from '../../services/rooms';
import useJoinedRooms from '../../hooks/useJoinedRooms';
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
    const [roomName, setRoomName] = useState('');
    const [roomDescription, setRoomDescription] = useState('');
    const [roomIsPrivate, setRoomIsPrivate] = useState(false);
    const [roomPassword, setRoomPassword] = useState('');

    const [editingDescription, setEditingDescription] = useState(false);
    const [description, setDescription] = useState(user.description);

    const [roomPasswordModalVisible, setRoomPasswordModalVisible] = useState(false);
    const [joinRoomPassword, setJoinRoomPassword] = useState('');
    const [joinRoomId, setJoinRoomId] = useState(null);
    const [roomPasswordPrompt, setRoomPasswordPrompt] = useState(null);

    const logout = () => {
        onLogout();
    }

    const onDescriptionSave = () => {
        try {
            const newUser = {...user};
            newUser.description = description;
            update(
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
            roomName,
            roomDescription,
            roomIsPrivate,
            roomPassword
        );
        setCreateModalVisible(false);
        setRoomName('');
        setRoomDescription('');
        setRoomIsPrivate(false);
        setRoomPassword('');
        setTimeout(() => {
            refreshRooms();
        }, 300);
    }

    const onJoinRoom = id => {
        history.push(`/chat/${id}`);
    }

    const onSearch = async (query) => {
        setSearchQuery(query);
        if (query.length > 3) {
            setSearchResults(await searchRoomByName(query));
        } else {
            setSearchResults([]);
        }
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
                    roomName={ roomName }
                    setRoomName={ setRoomName }
                    roomDescription={ roomDescription }
                    setRoomDescription={ setRoomDescription }
                    roomIsPrivate={ roomIsPrivate }
                    setRoomIsPrivate={ setRoomIsPrivate }
                    roomPassword={ roomPassword }
                    setRoomPassword={ setRoomPassword }
                    onCreateRoom={ onCreateRoom }
                />
                <Header 
                    firstName={ user.firstName } 
                    lastName={ user.lastName } 
                    img={ `${process.env.PUBLIC_URL}/images/developers/erik-rasmus-nilsson.png` } 
                    searchQuery={ searchQuery }
                    setSearchQuery={ onSearch }
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
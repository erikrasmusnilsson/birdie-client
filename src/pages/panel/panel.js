import './panel.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import Protected from '../../hoc/protected'; 
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoinedRooms } from '../../services/rooms';
import { TYPE_LOG_IN, TYPE_LOG_OUT } from '../../store/actions';

import Header from '../../fragments/header';
import UserProfile from '../../fragments/user-profile';
import RoomList from '../../containers/room-list';
import CreateRoomModal from '../../containers/create-room-modal';
import Icon from '../../components/icon';
import { TextButton, PrimaryButton } from '../../components/buttons';

const Panel = ({ user, onLogout, updateUser }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [joinedRooms, setJoinedRooms] = useState([]);

    const [createRoomModalVisible, setCreateModalVisible] = useState(false);
    const [roomName, setRoomName] = useState('');

    const [editingDescription, setEditingDescription] = useState(false);
    const [description, setDescription] = useState(user.description);
    
    useEffect(async () => {
        const joinedRooms = await getJoinedRooms();
        setJoinedRooms(joinedRooms);
    }, []);

    const logout = () => {
        onLogout();
    }

    const onDescriptionSave = () => {
        const newUser = {...user};
        newUser.description = description;
        updateUser(newUser);
        setEditingDescription(false);
    }

    const onDescriptionCancel = () => {
        setDescription(user.description);
        setEditingDescription(false);
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
                />
                <Header 
                    firstName={ user.firstName } 
                    lastName={ user.lastName } 
                    img={ `${process.env.PUBLIC_URL}/images/developers/erik-rasmus-nilsson.png` } 
                    searchQuery={ searchQuery }
                    setSearchQuery={ setSearchQuery }
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
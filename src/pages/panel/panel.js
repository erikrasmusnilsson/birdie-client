import './panel.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import Protected from '../../hoc/protected'; 
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoinedRooms } from '../../services/rooms';
import { TYPE_LOG_OUT } from '../../store/actions';

import Header from '../../fragments/header';
import UserProfile from '../../fragments/user-profile';
import RoomList from '../../fragments/room-list';
import CreateRoomModal from '../../containers/create-room-modal';
import Icon from '../../components/icon';
import { TextButton, SubtleButton } from '../../components/buttons';

const Panel = ({ user, onLogout }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [joinedRooms, setJoinedRooms] = useState([]);

    const [createRoomModalVisible, setCreateModalVisible] = useState(false);
    const [roomName, setRoomName] = useState('');
    
    useEffect(async () => {
        const joinedRooms = await getJoinedRooms();
        setJoinedRooms(joinedRooms);
    }, []);

    const logout = () => {
        onLogout();
    }
 
    return (
        <Protected>
            <main className="row panel">
                <div className="panel__logout-button">
                    <TextButton onclick={ logout }>
                        <Icon icon="icon-heart-broken" className="panel__logout-icon" />
                        Log out
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
                <UserProfile description={ user.description } />
                <SubtleButton 
                    className="u-margin-top-small u-margin-bottom-small panel__create-room-button"
                    onclick={ () => setCreateModalVisible(true) }
                >Create room</SubtleButton>
                <RoomList rooms={ joinedRooms } />
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
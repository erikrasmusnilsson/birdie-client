import './panel.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import Protected from '../../hoc/protected'; 
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoinedRooms } from '../../services/rooms';

import Header from '../../fragments/header';
import UserProfile from '../../fragments/user-profile';
import RoomList from '../../fragments/room-list';
import SubtleButton from '../../components/buttons/subtle-button';
import CreateRoomModal from '../../containers/create-room-modal';

const Panel = ({ user }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [joinedRooms, setJoinedRooms] = useState([]);

    const [roomName, setRoomName] = useState('');
    
    useEffect(async () => {
        const joinedRooms = await getJoinedRooms();
        setJoinedRooms(joinedRooms);
    }, []);
 
    return (
        <Protected>
            <main className="row panel">
                <CreateRoomModal 
                    visible={true} 
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
                <SubtleButton className="u-margin-top-small u-margin-bottom-small panel__create-room-button">Create room</SubtleButton>
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

export default connect(mapStateToProps, null)(Panel);
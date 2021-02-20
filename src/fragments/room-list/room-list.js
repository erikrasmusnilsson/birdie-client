import './room-list.scss';
import '../../sass/utilities.scss';

import { SubtleButton, SecondaryButton } from '../../components/buttons';
import Icon from '../../components/icon';
import RoomItem from './room-item';

const RoomList = ({ rooms }) => {
    const roomList = rooms.map(room => {
        return (
            <RoomItem 
                name={ room.name }
                memberAmount={ room.members }
                isOwner={ room.isOwner }
                id={ room.id }
            />
        )
    });

    return (
        <ul className="room-list">
            { roomList }
        </ul>
    )
}

export default RoomList;
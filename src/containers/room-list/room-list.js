import './room-list.scss';
import '../../sass/utilities.scss';

import RoomItem from './room-item';

const RoomList = ({ 
    rooms, 
    className, 
    onDeleteRoom,
    onJoinRoom
}) => {
    const classNames = ["room-list", className].join(" ");

    let animationDelay = 0;
    const roomList = rooms.map(room => {
        animationDelay += .15;
        return (
            <RoomItem 
                name={ room.name }
                memberAmount={ room.members }
                isOwner={ room.isOwner }
                key={ room._id }
                id={ room._id }
                animationDelay={ animationDelay }
                onDelete={ onDeleteRoom }
                onJoin={ onJoinRoom }
            />
        )
    });

    return (
        <ul className={ classNames }>
            { roomList }
        </ul>
    )
}

export default RoomList;
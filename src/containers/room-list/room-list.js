import './room-list.scss';
import '../../sass/utilities.scss';

import RoomItem from './room-item';

const RoomList = ({ rooms, className }) => {
    const classNames = ["room-list", className].join(" ");

    let animationDelay = 0;
    const roomList = rooms.map(room => {
        animationDelay += .15;
        return (
            <RoomItem 
                name={ room.name }
                memberAmount={ room.members }
                isOwner={ room.isOwner }
                id={ room.id }
                key={ room.id }
                animationDelay={ animationDelay }
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
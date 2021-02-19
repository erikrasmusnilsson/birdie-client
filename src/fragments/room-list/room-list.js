import './room-list.scss';
import '../../sass/utilities.scss';

import { SubtleButton, SecondaryButton } from '../../components/buttons';
import Icon from '../../components/icon';

const RoomList = ({ rooms }) => {
    const roomList = rooms.map(room => {
        return (
            <li className="room-list__item">
                <div className="room-list__title">
                    <h4 className="room-list__name">{ room.name }</h4>
                    { 
                        room.isOwner 
                        ? <p className="room-list__owner">Owner</p>
                        : null 
                    }
                </div>
                <div className="room-list__controls">
                    <p className="room-list__users">{ room.members } room members</p>
                    <SecondaryButton className="room-list__join-button">Join</SecondaryButton>
                    { 
                        room.isOwner 
                        ? <SubtleButton className="room-list__delete-button"><Icon className="room-list__delete-icon" icon="icon-cross" /></SubtleButton>
                        : null 
                    }
                </div>
            </li>
        )
    });

    return (
        <ul className="room-list">
            { roomList }
        </ul>
    )
}

export default RoomList;
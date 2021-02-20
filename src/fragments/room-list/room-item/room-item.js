import './room-item.scss';

import { SubtleButton, SecondaryButton } from '../../../components/buttons';
import Icon from '../../../components/icon';

const RoomItem = ({
    name,
    isOwner,
    memberAmount,
    id
}) => {
    const titleClassName = [
        'room-item__title',
        isOwner ? 'room-item__owner-title' : null
    ].join(" ");

    return (
        <li className="room-item">
            <div className={ titleClassName }>
                <h4 className="room-item__name">{ name }</h4>
                { 
                    isOwner 
                    ? <p className="room-item__owner">Owner</p>
                    : null 
                }
                { 
                    isOwner 
                    ? <SubtleButton className="room-item__delete-button"><Icon className="room-item__delete-icon" icon="icon-cross" /></SubtleButton>
                    : null 
                }
            </div>
            <div className="room-item__controls">
                <p className="room-item__users">{ memberAmount } room members</p>
                <SecondaryButton className="room-item__join-button">Join</SecondaryButton>
            </div>
        </li>
    )
}

export default RoomItem;
import './room-item.scss';

import { SubtleButton } from '../../../components/buttons';
import Icon from '../../../components/icon';

const RoomItem = ({
    name,
    isOwner,
    memberAmount,
    id,
    animationDelay,
    onDelete,
    onJoin,
}) => {
    const wrapperClassName = [
        "room-item",
        animationDelay ? 'room-item-animated' : null
    ].join(" ");

    const titleClassName = [
        'room-item__title',
        isOwner ? 'room-item__owner-title' : null,
    ].join(" ");

    return (
        <li className={ wrapperClassName } style={{animationDelay: `${animationDelay}s`}}>
            <div className={ titleClassName }>
                <h4 className="room-item__name">{ name }</h4>
                { 
                    isOwner 
                    ? <p className="room-item__owner">Owner</p>
                    : null 
                }
                { 
                    isOwner 
                    ? <SubtleButton className="room-item__delete-button" onclick={ () => onDelete(id) }><Icon className="room-item__delete-icon" icon="icon-x" /></SubtleButton>
                    : null 
                }
            </div>
            <div className="room-item__controls">
                <p className="room-item__users">{ memberAmount } room members</p>
                <SubtleButton className="room-item__join-button" onclick={ () => onJoin(id) }>Join</SubtleButton>
            </div>
        </li>
    )
}

export default RoomItem;
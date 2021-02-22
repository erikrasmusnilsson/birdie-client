import './chat-profile.scss';

import { TextButton, Secondary } from '../../components/buttons';
import Icon from '../../components/icon';

const ChatProfile = ({
    title,
    description,
    className
}) => {
    const classNames = ["chat-profile", className].join(" ");

    return (
        <div className={ classNames }>
            <h3 className="chat-profile__title">Ett mysigt rum</h3>
            <p className="chat-profile__description">Lorem ipsum dolor sit amet.</p>
            <TextButton className="chat-profile__edit-button">
                <Icon icon="icon-edit-2" className="chat-profile__edit-icon" />
            </TextButton>
        </div>
    )
}

export default ChatProfile;
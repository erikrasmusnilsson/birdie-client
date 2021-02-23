import './chat-profile.scss';

import { TextButton, SubtleButton } from '../../components/buttons';
import Icon from '../../components/icon';
import ShadowBox from '../../components/shadow-box';
import EditMode from './edit-mode';
import TextArea from '../../components/text-area';

const ChatProfile = ({
    title,
    description,
    setDescription,
    onCancel,
    onSave,
    onStartEdit,
    className,
    edit,
    isOwner
}) => {
    const classNames = ["chat-profile", className].join(" ");

    return (
        <ShadowBox className={ classNames }>
            <h3 className="chat-profile__title">{ title ? title : "Loading..." }</h3>
            { edit ? (
                <EditMode 
                    description={ description }
                    setDescription={ setDescription }
                    onCancel={ onCancel }
                    onSave={ onSave }
                />
            ) : (
                <div className="chat-profile__content">
                    <p className="chat-profile__description">{ description }</p>
                    <TextButton onclick={ onStartEdit } className="chat-profile__edit-button">
                        <Icon icon="icon-edit-2" className="chat-profile__edit-icon" />  
                    </TextButton>
                </div>
            )}
        </ShadowBox>
    )
}

export default ChatProfile;
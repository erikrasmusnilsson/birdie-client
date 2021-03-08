import './chat-box.scss';

import Avatar from '../../components/avatar';
import TextArea from '../../components/text-area';
import TextButton from '../../components/buttons/text-button';

const ChatBox = ({
    message,
    setMessage,
    onSend,
    avatar
}) => {
    return (
        <div className="chat-box">
            <div className="chat-box__input-box">
                <Avatar 
                    src={ avatar }
                    story
                    online
                />
                <TextArea onEnterPressed={ onSend } onchange={ setMessage } value={ message } className="chat-box__input" placeholder="Share a reply"></TextArea>
            </div>
            <TextButton onclick={ onSend } className="chat-box__send-button">Send</TextButton>
        </div>
    )
}

export default ChatBox;
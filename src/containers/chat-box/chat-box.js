import './chat-box.scss';

import Avatar from '../../components/avatar';
import TextArea from '../../components/text-area';
import TextButton from '../../components/buttons/text-button';

const ChatBox = () => {
    return (
        <div className="chat-box">
            <div className="chat-box__input-box">
                <Avatar 
                    src={ `${process.env.PUBLIC_URL}/images/developers/erik-rasmus-nilsson.png` }
                    story
                    online
                />
                <TextArea className="chat-box__input" placeholder="Share a reply"></TextArea>
            </div>
            <TextButton className="chat-box__send-button">Send</TextButton>
        </div>
    )
}

export default ChatBox;
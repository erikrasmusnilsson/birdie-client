import './chat-list.scss';
import { useEffect, createRef } from 'react';

import Message from "../../components/message";

const ChatList = ({ chat }) => {
    const window = createRef();

    const messages = chat.map(message => {
        const itemClassNames = [
            "chat-list__item",
            message.self ? "chat-list__item-self" : null
        ].join(" ");

        return (
            <li className={ itemClassNames }>
                <Message
                    sender={ message.sender }
                    content={ message.content }
                    self={ message.self }
                />
            </li>
        )
    });

    useEffect(() => {
        window.current.scrollTop = window.current.scrollHeight;
    }, [chat]);

    return (
        <ul ref={ window } className="chat-list">
            { messages }
        </ul>
    )
}

export default ChatList;
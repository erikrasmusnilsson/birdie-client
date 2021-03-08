import './chat.scss';
import '../../sass/grid.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createRoom, getRoomById, updateRoom } from '../../services/rooms';
import useChatWebSocket from '../../hooks/useWebSocket';
import Protected from '../../hoc/protected';
import {ADDRESS} from '../../api/birdie';

import ChatList from '../../containers/chat-list';
import ChatBox from '../../containers/chat-box';
import ChatProfile from '../../fragments/chat-profile';

const Chat = ({ user }) => {
    const { id } = useParams();
    const url = `ws://${ADDRESS}/chat?chatId=${id}&email=${user.email}&password=${user.password}`;
    const [room, setRoom] = useState({});
    const [currentMessage, setCurrentMessage] = useState('');

    const [editingDescription, setEditingDescription] = useState(false);
    const [roomDescription, setRoomDescription] = useState('');

    const [send, messages] = useChatWebSocket(url, user);

    useEffect(async () => {
        const room = await getRoomById(id);
        setRoom(room);
        setRoomDescription(room.description)
    }, []);

    const onSaveDescription = () => {
        try {
            updateRoom(id, roomDescription);
            setEditingDescription(false);
        } catch (err) {
            alert(err.message);
        }
    }

    const onSend = () => {
        send(currentMessage);
        setCurrentMessage("");
    }

    return (
        <Protected>
            <main className="chat">
                <div className="chat__content row">
                    <div className="chat__profile-box">
                        <ChatProfile 
                            title={ room.name }
                            className="chat__chat-profile"
                            edit={ editingDescription }
                            description={ roomDescription }
                            setDescription={ setRoomDescription }
                            onStartEdit={ () => setEditingDescription(true) }
                            onSave={ onSaveDescription }
                            onCancel={ () => setEditingDescription(false) }
                            isOwner={ room.isOwner }
                        />
                    </div>
                    <ChatList chat={ messages } />
                    <ChatBox 
                        avatar={ user.image ? `/${user.image}` : `${process.env.PUBLIC_URL}/images/default-profile.png` }
                        message={ currentMessage }
                        setMessage={ setCurrentMessage }
                        onSend={ onSend }
                    />
                </div>
            </main>
        </Protected>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, null)(Chat);
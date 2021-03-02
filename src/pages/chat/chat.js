import './chat.scss';
import '../../sass/grid.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRoomById, updateRoom } from '../../services/rooms';
import Protected from '../../hoc/protected';

import ChatList from '../../containers/chat-list';
import ChatBox from '../../containers/chat-box';
import ChatProfile from '../../fragments/chat-profile';

const Chat = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});

    const [editingDescription, setEditingDescription] = useState(false);
    const [roomDescription, setRoomDescription] = useState('');

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

    const mockedMessages = [
        {
            sender: "Rasmus Nilsson",
            content: "Hej alihopa!"
        },
        {
            sender: "Rasmus Nilsson",
            content: "Hej alihopa!",
            self: true
        }
    ];

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
                    <ChatList chat={ mockedMessages } />
                    <ChatBox />
                </div>
            </main>
        </Protected>
    )
}

export default Chat;
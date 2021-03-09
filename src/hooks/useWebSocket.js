import { useState, useEffect } from 'react';
import { w3cwebsocket } from 'websocket';

const useChatWebSocket = (url, user) => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);

    const connect = () => {
        const _ws = new w3cwebsocket(url);
        _ws.onmessage = onMessageReceived;
        setWs(_ws);
    }

    useEffect(connect, []);

    const onMessageReceived = (data) => {
        const wsMessage = JSON.parse(data.data);
        const message = {
            sender: `${wsMessage.sender.firstName} ${wsMessage.sender.lastName}`,
            content: wsMessage.message,
            self: wsMessage.sender.email === user.email
        };
        
        setMessages(messages => {
            const _msgs = [...messages];
            _msgs.push(message);
            return _msgs;
        });
    }

    const send = data => {
        if (ws) {
            ws.send(data);
        }
    }

    return [send, messages]; 
}

export default useChatWebSocket;
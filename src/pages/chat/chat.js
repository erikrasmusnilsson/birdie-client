import './chat.scss';
import '../../sass/grid.scss';

import ChatList from '../../containers/chat-list';
import ChatBox from '../../containers/chat-box';
import ChatProfile from '../../fragments/chat-profile';

const Chat = () => {
    const mockedMessages = [
        {
            sender: "Rasmus Nilsson",
            content: "Hej alihopa!"
        },
        {
            sender: "Rasmus Nilsson",
            content: "...hallå?"
        },
        {
            sender: "Lisa Csatho",
            content: "Hej."
        },
        {
            sender: "Rasmus Nilsson",
            content: "oj, arg?"
        },
        {
            sender: "Rasmus Nilsson",
            content: "HALLÅ?"
        },
        {
            sender: "Rasmus Nilsson",
            content: "Hej alihopa!"
        },
        {
            sender: "Rasmus Nilsson",
            content: "...hallå?"
        },
        {
            sender: "Lisa Csatho",
            content: "Hej."
        },
        {
            sender: "Rasmus Nilsson",
            content: "oj, arg?"
        },
        {
            sender: "Rasmus Nilsson",
            content: "HALLÅ?"
        },
        {
            sender: "Rasmus Nilsson",
            content: "Hej alihopa!"
        },
        {
            sender: "Rasmus Nilsson",
            content: "...hallå?"
        },
        {
            sender: "Lisa Csatho",
            content: "Hej."
        },
        {
            sender: "Rasmus Nilsson",
            content: "oj, arg?"
        },
        {
            sender: "Rasmus Nilsson",
            content: "HALLÅ?"
        },
        {
            sender: "Håkan Bråkan",
            content: "HALLÅ?",
            self: true
        },
        {
            sender: "Rasmus Nilsson",
            content: "HALLÅ? mitt namn är rasmus och jag är en skön böna från varberg mmmm mmm mmmm mmm mmm m mmm m mmm"
        },
    ];

    return (
        <main className="chat">
            <div className="chat__content row">
                <ChatProfile className="chat__chat-profile"/>
                <ChatList chat={ mockedMessages } />
                <ChatBox />
            </div>
        </main>
    )
}

export default Chat;
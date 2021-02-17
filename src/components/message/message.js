import './message.scss';

const Message = ({
    sender,
    content,
    self
}) => {
    const classNames = [
        "message", 
        self ? "message-self" : null
    ].join(" ");

    return (
        <div className={ classNames }>
            <span className="message__sender">{ sender }</span>
            <p className="message__content">{ content }</p>
        </div>
    );
}

export default Message; 
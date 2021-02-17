import './avatar.scss';

const Avatar = ({ 
    src,
    online,
    story
}) => {
    const classNames = [
        "avatar",
        online ? "avatar-online" : null,
        story ? "avatar-story" : null
    ].join(" ");

    return (
        <div className={classNames}>
            <figure className="avatar__figure">
                <img className="avatar__image" src="https://i.imgur.com/6zqzV63.gif" alt="a tiger"></img>
            </figure>
        </div>
    );
}
export default Avatar;
import './avatar.scss';

const Avatar = ({ 
    src,
    online,
    story,
    className
}) => {
    const classNames = [
        "avatar",
        className,
        online ? "avatar-online" : null,
        story ? "avatar-story" : null
    ].join(" ");

    return (
        <div className={classNames}>
            <figure className="avatar__figure">
                <img className="avatar__image" src={ src } alt="a tiger"></img>
            </figure>
        </div>
    );
}
export default Avatar;
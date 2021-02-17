const Icon = ({ icon, className }) => {
    return (
        <svg className={ className }>
            <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${icon}`}></use>
        </svg>
    );
}

export default Icon;
import './text-button.scss';

const TextButton = ({ 
    children,
    disabled,
    onclick,
    className
}) => {
    const classNames = [
        "text-button",
        className
    ].join(" ");

    return (
        <button className={ classNames }
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default TextButton;
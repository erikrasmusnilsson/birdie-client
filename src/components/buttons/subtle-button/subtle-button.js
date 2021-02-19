import './subtle-button.scss';

const SubtleButton = ({ 
    children,
    disabled,
    onclick,
    className
}) => {
    const classNames=["subtle-button", className].join(" ");
    return (
        <button className={ classNames }
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default SubtleButton;
import './subtle-button.scss';

const SubtleButton = ({ 
    children,
    disabled,
    onclick
}) => {
    return (
        <button className="subtle-button" 
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default SubtleButton;
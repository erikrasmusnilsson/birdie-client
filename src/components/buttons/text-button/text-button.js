import './text-button.scss';

const TextButton = ({ 
    children,
    disabled,
    onclick
}) => {
    return (
        <button className="text-button" 
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default TextButton;
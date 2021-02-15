import './primary-button.scss';

const PrimaryButton = ({ 
    children,
    disabled,
    onclick
}) => {
    return (
        <button className="primary-button" 
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default PrimaryButton;
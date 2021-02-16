import './cta-button.scss';

const CtaButton = ({ 
    children,
    disabled,
    onclick
}) => {
    return (
        <button className="cta-button" 
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default CtaButton;
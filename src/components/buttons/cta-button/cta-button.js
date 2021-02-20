import './cta-button.scss';

const CtaButton = ({ 
    children,
    disabled,
    onclick,
    className
}) => {
    const classNames = ["cta-button", className].join(" ");

    return (
        <button className={ classNames }
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default CtaButton;
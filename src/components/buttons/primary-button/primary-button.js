import './primary-button.scss';

const PrimaryButton = ({ 
    children,
    disabled,
    onclick,
    className
}) => {
    const classNames = ["primary-button", className].join(" ");

    return (
        <button className={ classNames } 
            onClick={ onclick }
            disabled={ disabled }>
            { children }
        </button>
    );
}

export default PrimaryButton;
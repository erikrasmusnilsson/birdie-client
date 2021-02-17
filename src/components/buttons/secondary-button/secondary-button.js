import './secondary-button.scss';

const SecondaryButton = ({ 
    children,
    disabled,
    onclick,
    className
}) => {
    const classNames = ["secondary-button", className].join(" ");

    return (
        <button onClick={ onclick } className={ classNames } disabled={ disabled }>{ children }</button>
    );
}

export default SecondaryButton;
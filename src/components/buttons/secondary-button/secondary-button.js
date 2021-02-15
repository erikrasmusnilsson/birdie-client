import './secondary-button.scss';

const SecondaryButton = ({ 
    children,
    disabled,
    onclick
}) => {
    return (
        <button onClick={ onclick } className="secondary-button" disabled={ disabled }>{ children }</button>
    );
}

export default SecondaryButton;
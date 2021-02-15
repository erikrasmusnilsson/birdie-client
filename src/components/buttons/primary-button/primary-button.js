import './primary-button.scss';

const PrimaryButton = ({ 
    children,
    disabled
}) => {
    return (
        <button className="primary-button" disabled={ disabled }>{ children }</button>
    );
}

export default PrimaryButton;
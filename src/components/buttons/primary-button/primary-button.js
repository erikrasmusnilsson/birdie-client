import './primary-button.scss';

const PrimaryButton = ({ children }) => {
    return (
        <button className="primary-button">{ children }</button>
    );
}

export default PrimaryButton;
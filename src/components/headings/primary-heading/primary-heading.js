import './primary-heading.scss';

const PrimaryHeading = ({ children, className }) => {
    const classNames = ["primary-heading", className].join(" ");

    return (
        <h1 className={ classNames }>{ children }</h1>
    );
}

export default PrimaryHeading;
import './tertiary-heading.scss';

const TertiaryHeading = ({ children, className }) => {
    const classNames = ["tertiary-heading", className].join(" ");

    return (
        <h3 className={ classNames }>{ children }</h3>
    );
}

export default TertiaryHeading;
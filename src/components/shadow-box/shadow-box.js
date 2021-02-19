import './shadow-box.scss';

const ShadowBox = ({ children, className }) => {
    const classNames = ["shadow-box", className].join(" ");
    return (
        <div className={ classNames }>{ children }</div>
    )
}

export default ShadowBox;
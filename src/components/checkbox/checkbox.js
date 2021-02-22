import './checkbox.scss';

const Checkbox = ({
    checked,
    onchange,
    name,
    label,
    className
}) => {
    const classNames = ["checkbox", className].join(" ");

    return (
        <div className={ classNames }>
            <label className="checkbox__user-label" htmlFor={ name }>{ label }</label>
            <input 
                className="checkbox__input"
                type="checkbox" 
                id={ name }
                checked={ checked } 
                onChange={ e => onchange(e.target.checked) }
            />
            <label className="checkbox__label" htmlFor={ name }></label>
        </div>
    )
}

export default Checkbox;
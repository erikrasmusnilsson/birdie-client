import './text-input.scss';

const TextInput = ({
    value,
    onchange,
    placeholder,
    required,
    min,
    max,
    className
}) => {
    const classNames = ["text-input-box", className].join(" ");

    let counter;
    if (min && !max) {
        counter = `${value.length}/${min}`;
    } else if (!min && max) {
        counter = `${max - value.length}`;
    } else if (min && max) {
        counter = `${value.length}/${min}~${max}`;
    }

    return (
        <div className={ classNames }>
            <input className="text-input-box__input"
                placeholder={ placeholder }
                onChange={ e => onchange(e.target.value) }
                value={ value }
                required={ required }
                minLength={ min }
                maxLength={ max } />
            <span className="text-input-box__placeholder">{ placeholder }</span>
            <span className="text-input-box__counter">{ counter }</span>
        </div>
    );
}

export default TextInput;
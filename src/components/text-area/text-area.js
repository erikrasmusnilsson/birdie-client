import './text-area.scss';

const TextArea = ({
    value, 
    onchange,
    placeholder,
    required,
    min,
    max,
    className
}) => {
    const classNames = [
        "text-area-box",
        className
    ].join(" ");

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
            <textarea 
                className="text-area-box__input"
                onchange={ e => onchange(e.target.value) }
                placeholder={ placeholder }
                required={ required }
                min={ min }
                max={ max }
            >{ value }</textarea>
            <span className="text-area-box__counter">{ counter }</span>
        </div>
    );
}

export default TextArea;
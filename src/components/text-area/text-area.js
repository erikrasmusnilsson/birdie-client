import './text-area.scss';

const TextArea = ({
    value, 
    onchange,
    placeholder,
    required,
    min,
    max,
    className,
    onEnterPressed
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

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            onEnterPressed();
        }
    }

    return (
        <div className={ classNames }>
            <textarea 
                className="text-area-box__input"
                onChange={ e => onchange(e.target.value) }
                onKeyDown={ e => onKeyDown(e) }
                placeholder={ placeholder }
                required={ required }
                min={ min }
                max={ max }
                value={ value }
            ></textarea>
            <span className="text-area-box__counter">{ counter }</span>
        </div>
    );
}

export default TextArea;
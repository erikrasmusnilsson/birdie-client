import './password-input.scss';

import Icon from '../icon';

const PasswordInput = ({
    value,
    onchange,
    placeholder,
    required,
    min,
    max,
    className,
    icon,
    disabled,
    onEnterPressed
}) => {
    const classNames = [
        "password-input-box", 
        className,
        icon ? "icon-box" : null,
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
            <input className="password-input-box__input"
                placeholder={ placeholder }
                onChange={ e => onchange(e.target.value) }
                value={ value }
                required={ required }
                onKeyDown={ e => onKeyDown(e) }
                minLength={ min }
                maxLength={ max } 
                type='password'
                disabled={ disabled } />
            <span className="password-input-box__placeholder">{ placeholder }</span>
            <span className="password-input-box__counter">{ counter }</span>
            { icon ? <Icon icon={ icon } className="password-input-box__icon" /> : null }
        </div>
    );
}

export default PasswordInput;
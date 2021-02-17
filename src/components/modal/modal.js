import './modal.scss';

import Icon from '../icon';
import TextButton from '../buttons/text-button';

const Modal = ({
    visible,
    onclose,
    children
}) => {
    const classNames = [
        visible ? "modal" : "modal-hidden"
    ].join(" ");

    return (
        <div className={ classNames }>
            <div className="modal__content">
                <TextButton onclick={ onclose } className="modal__close-button">
                    <Icon icon="icon-cross" className="modal__icon-close"/>
                </TextButton>
                { children }
            </div>
            <div className="modal__backdrop" onClick={ onclose }></div>
        </div>
    );
}

export default Modal;
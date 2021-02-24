import './room-password-modal.scss';
import '../../sass/utilities.scss';

import Modal from '../../components/modal';
import PasswordInput from '../../components/password-input';
import PrimaryButton from '../../components/buttons/primary-button';

const RoomPasswordModal = ({
    visible,
    onClose,
    password,
    setPassword,
    roomId,
    onSubscribeToRoom,
    prompt
}) => {
    return (
        <Modal visible={ visible } onclose={ onClose }>
            <div className="room-password-modal">
                <h2 className="room-password-modal__title u-margin-bottom-small">Enter password</h2>
                { prompt ? <p className="room-password-modal__prompt u-margin-bottom-small">{ prompt }</p> : null }
                <PasswordInput 
                    value={ password }
                    onchange={ setPassword }
                    placeholder="Room password"
                    required
                    className="room-password-modal__input u-margin-bottom-small"
                />
                <PrimaryButton 
                    className="room-password-modal__enter-button"
                    onclick={ () => onSubscribeToRoom(roomId, password) }>
                        Let's chat
                </PrimaryButton>
            </div>
        </Modal>
    )
}

export default RoomPasswordModal;
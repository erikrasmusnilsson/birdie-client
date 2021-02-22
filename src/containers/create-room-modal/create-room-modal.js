import './create-room-modal.scss';
import '../../sass/utilities.scss';

import Modal from '../../components/modal';
import TextInput from '../../components/text-input';
import PasswordInput from '../../components/password-input';
import TextArea from '../../components/text-area';
import PrimaryButton from '../../components/buttons/primary-button';
import Checkbox from '../../components/checkbox';

const CreateRoomModal = ({
    visible,
    onclose,
    roomName,
    setRoomName,
    roomDescription,
    setRoomDescription,
    onCreateRoom,
    roomIsPrivate,
    setRoomIsPrivate,
    roomPassword,
    setRoomPassword
}) => {
    return (
        <Modal visible={ visible } onclose={ onclose }>
            <div className="create-room">
                <h2 className="create-room__title u-margin-bottom-medium">Let's chat!</h2>
                <TextInput 
                    placeholder="Room name"
                    icon="icon-edit-2"
                    value={ roomName }
                    onchange={ setRoomName }
                    required
                    min={ 4 }
                    max={ 32 }
                    className="u-margin-bottom-small"
                />
                <TextArea 
                    placeholder="Room description"
                    value={ roomDescription }
                    onchange={ setRoomDescription }
                    required
                    min={ 0 }
                    max={ 256 }
                    className="u-margin-bottom-small"
                />
                <div className="create-room__private-box u-margin-bottom-small">
                    <Checkbox 
                        className="create-room__private-checkbox"
                        checked={ roomIsPrivate } 
                        onchange={ setRoomIsPrivate }
                        name="room-private"
                        label="Private"
                    />
                </div>
                <PasswordInput 
                    placeholder="Room password"
                    icon="icon-unlock"
                    value={ roomPassword }
                    onchange={ setRoomPassword }
                    required
                    min={ 4 }
                    className="u-margin-bottom-small"
                    disabled={ !roomIsPrivate }
                />
                <PrimaryButton onclick={ onCreateRoom } className="create-room__create-room-button">Create room</PrimaryButton>
            </div>
        </Modal>
    );
}

export default CreateRoomModal;
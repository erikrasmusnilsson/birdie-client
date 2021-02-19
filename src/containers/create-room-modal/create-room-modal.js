import './create-room-modal.scss';
import '../../sass/utilities.scss';

import Modal from '../../components/modal';
import TextInput from '../../components/text-input';
import TextArea from '../../components/text-area';
import PrimaryButton from '../../components/buttons/primary-button';

const CreateRoomModal = ({
    visible,
    onclose,
    roomName,
    setRoomName
}) => {
    return (
        <Modal visible={ visible } onclose={ onclose }>
            <div className="create-room">
                <h2 className="create-room__title u-margin-bottom-medium">Create room</h2>
                <TextInput 
                    placeholder="Room name"
                    icon="icon-pencil"
                    value={ roomName }
                    onchange={ setRoomName }
                    required
                    min={ 4 }
                    max={ 32 }
                    className="u-margin-bottom-small"
                />
                <TextArea 
                    placeholder="Room description"
                    icon="icon-pencil"
                    value={ roomName }
                    onchange={ setRoomName }
                    required
                    min={ 0 }
                    max={ 256 }
                    className="u-margin-bottom-small"
                />
                <PrimaryButton className="create-room__create-room-button">Create room</PrimaryButton>
            </div>
        </Modal>
    );
}

export default CreateRoomModal;
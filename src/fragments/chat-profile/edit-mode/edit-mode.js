import './edit-mode.scss';

import TextArea from '../../../components/text-area';
import { SubtleButton, TextButton } from '../../../components/buttons';

const EditMode = ({
    description,
    setDescription,
    onCancel,
    onSave
}) => {
    return (
        <div className="chat-profile__edit-mode">
            <TextArea 
                className="chat-profile__edit-mode--description-input"
                value={ description } 
                onchange={ setDescription } 
                required 
                max={ 256 }
            />
            <div className="chat-profile__edit-mode--controls">
                <TextButton onclick={ onCancel } className="chat-profile__save-button u-margin-top-small">Cancel</TextButton> 
                <SubtleButton onclick={ onSave } className="chat-profile__save-button u-margin-top-small">Save</SubtleButton>
            </div>
        </div>
    )
}

export default EditMode;
import './edit-mode.scss';

import TextArea from '../../../components/text-area';
import { TextButton, SubtleButton } from '../../../components/buttons';

const EditMode = ({
    description,
    setDescription,
    onCancel,
    onSave
}) => {
    return (
        <div className="user-profile__edit-mode">
            <TextArea 
                className="user-profile__edit-mode--description-input"
                value={ description } 
                onchange={ setDescription } 
                required 
                max={ 256 }
            />
            <div className="user-profile__edit-mode--controls">
                <TextButton onclick={ onCancel } className="user-profile__save-button u-margin-top-small">Cancel</TextButton> 
                <SubtleButton onclick={ onSave } className="user-profile__save-button u-margin-top-small">Save</SubtleButton>
            </div>
        </div>
    )
}

export default EditMode;
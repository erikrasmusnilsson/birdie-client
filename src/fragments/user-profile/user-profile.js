import './user-profile.scss';
import { CSSTransition } from 'react-transition-group';

import ShadowBox from '../../components/shadow-box';
import TertiaryHeading from '../../components/headings/tertiary-heading';
import Icon from '../../components/icon';
import { TextButton, SubtleButton } from '../../components/buttons';
import TextArea from '../../components/text-area';

const UserProfile = ({
    description,
    setDescription,
    edit,
    onStartEdit,
    onCancel,
    onSave
}) => {
    return (
        <ShadowBox className="user-profile">
            <TertiaryHeading>Your profile, your home</TertiaryHeading>
            { edit ? (
                <div className="user-profile__content">
                    <CSSTransition>
                        <TextArea 
                            className="user-profile__description-input"
                            value={ description } 
                            onchange={ setDescription } 
                            required 
                            max={ 256 }
                        />
                    </CSSTransition>
                    <div className="user-profile__controls">
                        <TextButton onclick={ onCancel } className="user-profile__save-button u-margin-top-small">Cancel</TextButton> 
                        <SubtleButton onclick={ onSave } className="user-profile__save-button u-margin-top-small">Save</SubtleButton>
                    </div>
                </div>
            ) : (
                <div className="user-profile__content">
                    <CSSTransition>
                        <p className="user-profile__description">{ description }</p>
                    </CSSTransition>
                    <TextButton onclick={ onStartEdit } className="user-profile__edit-button">
                        <Icon icon="icon-pencil" className="user-profile__edit-icon" />
                    </TextButton>
                </div>
            )}
        </ShadowBox>
    )
}

export default UserProfile;
import './user-profile.scss';

import ShadowBox from '../../components/shadow-box';
import TertiaryHeading from '../../components/headings/tertiary-heading';
import Icon from '../../components/icon';
import { TextButton } from '../../components/buttons';
import EditMode from './edit-mode';

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
                <EditMode 
                    description={ description }
                    setDescription={ setDescription }
                    onCancel={ onCancel }
                    onSave={ onSave }
                />
            ) : (
                <div className="user-profile__content">
                    <p className="user-profile__description">{ description }</p>
                    <TextButton onclick={ onStartEdit } className="user-profile__edit-button">
                        <Icon icon="icon-pencil" className="user-profile__edit-icon" />
                    </TextButton>
                </div>
            )}
        </ShadowBox>
    )
}

export default UserProfile;
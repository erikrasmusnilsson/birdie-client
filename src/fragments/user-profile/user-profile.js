import './user-profile.scss';

import ShadowBox from '../../components/shadow-box';
import TertiaryHeading from '../../components/headings/tertiary-heading';
import Icon from '../../components/icon';
import { TextButton } from '../../components/buttons';
import EditMode from './edit-mode';

const UserProfile = ({
    description,
    setDescription,
    profileImage,
    setProfileImage,
    edit,
    onStartEdit,
    onCancel,
    onSave,
    className
}) => {
    const classNames = ["user-profile", className].join(" ");

    return (
        <ShadowBox className={ classNames }>
            <TertiaryHeading>Your profile, your home</TertiaryHeading>
            { edit ? (
                <EditMode 
                    description={ description }
                    setDescription={ setDescription }
                    profileImage={ profileImage }
                    setProfileImage={ setProfileImage }
                    onCancel={ onCancel }
                    onSave={ onSave }
                />
            ) : (
                <div className="user-profile__content">
                    <p className="user-profile__description">{ description }</p>
                    <TextButton onclick={ onStartEdit } className="user-profile__edit-button">
                        <Icon icon="icon-edit-2" className="user-profile__edit-icon" />
                    </TextButton>
                </div>
            )}
        </ShadowBox>
    )
}

export default UserProfile;
import './user-profile.scss';

import ShadowBox from '../../components/shadow-box';
import TertiaryHeading from '../../components/headings/tertiary-heading';
import Icon from '../../components/icon';
import TextButton from '../../components/buttons/text-button';

const UserProfile = ({
    description
}) => {
    return (
        <ShadowBox className="user-profile">
            <TertiaryHeading>Your profile, your home</TertiaryHeading>
            <p className="user-profile__description">{ description }</p>
            <TextButton className="user-profile__edit-button">
                <Icon icon="icon-pencil" className="user-profile__edit-icon" />
            </TextButton>
        </ShadowBox>
    )
}

export default UserProfile;
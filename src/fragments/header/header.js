import './header.scss';
import '../../sass/utilities.scss';

import Avatar from '../../components/avatar';
import TertiaryHeading from '../../components/headings/tertiary-heading';
import TextInput from '../../components/text-input';

const Header = ({
    img,
    firstName,
    lastName,
    searchQuery,
    setSearchQuery
}) => {
    return (
        <section className="header u-margin-top-large">
            <div className="profile">
                <Avatar src={ img } online story/>
                <div className="profile__text">
                    <p className="profile__welcome">Welcome, </p>
                    <TertiaryHeading>{ `${firstName} ${lastName}` }</TertiaryHeading>
                </div>
            </div>
            <TextInput 
                icon="icon-cool2"
                placeholder="Search for a room to join..."
                required
                className="header__search"
                value={ searchQuery }
                onchange={ setSearchQuery }
            />
        </section>
    )
}

export default Header;
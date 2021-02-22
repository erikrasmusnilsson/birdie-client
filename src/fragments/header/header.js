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
    setSearchQuery,
    className
}) => {
    const classNames = ["header", className].join(" ");

    return (
        <section className={ classNames }>
            <div className="profile">
                <Avatar src={ img } online story/>
                <div className="profile__text">
                    <p className="profile__welcome">Welcome, </p>
                    <TertiaryHeading>{ `${firstName} ${lastName}` }</TertiaryHeading>
                </div>
            </div>
            <TextInput 
                icon="icon-search"
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
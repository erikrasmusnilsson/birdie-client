import './header.scss';
import '../../sass/utilities.scss';

import Avatar from '../../components/avatar';
import TertiaryHeading from '../../components/headings/tertiary-heading';
import Search from '../../containers/search';

const Header = ({
    img,
    firstName,
    lastName,
    searchQuery,
    setSearchQuery,
    searchResults,
    onSubscribeToRoom,
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
            <Search 
                query={ searchQuery }
                setQuery={ setSearchQuery }
                results={ searchResults }
                onSubscribe={ onSubscribeToRoom }
            />
        </section>
    )
}

export default Header;
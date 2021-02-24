import './search.scss';

import TextInput from '../../components/text-input';
import SearchResult from '../search-result';

const Search = ({
    query,
    setQuery,
    results
}) => {
    const rooms = (results !== null && results.length > 0) ? results.map(room => {
        return (
            <li className="search__result" key={ room._id }>
                <SearchResult 
                    roomName={ room.name } 
                    ownerName={ room.ownerName } 
                    isPrivate={ room.isPrivate }
                    id={ room._id }
                />
            </li>
        )
    }) : null;

    return (
        <div className="search"> 
            <TextInput 
                icon="icon-search"
                placeholder="Search for a room to join..."
                required
                className="search__input"
                value={ query }
                onchange={ setQuery }
            />
            <ul className="search__results">
                { rooms }
            </ul>
        </div>
    )
}

export default Search; 
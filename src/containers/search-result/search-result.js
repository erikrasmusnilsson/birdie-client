import './search-result.scss';

import TextButton from '../../components/buttons/text-button';
import Icon from '../../components/icon';

const SearchResult = ({
    roomName,
    ownerName,
    id,
    onSubscribe,
    isPrivate
}) => {
    return (
        <div className="search-result">
            <div className="search-result__names">
                <h4 className="search-result__room-name">{ roomName ? roomName : "Loading..." }</h4>
                <p className="search-result__owner-name">{ ownerName ? ownerName : "Loading..." }</p>
            </div>
            { isPrivate ? <Icon icon="icon-unlock" className="search-result__private-icon" /> : null }
            <TextButton onclick={ () => onSubscribe(id, isPrivate) }>Join</TextButton>
        </div>
    )
}

export default SearchResult;
import './card.scss';
import '../../sass/utilities.scss';

import TertiaryHeading from '../headings/tertiary-heading';
import Avatar from '../avatar';
import Icon from '../icon';

const Card = ({
    img, 
    name,
    title,
    quote,
}) => {

    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__side--front-header u-margin-bottom-medium">
                    <Avatar src={ img } className="card__avatar"/>
                </div>
                <TertiaryHeading className="card__name">{ name }</TertiaryHeading>
                <p className="card__title">{ title }</p>
            </div>
            <div className="card__side card__side--back">
                <p className="card__back-title u-margin-bottom-medium">{ title }</p>
                <Avatar src={ img } className="card__avatar u-margin-bottom-medium"/>
                <TertiaryHeading className="card__back-name">{ name }</TertiaryHeading>
                <h3 className="card__quote">&quot;{ quote }&quot;</h3>
            </div>
        </div>
    );
}

export default Card;
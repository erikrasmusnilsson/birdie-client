import './home-introduction.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import { PrimaryHeading, TertiaryHeading } from '../../components/headings';

const HomeIntroduction = () => {
    return (
        <section className="row home-introduction">
            <PrimaryHeading className="home-introduction__title u-margin-bottom-large">modern, sleek and stripped down</PrimaryHeading>
            <div className="home-introduction__content">
                <div className="home-introduction__text">
                    <TertiaryHeading className="u-margin-bottom-small">just a chat with your mates</TertiaryHeading>
                    <p>Birdie never collects any of your data. Any and all chats are entirely between you and the other people in the room.</p>
                    <TertiaryHeading className="u-margin-bottom-small">simple and streamlined chatting</TertiaryHeading>
                    <p>Every part of Birdie is built to be as easy to use as possible. If you want to invite your grandma for a chat, there should be no problem.</p>
                </div>
                <div className="home-introduction__images">
                    <img className="home-introduction__image" src={`${process.env.PUBLIC_URL}/images/design/chat.png`} alt="" />
                    <img className="home-introduction__image" src={`${process.env.PUBLIC_URL}/images/design/dash.png`} alt="" />
                </div>
            </div>
        </section>
    );
}

export default HomeIntroduction;
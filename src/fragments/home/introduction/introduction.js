import './introduction.scss';
import '../../../sass/grid.scss';
import '../../../sass/utilities.scss';

import { PrimaryHeading, TertiaryHeading } from '../../../components/headings';
import ScrollFadeIn from '../../../components/scroll-fade-in';

const HomeIntroduction = () => {
    return (
        <section className="row home-introduction">
            <ScrollFadeIn direction="to-top" offset={ 0 }>
                <PrimaryHeading className="home-introduction__title u-margin-bottom-large">modern, sleek and stripped down</PrimaryHeading>
            </ScrollFadeIn>
            <div className="home-introduction__content">
                <div className="home-introduction__text">
                    <ScrollFadeIn direction="to-right" offset={ 0 }>
                        <TertiaryHeading className="u-margin-bottom-small">just a chat with your mates</TertiaryHeading>
                        <p>Birdie never collects any of your data. Any and all chats are entirely between you and the other people in the room.</p>
                        <TertiaryHeading className="u-margin-bottom-small">simple and streamlined chatting</TertiaryHeading>
                        <p>Every part of Birdie is built to be as easy to use as possible. If you want to invite your grandma for a chat, there should be no problem.</p>
                    </ScrollFadeIn>
                </div>
                <div className="home-introduction__images">
                    <ScrollFadeIn direction="to-left" offset={ 0 }>
                        <img className="home-introduction__image" src={`${process.env.PUBLIC_URL}/images/design/chat.png`} alt="" />
                        <img className="home-introduction__image" src={`${process.env.PUBLIC_URL}/images/design/dash.png`} alt="" />
                    </ScrollFadeIn>
                </div>
            </div>
        </section>
    );
}

export default HomeIntroduction;
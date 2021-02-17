import './about.scss';
import '../../sass/grid.scss';

import Card from '../../components/card';

const About = () => {
    return (
        <div className="about">
            <div className="row">
                <div className="column-1-of-2">
                    <Card 
                        name="Erik Rasmus Nilsson"
                        title="Frontend developer"
                        quote="I really feel like a pizza right now, what about you?"
                        img={ `${process.env.PUBLIC_URL}/images/developers/erik-rasmus-nilsson.png` }
                    />
                </div>
                <div className="column-1-of-2">
                    <Card 
                        name="Lisa Johansson Csatho"
                        title="Frontend developer"
                        quote="IM NOT OLD!!!"
                        img={ `${process.env.PUBLIC_URL}/images/developers/lisa.png` }
                    />
                </div>
            </div>
            <div className="row">
                <div className="column-1-of-2">
                    <Card 
                        name="Omar Kalthoum"
                        title="Backend developer"
                        quote="It's future work guys..."
                        img={ `${process.env.PUBLIC_URL}/images/developers/omar.png` }
                    />
                </div>
                <div className="column-1-of-2">
                    <Card 
                        name="Emil Hansen"
                        title="Backend developer"
                        quote="Wh.. whu.... what? No im not sleeping."
                        img={ `${process.env.PUBLIC_URL}/images/developers/mille.png` }
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
import './about.scss';
import '../../../sass/utilities.scss';

import About from '../../../containers/about';
import PrimaryHeading from '../../../components/headings/primary-heading';

const HomeAbout = () => {
    return (
        <div className="home-about">
            <PrimaryHeading className="u-margin-bottom-large">Created by students @ HKR</PrimaryHeading>
            <About />
        </div>
    );
}

export default HomeAbout;
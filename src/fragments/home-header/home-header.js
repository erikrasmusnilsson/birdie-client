import './home-header.scss';

const HomeHeader = () => {
    return (
        <header className="home-header">
            <div className="home-header__content">
                <div className="home-header__text">
                    <img className="home-header__title" src={`${process.env.PUBLIC_URL}/images/logo-white.png`} alt="Logo" />
                    <p className="home-header__description">
                        Birdie is the simplest and most stripped down chat application to date! We do not 
                        use any of your data for advertisements, nor do we sell them to third parties. 
                        When you are with us, you are only with us.
                    </p>
                </div>
                <div className="home-header__images">
                    <img className="home-header__image" src={`${process.env.PUBLIC_URL}/images/design/chat.png`} alt="" />
                    <img className="home-header__image" src={`${process.env.PUBLIC_URL}/images/design/dash.png`} alt="" />
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;
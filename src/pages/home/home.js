import './home.scss';
import { useState } from 'react';

import LoginModal from '../../containers/login-modal';
import TextButton from '../../components/buttons/text-button';

import HomeHeader from '../../fragments/home-header';
import HomeIntroduction from '../../fragments/home-introduction';
import SignUp from '../../fragments/sign-up';
import HomeAbout from '../../fragments/home-about';

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showLogin, setShowLogin] = useState('');

    return (
        <main className="home">
            <LoginModal 
                visible={ showLogin }
                onclose={ () => setShowLogin(false) }
                email={ email }
                setemail={ setEmail }
                password={ password }
                setpassword={ setPassword }
            />
            <div className="home__login-button">
                <TextButton onclick={ () => setShowLogin(true) }>Log in/sign up</TextButton>
            </div>
            <HomeHeader />
            <HomeIntroduction />
            <SignUp
                email={ email }
                setemail={ setEmail }
                password={ password }
                setpassword={ setPassword }
                confirmpassword={ confirmPassword }
                setconfirmpassword={ setConfirmPassword }
            />
            <HomeAbout />
        </main>
    );
}

export default Home;
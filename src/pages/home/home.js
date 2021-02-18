import './home.scss';
import { useState } from 'react';

import LoginModal from '../../containers/login-modal';
import TextButton from '../../components/buttons/text-button';

import HomeHeader from '../../fragments/home/header';
import HomeIntroduction from '../../fragments/home/introduction';
import SignUp from '../../fragments/sign-up';
import HomeAbout from '../../fragments/home/about';

const Home = () => {
    // Login
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Signup
    const [signupFirstName, setSignupFirstName] = useState('');
    const [signupLastName, setSignupLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmSignupPassword, setConfirmSignupPassword] = useState('');

    const [showLogin, setShowLogin] = useState('');

    return (
        <main className="home">
            <LoginModal 
                visible={ showLogin }
                onclose={ () => setShowLogin(false) }
                email={ loginEmail }
                setemail={ setLoginEmail }
                password={ loginPassword }
                setpassword={ setLoginPassword }
            />
            <div className="home__login-button">
                <TextButton onclick={ () => setShowLogin(true) }>Log in/sign up</TextButton>
            </div>
            <HomeHeader />
            <HomeIntroduction />
            <SignUp
                firstName={ signupFirstName }
                setfirstname={ setSignupFirstName }
                lastName={ signupLastName }
                setlastname={ setSignupLastName }
                email={ signupEmail }
                setemail={ setSignupEmail }
                password={ signupPassword }
                setpassword={ setSignupPassword }
                confirmpassword={ confirmSignupPassword }
                setconfirmpassword={ setConfirmSignupPassword }
            />
            <HomeAbout />
        </main>
    );
}

export default Home;
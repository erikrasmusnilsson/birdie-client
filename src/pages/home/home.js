import './home.scss';
import { useState } from 'react';
import { login, signup } from '../../services/user';
import { connect } from 'react-redux';
import { TYPE_LOG_IN, TYPE_REFRESH } from '../../store/actions';

import LoginModal from '../../containers/login-modal';
import TextButton from '../../components/buttons/text-button';

import HomeHeader from '../../fragments/home/header';
import HomeIntroduction from '../../fragments/home/introduction';
import SignUp from '../../fragments/sign-up';
import HomeAbout from '../../fragments/home/about';

const Home = ({ onLogin, user }) => {
    // Login
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginPrompt, setLoginPrompt] = useState('');

    // Signup
    const [signupPrompt, setSignupPrompt] = useState('');
    const [signupFirstName, setSignupFirstName] = useState('');
    const [signupLastName, setSignupLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmSignupPassword, setConfirmSignupPassword] = useState('');

    const [showLogin, setShowLogin] = useState('');

    const onLoginPressed = async () => {
        try {
            const user = await login(loginEmail, loginPassword);
            onLogin(user);
            setLoginPrompt("");
        } catch (err) {
            setLoginPrompt("Invalid username or password");
        }
    }

    const onSignupPressed = async () => {
        if (empty(signupFirstName) || empty(signupLastName)) {
            setSignupPrompt("Please enter both first name and last name");
            return;
        }
        if (empty(signupEmail)) {
            setSignupPrompt("Please enter your email");
            return;
        }
        if (empty(signupPassword)) {
            setSignupPrompt("Please enter a password and confirm it");
            return;
        }
        if (signupPassword !== confirmSignupPassword) {
            setSignupPrompt("Passwords does not match");
            return;
        }
        setSignupPrompt("");

        try {
            await signup(
                signupFirstName,
                signupLastName,
                signupEmail,
                signupPassword
            );
        } catch (err) {
            setSignupPrompt(err.message);
        }
    }

    const empty = value => {
        return value === "";
    }

    return (
        <main className="home">
            <LoginModal
                prompt={ loginPrompt }
                visible={ showLogin }
                onclose={ () => setShowLogin(false) }
                email={ loginEmail }
                setemail={ setLoginEmail }
                password={ loginPassword }
                setpassword={ setLoginPassword }
                onlogin={ onLoginPressed }
            />
            <div className="home__login-button">
                <TextButton onclick={ () => setShowLogin(true) }>Log in/sign up</TextButton>
            </div>
            <HomeHeader />
            <HomeIntroduction />
            <SignUp
                prompt={ signupPrompt }
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
                onsignup={ onSignupPressed }
            />
            <HomeAbout />
        </main>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch({
            type: TYPE_LOG_IN,
            user 
        }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
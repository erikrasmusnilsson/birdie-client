import './home.scss';
import { useEffect, useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { login, signup } from '../../services/user';
import { connect } from 'react-redux';
import { TYPE_LOG_IN } from '../../store/actions';
import * as SignUpForm from '../../hooks/useSignupForm';
import * as LoginForm from '../../hooks/useLoginForm';

import LoginModal from '../../containers/login-modal';
import TextButton from '../../components/buttons/text-button';

import HomeHeader from '../../fragments/home/header';
import HomeIntroduction from '../../fragments/home/introduction';
import SignUp from '../../fragments/sign-up';
import HomeAbout from '../../fragments/home/about';

const Home = ({ onLogin }) => {
    const history = useHistory();
    const signUpFormElement = useRef(); 
 

    // Login
    const [logIn, logInDispatch] = LoginForm.useLoginForm();
    const [loginPrompt, setLoginPrompt] = useState('');
    const [showLogin, setShowLogin] = useState('');

    // Signup
    const [signupPrompt, setSignupPrompt] = useState('');
    const [signUp, signUpDispatch] = SignUpForm.useSignupForm();

    const onLoginPressed = async () => {
        try {
            const user = await login(logIn.email, logIn.password);
            onLogin({...user, password: logIn.password});
            setLoginPrompt("");
            history.push("/panel");
        } catch (err) {
            setLoginPrompt("Invalid username or password");
        }
    }

    const onSignupPressed = async () => {
        if (empty(signUp.firstName) || empty(signUp.lastName)) {
            setSignupPrompt("Please enter both first name and last name");
            return;
        }
        if (empty(signUp.email)) {
            setSignupPrompt("Please enter your email");
            return;
        }
        if (empty(signUp.password)) {
            setSignupPrompt("Please enter a password and confirm it");
            return;
        }
        if (signUp.password !== signUp.confirmPassword) {
            setSignupPrompt("Passwords does not match");
            return;
        }
        setSignupPrompt("");

        try {
            await signup(
                signUp.firstName,
                signUp.lastName,
                signUp.email,
                signUp.password
            );
            setShowLogin(true);
        } catch (err) {
            setSignupPrompt(err.message);
        }
    }
    const onLoginSignup = () => {
        signUpFormElement.current.scrollIntoView({ behavior: "smooth" });
        setShowLogin(false);
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
                email={ logIn.email }
                setemail={ payload => logInDispatch({type: LoginForm.UPDATE_EMAIL, payload}) }
                password={ logIn.password }
                setpassword={ payload => logInDispatch({type: LoginForm.UPDATE_PASSWORD, payload}) }
                onlogin={ onLoginPressed }
                onsignup={onLoginSignup}
            />
            <div className="home__login-button">
                <TextButton onclick={ () => setShowLogin(true) }>Log in/sign up</TextButton>
            </div>
            <HomeHeader />
            <HomeIntroduction />
            <SignUp 
                containerref={signUpFormElement}
                prompt={ signupPrompt }
                firstName={ signUp.firstName }
                setfirstname={ payload => signUpDispatch({ type: SignUpForm.UPDATE_FIRST_NAME, payload }) }
                lastName={ signUp.lastName }
                setlastname={ payload => signUpDispatch({ type: SignUpForm.UPDATE_LAST_NAME, payload }) }
                email={ signUp.email }
                setemail={ payload => signUpDispatch({ type: SignUpForm.UPDATE_EMAIL, payload }) }
                password={ signUp.password  }
                setpassword={ payload => signUpDispatch({ type: SignUpForm.UPDATE_PASSWORD, payload }) }
                confirmpassword={ signUp.confirmPassword }
                setconfirmpassword={ payload => signUpDispatch({ type: SignUpForm.UPDATE_CONFIRM_PASSWORD, payload }) }
                onsignup={ onSignupPressed }
            />
            <HomeAbout />
        </main>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch({
            type: TYPE_LOG_IN,
            user 
        }),
    };
}

export default connect(null, mapDispatchToProps)(Home);
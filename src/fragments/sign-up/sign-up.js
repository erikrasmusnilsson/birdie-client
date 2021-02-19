import './sign-up.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import TextInput from '../../components/text-input';
import PasswordInput from '../../components/password-input';
import SecondaryButton from '../../components/buttons/secondary-button';
import ScrollFadeIn from '../../components/scroll-fade-in';

const SignUp = ({
    prompt,
    firstName, 
    setfirstname,
    lastName,
    setlastname,
    email,
    setemail,
    password,
    setpassword,
    confirmpassword,
    setconfirmpassword,
    onsignup
}) => {
    return (
        <section className="sign-up">
            <ScrollFadeIn direction="to-top" offset={ -200 }>
                <div className="sign-up__form">
                    <h2 className="u-margin-bottom-medium sign-up__title">Joooin us</h2>
                    { prompt !== "" ? <p className="sign-up__prompt">{ prompt }</p> : null }
                    <div className="sign-up__user-names">
                        <TextInput 
                            className="u-margin-bottom-small"
                            placeholder="First name" 
                            icon="icon-user" 
                            required
                            value={ firstName }
                            onchange={ setfirstname }    
                        />
                        <TextInput 
                            className="u-margin-bottom-small"
                            placeholder="Last name" 
                            icon="icon-user" 
                            required
                            value={ lastName }
                            onchange={ setlastname }    
                        />
                    </div>
                    <TextInput 
                        className="u-margin-bottom-small"
                        placeholder="Email" 
                        icon="icon-user" 
                        required
                        value={ email }
                        onchange={ setemail }    
                    />
                    <div className="sign-up__password u-margin-bottom-small">
                        <PasswordInput 
                            className="u-margin-bottom-small"
                            placeholder="Password" 
                            icon="icon-key" 
                            required 
                            min={6} 
                            value={ password }
                            onchange={ setpassword }    
                        />
                        <PasswordInput 
                            className="u-margin-bottom-small"
                            placeholder="Repeat password"
                            icon="icon-key"
                            required
                            min={ 6 }
                            value={ confirmpassword }
                            onchange={ setconfirmpassword }
                        />
                    </div>
                    <SecondaryButton onclick={ onsignup } className="sign-up__sign-up-button">Let's chat!</SecondaryButton>
                </div>
            </ScrollFadeIn>
        </section>
    );
}

export default SignUp;
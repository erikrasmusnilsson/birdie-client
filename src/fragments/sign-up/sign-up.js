import './sign-up.scss';
import '../../sass/grid.scss';
import '../../sass/utilities.scss';

import TextInput from '../../components/text-input';
import PasswordInput from '../../components/password-input';
import SecondaryButton from '../../components/buttons/secondary-button';
import PrimaryHeading from '../../components/headings/primary-heading';

const SignUp = ({
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
            <div className="sign-up__form">
                <h2 className="u-margin-bottom-medium sign-up__title">Joooin us</h2>
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
        </section>
    );
}

export default SignUp;
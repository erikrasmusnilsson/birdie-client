import './login-modal.scss';
import '../../sass/utilities.scss';
import '../../sass/grid.scss';

import Modal from '../../components/modal';
import TextInput from '../../components/text-input';
import PasswordInput from '../../components/password-input';
import { PrimaryButton, TextButton } from '../../components/buttons';

const LoginModal = ({
    prompt,
    visible, 
    onclose,
    email,
    setemail,
    password,
    setpassword,
    onlogin,
    onsignup
}) => {
    return (
        <Modal visible={ visible } onclose={ onclose }>
            <div className="login">
                <h2 className="login__title u-margin-bottom-medium">Log in</h2>
                { prompt !== "" ? <p className="login__prompt">{ prompt }</p> : null }
                <TextInput placeholder='Email'
                    value={ email }
                    onchange={ setemail } 
                    required 
                    className="u-margin-bottom-small"
                    icon="icon-user" />
                <PasswordInput placeholder='Password'
                    value={ password }
                    onchange={ setpassword } 
                    required
                    min={ 6 }
                    className="u-margin-bottom-medium"
                    icon="icon-key" />
                <PrimaryButton onclick={ onlogin } className="login__login-button">Log in</PrimaryButton>
                <TextButton onclick={ onsignup } className="login__signup-button">or sign up here</TextButton>
            </div>
        </Modal>
    );
}

export default LoginModal;
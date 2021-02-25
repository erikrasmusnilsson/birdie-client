import { useReducer } from 'react';

const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_CONFIRM_PASSWORD = "UPDATE_CONFIRM_PASSWORD";

const useSignupForm = () => {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_FIRST_NAME:
                return {...state, firstName: action.payload};
            case UPDATE_LAST_NAME:
                return {...state, lastName: action.payload};
            case UPDATE_EMAIL:
                return {...state, email: action.payload};
            case UPDATE_PASSWORD:
                return {...state, password: action.payload};
            case UPDATE_CONFIRM_PASSWORD:
                return {...state, confirmPassword: action.payload};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    return [state, dispatch];
}

export { 
    useSignupForm,
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_CONFIRM_PASSWORD,
};
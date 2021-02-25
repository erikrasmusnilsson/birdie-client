import { useReducer } from 'react';

const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

const useLoginForm = () => {
    const init = {
        email: '',
        password: '',
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_EMAIL:
                return {...state, email: action.payload};
            case UPDATE_PASSWORD:
                return {...state, password: action.payload};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    return [state, dispatch];
}

export {
    useLoginForm,
    UPDATE_PASSWORD,
    UPDATE_EMAIL
}
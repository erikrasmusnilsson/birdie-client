import { TYPE_LOG_IN, TYPE_LOG_OUT } from './actions';

const initial = {
    user: {}
}

const reducer = (_state = initial, action) => {
    const state = {..._state};
    switch (action.type) {
        case TYPE_LOG_IN:
            state.user = {
                _id: action.user._id,
                email: action.user.email,
                description: action.user.description,
                firstName: action.user.firstName,
                lastName: action.user.lastName
            };
            break;
        case TYPE_LOG_OUT: 
            state.user = {};
            break;
    }
    return state;
}

export default reducer;
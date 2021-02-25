import { useReducer } from 'react'; 

const UPDATE_ROOM_NAME = "UPDATE_ROOM_NAME";
const UPDATE_ROOM_DESCRIPTION = "UPDATE_ROOM_DESCRIPTION";
const UPDATE_ROOM_IS_PRIVATE = "UPDATE_ROOM_IS_PRIVATE";
const UPDATE_ROOM_PASSWORD = "UPDATE_ROOM_PASSWORD";
const RESET_ROOM = "RESET_ROOM";

const useCreateRoomForm = () => {
    const init = {
        roomName: '',
        roomDescription: '',
        roomIsPrivate: false,
        roomPassword: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_ROOM_NAME:
                return {...state, roomName: action.payload};
            case UPDATE_ROOM_DESCRIPTION:
                return {...state, roomDescription: action.payload};
            case UPDATE_ROOM_IS_PRIVATE:
                return {...state, roomIsPrivate: action.payload};
            case UPDATE_ROOM_PASSWORD:
                return {...state, roomPassword: action.payload};
            case RESET_ROOM:
                return init;
            default:
                return state;
        }
    }

    return useReducer(reducer, init);
}

export {
    useCreateRoomForm,
    UPDATE_ROOM_NAME,
    UPDATE_ROOM_DESCRIPTION,
    UPDATE_ROOM_PASSWORD,
    UPDATE_ROOM_IS_PRIVATE,
    RESET_ROOM
}
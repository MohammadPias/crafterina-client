import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_SIGNOUT
} from "./UserType";

const initialUserState = {
    loading: true,
    user: {},
    error: '',
}
const UserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_SUCCESS: return {
            ...state,
            user: action.payload,
            loading: false,
            error: ''

        }
        case USER_FAILURE: return {
            ...state,
            user: {},
            loading: false,
            error: action.payload

        }
        case USER_SIGNOUT: return {
            ...state,
            user: {},
            loading: false,
            error: ''
        }
        default: return state;
    };
}

export default UserReducer;
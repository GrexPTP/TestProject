import AuthActionTypes from "./types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    token: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token,
                error: null
            };
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                token: null,
                error: null
            };
        case AuthActionTypes.SIGN_IN_FAILURE:
        case AuthActionTypes.SIGN_OUT_FAILURE:
        case AuthActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
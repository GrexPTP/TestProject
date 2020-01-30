import AuthActionTypes from './types'
const INITIAL_STATE = {
    token: null,
    role: null,
    error: null,
}
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes.SIGN_UP_SUCCESS:
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                role:   action.payload.role,
                error: null
            };
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                token: null,
                role: null,
                error: null
            };
        case AuthActionTypes.LOGIN_FAILURE:
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
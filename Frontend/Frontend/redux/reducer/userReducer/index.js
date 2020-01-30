import UserActionTypes from './types'
const INITIAL_STATE = {
    user : null,
    error: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.GET_USER_SUCCESS:
        case UserActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case UserActionTypes.GET_USER_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case UserActionTypes.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default userReducer

import ManageActionTypes from "./types"
const INITIAL_STATE = {
    list: [],
    individual: null,
    error: null
}
const manageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ManageActionTypes.GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case ManageActionTypes.GET_LIST_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ManageActionTypes.GET_INDIVIDUAL_SUCCESS:
            return {
                ...state,
                individual: action.payload
            }
        case ManageActionTypes.GET_INDIVIDUAL_FAILURE:
            return {
                ...state,
                error:  action.payload
            }
        case ManageActionTypes.UPDATE_INDIVIDUAL_SUCCESS:
            return {
                ...state,
                individual: action.payload
            }
        case ManageActionTypes.UPDATE_INDIVIDUAL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ManageActionTypes.CREATE_INDIVIDUAL_FAILURE:
        case ManageActionTypes.DELETE_INDIVIDUAL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default manageReducer
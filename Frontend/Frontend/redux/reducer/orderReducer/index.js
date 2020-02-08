import OrderActionTypes from './types'
const INITIAL_STATE = {
    order: null,
    orders: [],
    error: null,
}
const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OrderActionTypes.GET_ORDER_SUCCESS:
        case OrderActionTypes.CREATE_ORDER_SUCCESS:
        case OrderActionTypes.UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                error: null
            };
        case OrderActionTypes.GET_ORDER_FAILURE:
        case OrderActionTypes.GET_ORDERS_FAILURE:
        case OrderActionTypes.CREATE_ORDER_FAILURE:
        case OrderActionTypes.UPDATE_ORDER_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case OrderActionTypes.GET_ORDERS_SUCCESS: 
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
};

export default orderReducer;
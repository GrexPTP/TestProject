import OrderActionTypes from './types'
export const getOrderStart = (token, id, navigation) => ({
    type: OrderActionTypes.GET_ORDER_START,
    payload: {token, id, navigation}
})
export const getOrderSuccess = order => ({
    type: OrderActionTypes.GET_ORDER_SUCCESS,
    payload: order
}) 
export const getOrderFailure = error => ({
    type: OrderActionTypes.GET_ORDER_FAILURE,
    payload: error
})
export const getOrdersStart = token => ({
    type: OrderActionTypes.GET_ORDERS_START,
    payload: token
})
export const getOrdersSuccess = orders => ({
    type: OrderActionTypes.GET_ORDERS_SUCCESS,
    payload: orders
}) 
export const getOrdersFailure = error => ({
    type: OrderActionTypes.GET_ORDERS_FAILURE,
    payload: error
})
export const createOrderStart = (token, data) => ({
    type: OrderActionTypes.CREATE_ORDER_START,
    payload: {token, data}
})
export const createOrderSuccess = order => ({
    type: OrderActionTypes.CREATE_ORDER_SUCCESS,
    payload: order
})
export const createOrderFailure = error => ({
    type: OrderActionTypes.CREATE_ORDER_FAILURE,
    payload: error
})
export const updateOrderStart = (token, data) => ({
    type: OrderActionTypes.UPDATE_ORDER_START,
    payload: {token, data}
})
export const updateOrderSuccess = order => ({
    type: OrderActionTypes.UPDATE_ORDER_SUCCESS,
    payload: order
})
export const updateOrderFailure = error => ({
    type: OrderActionTypes.UPDATE_ORDER_FAILURE,
    payload: error
}) 
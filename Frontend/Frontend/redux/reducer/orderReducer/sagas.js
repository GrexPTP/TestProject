import { takeLatest, put, all, call } from 'redux-saga/effects';
import OrderActionTypes from './types'
import { createOrderSuccess, createOrderFailure, getOrdersSuccess, getOrdersFailure, getOrderSuccess, getOrderFailure, updateOrderSuccess, updateOrderFailure} from './actions'
export function* getOrder({payload: {token, id, navigation}}){
    try {
        const response = yield fetch('http://tkb.miennam24h.vn/api/order', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                  id
              })
        })
        const result = yield response.json()
        yield put(getOrderSuccess(result.success))
        yield navigation.navigate('Detail', {id})
    } catch (error) {
        yield put(getOrderFailure(error))
    }
}
export function* getOrders({payload}){
    try {
        const response = yield fetch('http://tkb.miennam24h.vn/api/orders',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload}`
              }
        })
        const result = yield response.json()
        yield put(getOrdersSuccess(result.success))
    } catch (error) {
        yield put(getOrdersFailure(error))
    }
}
export function* createOrder({payload: {token, data}}){
    try{
        const {email, name, phone, address, id_number, productsList} = data
        const response = yield fetch('http://tkb.miennam24h.vn/api/create_order',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                email,
                name,
                phone,
                address,
                id_number,
                data: productsList
            })
        })

        const result = yield response.json()
        yield console.log(result)
        yield put(createOrderSuccess(result.success))
    }catch(error){
        yield put(createOrderFailure(error))
    }
}
export function* updateOrder({payload: {token, data}}){
    try {
        const {id, name, email,  phone, id_number, address, productsList, images } = data
        const response = yield fetch('http://tkb.miennam24h.vn/api/update_order',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                email,
                id,
                name,
                phone,
                id_number,
                address,
                data: productsList,
                images
            })
        })
        const result = yield response.json()
        yield console.log(result)
        yield put(updateOrderSuccess(result.success))
    } catch (error) {
        yield put(updateOrderFailure(error))
    }    
}
export function* onGetOrderStart(){
    yield takeLatest(OrderActionTypes.GET_ORDER_START, getOrder)
}
export function* onCreateOrderStart(){
    yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder)
}
export function* onGetOrdersStart(){
    yield takeLatest(OrderActionTypes.GET_ORDERS_START, getOrders)
}
export function* onUpdateOrderStart(){
    yield takeLatest(OrderActionTypes.UPDATE_ORDER_START, updateOrder)
}
export function* orderSagas(){
    yield all([
        call(onGetOrderStart),
        call(onCreateOrderStart),
        call(onGetOrdersStart),
        call(onUpdateOrderStart)
    ])
}
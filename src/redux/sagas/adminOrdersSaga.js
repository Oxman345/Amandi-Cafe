import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TO_CART" actions
function* fetchOrders() {
    try{
        const response = yield axios.get('/api/fetch-orders');
        yield console.log('In fetchOrders', response.data);
        yield put ({ type: 'SET_ORDERS', payload: response.data })
    }
    catch(error) {
        console.log( 'Trouble fetching orders', error )
    }
}; // end addItem

function* fetchOrdersSaga() {
  yield takeLatest('FETCH_ORDERS', fetchOrders);
} // end menuSaga

export default fetchOrdersSaga;
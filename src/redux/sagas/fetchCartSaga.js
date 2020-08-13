import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TO_CART" actions
function* fetchItem(action) {
    try{
        console.log('orderId is', action.payload)
        const response = yield axios.get(`/api/fetch-cart/${action.payload.orderId}`, action.payload);
        yield console.log('In fetchItem', response.data, action.payload);
        yield put ({ type: 'SET_CART', payload: response.data })
    }
    catch(error) {
        console.log( 'Trouble fetching cart', error )
    }
}; // end addItem

function* fetchCartSaga() {
  yield takeLatest('FETCH_CART', fetchItem);
} // end menuSaga

export default fetchCartSaga;
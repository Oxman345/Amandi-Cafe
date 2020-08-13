import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TO_CART" actions
function* addItem(action) {
    try{
        const response = yield axios.post('/api/add-to-cart', action.payload);
        yield console.log('In addItem', response.data, action.payload);
        // const getResponse = yield axios.get('/api/order')
        yield console.log('Order id is', response.data)
        yield put ({ type: 'ORDER_ID', payload: response.data })
    }
    catch(error) {
        console.log( 'Trouble adding item', error )
    }
}; // end addItem

function* addToCartSaga() {
  yield takeLatest('ADD_TO_CART', addItem);
} // end menuSaga

export default addToCartSaga;
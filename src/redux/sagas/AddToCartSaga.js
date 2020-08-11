import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TO_CART" actions
function* addItem() {
    try{
        const response = yield axios.post('/api/cart');
        yield console.log('In addItem', response.data);
        yield put ({ type: 'SET_CART', payload: response.data })
    }
    catch(error) {
        console.log( 'Trouble adding item', error )
    }
}; // end addItem

function* cartSaga() {
  yield takeLatest('ADD_TO_CART', addItem);
} // end menuSaga

export default cartSaga;
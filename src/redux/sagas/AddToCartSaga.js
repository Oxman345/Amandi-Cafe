import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_TO_CART" actions
function* addItem(action) {
    try{
        const response = yield axios.post('/api/add-to-cart', action.payload);
        yield console.log('In addItem', response.data, action.payload);
        // yield put ({ type: 'SET_CART', payload: response.data })
    }
    catch(error) {
        console.log( 'Trouble adding item', error )
    }
}; // end addItem

function* addToCartSaga() {
  yield takeLatest('ADD_TO_CART', addItem);
} // end menuSaga

export default addToCartSaga;
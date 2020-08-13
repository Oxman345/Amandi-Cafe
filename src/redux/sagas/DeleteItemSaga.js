import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_ITEM" actions
function* deleteItem(action) {
    try{
        const response = yield axios.delete('/api/delete-item', action.payload);
        yield console.log('In deleteItem', response.data, action.payload);
        // yield put ({ type: 'SET_CART', payload: response.data })
    }
    catch(error) {
        console.log( 'Trouble adding item', error )
    }
}; // end deleteItem

function* addToCartSaga() {
  yield takeLatest('DELETE_ITEM', deleteItem);
} // end menuSaga

export default addToCartSaga;
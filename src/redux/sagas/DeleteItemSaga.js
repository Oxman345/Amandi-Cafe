import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "DELETE_ITEM" actions
function* deleteItem(action) {
    try{
        console.log('deleteItem =======>', action.payload.item_id, action.payload.order_id)
        const response = yield axios.delete(`/api/delete-item/${action.payload.item_id}`);
        yield console.log('In deleteItem', response.data, action.payload);
        yield put ({type: 'FETCH_CART', payload: {orderId: action.payload.order_id}});
    }
    catch(error) {
        console.log( 'Trouble deleting item', error )
    }
}; // end deleteItem

function* addToCartSaga() {
  yield takeLatest('DELETE_ITEM', deleteItem);
} // end menuSaga

export default addToCartSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MENU" actions
function* fetchMenu() {
    try{
        const response = yield axios.get('/api/menu');
        yield console.log('In fetchMenu', response.data);
        yield put ({ type: 'SET_MENU', payload: response.data})
    }
    catch(error) {
        console.log( 'Trouble fetching menu', error )
    }
}; // end fetchMenu

function* menuSaga() {
  yield takeLatest('FETCH_MENU', fetchMenu);
} // end menuSaga

export default menuSaga;
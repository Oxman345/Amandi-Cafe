import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMenu() {
    try{
        console.log('In fetchMenu generator.')
        const response = yield axios.get('/api/menu');
        yield console.log('In fetchMenu', response.data);
        yield put ({ type: 'SET_MENU', payload: response.data})
    }
    catch(error) {
        console.log( 'Trouble fetching menu', error )
    }
};

function* menuSaga() {
    console.log('====> menuSaga')
  yield takeLatest('FETCH_MENU', fetchMenu);
}

export default menuSaga;
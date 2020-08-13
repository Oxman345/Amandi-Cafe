import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MENU" actions
function* updateProfile() {
    try{
        const response = yield axios.put('/api/update-profile');
        yield console.log('In updateProfile', response.data);
        // yield put ({ type: 'SET_PROFILE', payload: response.data})
    }
    catch(error) {
        console.log( 'Trouble updating profile', error )
    }
}; // end updateProfile

function* updateProfileSaga() {
  yield takeLatest('UPDATE_PROFILE', updateProfile);
} // end updateProfileSaga

export default updateProfileSaga;
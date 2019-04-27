import { fork, all } from 'redux-saga/effects';
import { watchUser } from 'sagas/user';

export default function* rootSaga() {
    yield all([
        fork(watchUser)
    ]);
}
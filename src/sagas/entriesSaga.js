import { call, put, take } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'
import axios from 'axios';

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('running entries sagas')

    const result = yield call(axios, 'http://localhost:3001/entries');
    console.log("🚀 ~ file: entriesSaga.js ~ line 10 ~ function*getAllEntries ~ result", result)
    yield put({type: entriesTypes.POPULATE_ENTRIES, payload: result.data})
}
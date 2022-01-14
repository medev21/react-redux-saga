import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'
import axios from 'axios';

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('running entries sagas')

    const result = yield call(axios, 'http://localhost:3001/entries');
    console.log("🚀 ~ file: entriesSaga.js ~ line 10 ~ function*getAllEntries ~ result", result)
    yield put({type: entriesTypes.POPULATE_ENTRIES, payload: result.data})
}

export function* getEntryDetails(id) {
    const { data }= yield call(axios, `http://localhost:3001/values/${id}`);
    console.log(data);
    yield put({type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: {id, entry: data}})
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id)
    }
}
import { call,put, takeLatest } from "redux-saga/effects";
import {normalize} from "normalizr";
import api from "../api";
import {
    addClientFailed,
    addClientSuccess, addClientTypeFailed,
    addClientTypeSuccess,
    clientSearchFailed,
    clientSearchSuccess
} from "../actions/client";
import {ADD_CLIENT, ADD_CLIENT_TYPE, CLIENT_SEARCH} from "../types";
import {clientSchema, clientTypeSchema} from "../schemas";


export function* watchAddClient() {
    /*coming from our form*/
    yield takeLatest(ADD_CLIENT, addClientSaga);
}

export function* addClientSaga(action) {
    try {
        yield console.log(action.client);
        const res = yield call(api.client.add, action.data);
        yield put(addClientSuccess(normalize(res.data,clientSchema)));
        //yield put("ADD_CLIENT_SUCCESS", action);
    } catch (e){
        //yield put({type: "ADD_CLIENT_FAILED", message:(e)});
        yield put(addClientFailed(e.response.data.errors));
    }
}

export function* watchAddClientType() {
    /*coming from our form*/
    yield takeLatest(ADD_CLIENT_TYPE, addClientTypeSaga);
}

export function* addClientTypeSaga(action) {
    try {
        yield console.log(action.data);
        const res = yield call(api.client_type.add, action.data);
        yield put(addClientTypeSuccess(normalize(res.data,clientTypeSchema)));
        //yield put("ADD_CLIENT_SUCCESS", action);
    } catch (e){
        //yield put({type: "ADD_CLIENT_FAILED", message:(e)});
        yield put(addClientTypeFailed(e.response.data.errors));
    }
}

export function* watchSearchClient() {
    yield takeLatest(CLIENT_SEARCH, searchClientSaga);
}

export function* searchClientSaga(action) {
    try{
        const clients = yield call(api.client.search, action.query);
        yield put(clientSearchSuccess(clients));
    } catch (e){
        yield put(clientSearchFailed(e.response.data.errors));
    }
}
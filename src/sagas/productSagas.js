import { call,put, takeLatest } from "redux-saga/effects";
//import {normalize} from "normalizr";
import api from "../api";
import {ADD_PRODUCT, PRODUCT_SEARCH} from "../types";
import {addProductSuccess,addProductFailed, productSearchFailed, productSearchSuccess} from "../actions/product";
//import {clientSchema} from "../schemas";


export function* watchAddProduct() {
    /*coming from our form*/
    yield takeLatest(ADD_PRODUCT, addProductSaga);
}

export function* addProductSaga(action) {
    try {
        yield console.log(action.product);
        debugger;
        const product = yield call(api.product.add, action.product);
        yield put(addProductSuccess(product));
        //yield put("ADD_CLIENT_SUCCESS", action);
    } catch (e){
        //yield put({type: "ADD_CLIENT_FAILED", message:(e)});
        yield put(addProductFailed(e.response.data.errors));
    }
}

export function* watchSearchProduct() {
    yield takeLatest(PRODUCT_SEARCH, searchProductSaga);
}

export function* searchProductSaga(action) {
    try{
        const products = yield call(api.product.search, action.query);
        yield put(productSearchSuccess(products));
    } catch (e){
        yield put(productSearchFailed(e.response.data.errors));
    }
}
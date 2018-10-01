import { call,put, takeLatest } from "redux-saga/effects";
import {normalize} from "normalizr";
import api from "../api";
import {ADD_PRODUCT, FETCH_PRODUCTS, PRODUCT_SEARCH} from "../types";
import {
    addProductSuccess,
    addProductFailed,
    productSearchFailed,
    productSearchSuccess,
    fetchProducts, productsFetched
} from "../actions/product";
import {productSchema} from "../schemas";
import customHistory from "../history";
//import {clientSchema} from "../schemas";


export function* watchAddProduct() {
    /*coming from our form*/
    yield takeLatest(ADD_PRODUCT, addProductSaga);
}

export function* addProductSaga(action) {
    try {
        const res = yield call(api.product.add, action.data);
        yield put(addProductSuccess(normalize(res.data,productSchema)));
        customHistory.push("/products");
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
        yield put(productSearchSuccess(normalize(products,[productSchema])));
    } catch (e){
        yield put(productSearchFailed(e.response.data.errors));
    }
}

export function* watchFetchProducts() {
    yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

export function* fetchProductsSaga() {
    try {
        const res = yield call(api.product.getAll);
        yield put(productsFetched(normalize(res.data,[productSchema])));
    } catch (e) {
        //reusing productSearchFailed action!!
        yield put(productSearchFailed(e.response.data.errors));
    }
}
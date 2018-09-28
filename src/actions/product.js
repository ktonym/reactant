import {
    ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILED, ADD_PRODUCT, PRODUCT_SEARCH, PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAILED, FETCH_PRODUCTS, PRODUCTS_FETCHED
} from "../types";

export const addProductSuccess = (data) => ({
    type: ADD_PRODUCT_SUCCESS,
    data
});

export const addProductFailed = errors => ({
    type: ADD_PRODUCT_FAILED,
    errors
});

/*To be used in the form to request addProduct*/
export const addProductRequest = (data) => ({
    type: ADD_PRODUCT,
    data
});

export const fetchProducts = (data) => ({
    type: FETCH_PRODUCTS,
    data
});
 // data.entities.products
export const productsFetched = (data) => ({
    type: PRODUCTS_FETCHED,
    data
});

export const productSearchRequest = (query) => ({
    type: PRODUCT_SEARCH,
    query
});

export const productSearchSuccess = (data) =>({
    type: PRODUCT_SEARCH_SUCCESS,
    data
});

export const productSearchFailed = errors => ({
    type: PRODUCT_SEARCH_FAILED,
    errors
});

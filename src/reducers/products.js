import { createSelector } from "reselect";
import {ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS, PRODUCT_SEARCH_SUCCESS, PRODUCTS_FETCHED} from "../types";

export default function (state = {}, action = {}) {
    switch (action.type){
        case ADD_PRODUCT_SUCCESS:
        case PRODUCTS_FETCHED:
            return { ...state, ...action.data.entities.products };
        case ADD_PRODUCT_FAILED:
            return { ...state, ...action.message };
        case PRODUCT_SEARCH_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

//SELECTORS
export const productsSelector = state => state.products;

export const allProductsSelector = createSelector(
    productsSelector,productsHash => Object.values(productsHash)
);
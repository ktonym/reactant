import {
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_FAILED,
    ADD_CLIENT,
    CLIENT_SEARCH,
    CLIENT_SEARCH_SUCCESS,
    CLIENT_SEARCH_FAILED,
    ADD_CLIENT_TYPE,
    ADD_CLIENT_TYPE_SUCCESS,
    ADD_CLIENT_TYPE_FAILED,
    FETCH_CLIENT_TYPES,
    CLIENT_TYPES_FETCHED
} from "../types";

/*To be used in the form to request addClient*/
export const addClientRequest = (data) => ({
    type: ADD_CLIENT,
    data
});

export const addClientSuccess = (data) => ({
    type: ADD_CLIENT_SUCCESS,
    data
});

export const addClientFailed = errors => ({
    type: ADD_CLIENT_FAILED,
    errors
});

export const clientSearchRequest = (query) => ({
    type: CLIENT_SEARCH,
    query
});

export const clientSearchSuccess = (data) =>({
    type: CLIENT_SEARCH_SUCCESS,
    data
});

export const clientSearchFailed = errors => ({
    type: CLIENT_SEARCH_FAILED,
    errors
});

export const addClientTypeRequest = (data) => ({
    type: ADD_CLIENT_TYPE,
    data
});

export const addClientTypeSuccess = (data) => ({
    type: ADD_CLIENT_TYPE_SUCCESS,
    data
});

export const addClientTypeFailed = errors => ({
    type: ADD_CLIENT_TYPE_FAILED,
    errors
});

export const fetchClientTypes = () => ({
    type: FETCH_CLIENT_TYPES
});

export const clientTypesFetched = (data) => ({
    type: CLIENT_TYPES_FETCHED,
    data
});


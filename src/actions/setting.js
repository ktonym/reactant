import {
    ADD_SETTING,
    ADD_SETTING_FAILED,
    ADD_SETTING_SUCCESS,
    FETCH_SETTINGS,
    FETCH_SETTINGS_FAILED,
    SETTINGS_FETCHED
} from "../types";

export const addSettingRequest = (data) => ({
    type: ADD_SETTING,
    data
});

export const addSettingSuccess = (data) => ({
    type: ADD_SETTING_SUCCESS,
    data
});

export const addSettingFailed = (data) => ({
    type: ADD_SETTING_FAILED,
    data
});

export const fetchSettings = (productId) => ({
    type: FETCH_SETTINGS,
    productId
});

export const settingsFetched = (data) => ({
    type: SETTINGS_FETCHED,
    data
});

export const fetchSettingsFailed = (data) => ({
    type: FETCH_SETTINGS_FAILED,
    data
});
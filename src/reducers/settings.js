import { createSelector } from "reselect";
import {ADD_SETTING_FAILED, ADD_SETTING_SUCCESS, FETCH_SETTINGS, SETTINGS_FETCHED} from "../types";

export default function (state = {}, action = {}) {
    switch (action.type) {
        case ADD_SETTING_SUCCESS:
        case SETTINGS_FETCHED:
            return { ...state, ...action.data.entities.settings };
        case ADD_SETTING_FAILED:
            return { ...state, ...action.message };
        default:
            return state;
    }
};

//SELECTORS

export const settingsSelector = state => state.settings;

export const allSettingsSelector = createSelector(
    settingsSelector,settingsHash => Object.values(settingsHash)
);


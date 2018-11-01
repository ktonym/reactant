import {
    ADD_CLIENT_TYPE_SUCCESS,
    ADD_CLIENT_TYPE_FAILED
} from "../types";
import { createSelector } from "reselect";

export default function clienttypes(state = {}, action = {}){
    switch (action.type){
        case ADD_CLIENT_TYPE_SUCCESS:
            return { ...state, ...action.data.entities.clienttypes };
        case ADD_CLIENT_TYPE_FAILED:
            return { ...state, ...action.message };
        default:
            return state;
    }
} ;

//SELECTORS
export const clientTypesSelector = state => state.clienttypes;

export const allClientTypesSelector = createSelector(
    clientTypesSelector,clientTypesHash => Object.values(clientTypesHash)
);


import {
    ADD_CLIENT,
    ADD_CLIENT_FAILED,
    ADD_CLIENT_TYPE_FAILED,
    RESET_PASS_REQ_FAILED,
    USER_LOGIN_FAILED
} from "../types";

export default function formErrors(state = {}, action={}){
    switch(action.type){
        case ADD_CLIENT:
            return {...state, client: {}};
        case ADD_CLIENT_FAILED:
            return {...state, client: action.errors};
        case ADD_CLIENT_TYPE_FAILED:
            return {...state, clienttype: action.errors};
        case USER_LOGIN_FAILED:
            return {...state, login: action.errors};
        case RESET_PASS_REQ_FAILED:
            return {...state, resetPassword: action.errors};
        default: return state;
    }
}
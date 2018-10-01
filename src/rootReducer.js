import {combineReducers} from "redux";
import clients from "./reducers/clients";
import formErrors from "./reducers/formErrors";
import user from "./reducers/user";
import products from "./reducers/products";
import settings from "./reducers/settings";

export default combineReducers({
    user,
    clients,products,settings,
    formErrors
});
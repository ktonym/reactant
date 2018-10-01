import {call,takeLatest,put} from "redux-saga/effects";
import {normalize} from "normalizr";
import {ADD_SETTING, FETCH_SETTINGS} from "../types";
import api from "../api";
import {addSettingFailed, addSettingSuccess, fetchSettingsFailed, settingsFetched} from "../actions/setting";
import {settingSchema} from "../schemas";
import customHistory from "../history";

export function* watchAddSetting() {
    yield takeLatest(ADD_SETTING,addSettingSaga);
}

export function* addSettingSaga(action) {
    try {
        const res = yield call(api.setting.add,action.data);
        yield put(addSettingSuccess(normalize(res.data,settingSchema)));
        customHistory.push("/products");
    } catch (e) {
        yield put(addSettingFailed(e.response.data.errors));
    }
}

export function* watchFetchSetting() {
    yield takeLatest(FETCH_SETTINGS,fetchSettingSaga);
}

export function* fetchSettingSaga(action) {
    try {
        const res = yield call(api.setting.search,action.data);
        yield put(settingsFetched(normalize(res.data,[settingSchema])));
    } catch (e) {
        yield put(fetchSettingsFailed(e.response.data.errors));
    }
}
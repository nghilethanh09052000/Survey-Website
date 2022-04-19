import { combineReducers } from "redux";
import captchaReducer from "./captchaReducer";

export const rootReducer = combineReducers({
    captchaReducerState:captchaReducer,
})
import { combineReducers } from "redux";
import captchaReducer from "./captchaReducer";
import answerReducer from "./answerReducer";
import questionReducer from "./questionReducer";
export const rootReducer = combineReducers({
    captchaReducerState:captchaReducer,
    questionReducerState:questionReducer,
    answerReducerState:answerReducer,

})
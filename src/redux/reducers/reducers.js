import { combineReducers } from "redux";
import captchaReducer from "./captchaReducer";
import answerReducer from "./answerReducer";
import questionReducer from "./questionReducer";
import submitReducer from "./submitReducer";
export const rootReducer = combineReducers({
    captchaReducerState:captchaReducer,
    questionReducerState:questionReducer,
    answerReducerState:answerReducer,
    submitReducerState:submitReducer
})
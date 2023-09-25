import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import { userReducer } from "./useReducer";
export default combineReducers({
    counter:counterReducer,
    user:userReducer
})
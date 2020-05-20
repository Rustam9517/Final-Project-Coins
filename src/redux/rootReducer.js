import { combineReducers } from "redux";
import coins from "./reducer";
import search from './serachReducer'
import user from './logInReducer'

export default combineReducers({
    coins,
    search,
    user
});
import { combineReducers } from "@reduxjs/toolkit";
import newState  from "./state"

const reducer = combineReducers({
    newState: newState.reducer
})
export default reducer
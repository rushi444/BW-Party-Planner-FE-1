import {combineReducers } from "redux";
import { itemReducer, budgetReducer } from './shoppingReducer';
export default combineReducers({
    items: itemReducer,
    budget: budgetReducer
})
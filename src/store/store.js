import { createStore, combineReducers } from "redux";

import accountReducer from "./account/accountSlice";
import customerReducer from "./customer/customerSlice";
import { deposit } from "./account/accountSlice";
import { create } from "./customer/customerSlice";

const reducer = combineReducers({
  customerReducer,
  accountReducer,
});

const store = createStore(reducer);

store.dispatch(deposit(1000));

store.dispatch(create("Abdul", 1242547));

console.log(store.getState());

import { createStore, combineReducers } from "redux";

import accountReducer from "./account/accountSlice";
import customerReducer from "./customer/customerSlice";
import { deposit } from "./account/accountSlice";
import { create } from "./customer/customerSlice";

const reducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(reducer);

export default store;

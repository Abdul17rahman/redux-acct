import { createStore } from "redux";

import accountReducer from "./account/accountSlice";
import { deposit } from "./account/accountSlice";

const store = createStore(accountReducer);

store.dispatch(deposit(1000));

console.log(store.getState());

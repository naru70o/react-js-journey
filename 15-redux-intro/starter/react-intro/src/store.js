// import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./featurs/accounts/accountSlice";
import customerReducer from "./featurs/customers/customerSlice";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = configureStore({
//   account: accountReducer,
//   customer: customerReducer,
// });

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//     // other store enhancers if any
//   )
// );

// store.dispatch({
//   type: "acount/deposit",
//   payload: 500,
// });
// console.log(store.getState());
// store.dispatch({
//   type: "action/withdraw",
//   payload: 200,
// });
// store.dispatch({
//   type: "acount/requestLoan",
//   payload: { amount: 1000, loanPurpose: "to buy a car" },
// });

// store.dispatch(createCustomer("Jonas Schmedtmann", "24343434"));
// store.dispatch(deposite(500));
// store.dispatch(withdraw(200));
// console.log(store.getState());

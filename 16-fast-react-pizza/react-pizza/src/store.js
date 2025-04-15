import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';
import sliceCart from './features/cart/sliceCart';

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: sliceCart,
  },
});

export default store;

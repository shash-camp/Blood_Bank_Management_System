// store.js
import { configureStore } from "@reduxjs/toolkit"; // ✅ Make sure this line exists!
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

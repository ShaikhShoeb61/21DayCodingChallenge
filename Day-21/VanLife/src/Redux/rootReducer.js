import { combineReducers } from "@reduxjs/toolkit";
import vansReducer from "./Slices/vansSlice";
import authReducer from "./Slices/authSlice";

const rootReducer = combineReducers({
  vans: vansReducer,
  auth: authReducer,
});

export default rootReducer;

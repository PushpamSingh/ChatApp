import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice.js";
import notificationReducer from "./NotificationSlice.js";
export const store=configureStore({
reducer:{
    authReducer,
    notificationReducer
}
})
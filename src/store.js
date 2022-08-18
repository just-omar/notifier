import { configureStore } from "@reduxjs/toolkit";
import notificationsSlice from "./notificationsSlice";

export const store = configureStore({
  reducer: {
    notificationReducer: notificationsSlice,
  },
});

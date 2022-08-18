import { configureStore } from "@reduxjs/toolkit";
import notificationsSlice from "../features/notificationsSlice";
export const store = configureStore({
  reducer: {
    notificationReducer: notificationsSlice,
  },
});

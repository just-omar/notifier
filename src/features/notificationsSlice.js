import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    header: "foo1",
    text: "bar1",
  },
  {
    id: 2,
    header: "foo2",
    text: "bar2",
  },
  //   {
  //     id: 3,
  //     header: "foo3",
  //     text: "bar3",
  //   },
  //   {
  //     id: 4,
  //     header: "foo4",
  //     text: "bar4",
  //   },
  //   {
  //     id: 5,
  //     header: "foo5",
  //     text: "bar5",
  //   },
  //   {
  //     id: 6,
  //     header: "foo6",
  //     text: "bar6",
  //   },
  //   {
  //     id: 7,
  //     header: "foo7",
  //     text: "bar7",
  //   },
  //   {
  //     id: 8,
  //     header: "foo8",
  //     text: "bar8",
  //   },
];

const notificationsSlice = createSlice({
  name: "notification-slice",
  initialState,
  reducers: {
    deleteNotification: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    addNotification: (state, action) => {
      const newNotif = {
        id: action.payload.id,
        header: action.payload.header,
        text: action.payload.text,
      };
      state.push(newNotif);
    },
  },
});

export const { deleteNotification, addNotification } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;

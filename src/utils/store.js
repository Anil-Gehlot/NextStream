import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice";
import chatSLice from "./chatSLice";


const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    search: searchSlice,
    chat: chatSLice,
  },
});

export default store;

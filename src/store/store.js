import { configureStore } from "@reduxjs/toolkit";

import search from "../reducers/search/searchred";


import Chat from "../reducers/Message/Message";
import Explore  from "../reducers/explore/Explore";

import  videoReels  from "../reducers/reels/Reelse";

import HomeJs  from "../reducers/Home/Home";
import profile from "../reducers/profile/profile";

export const store = configureStore({
  reducer: {
    profile:profile,
    message: Chat,
    searchUsers: search,
    explore: Explore,
    reels: videoReels,
    homeJs:HomeJs
  },
});





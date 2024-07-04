import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from "./Favorites";

export const store = configureStore({
  reducer: {
    FavoriteFood: FavoriteReducer,
  },
});

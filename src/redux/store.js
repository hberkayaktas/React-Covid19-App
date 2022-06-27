import { configureStore } from "@reduxjs/toolkit";
import covidStatsSlice from "./covidStatsSlice";

export const store = configureStore({
      reducer:{
            covidStats: covidStatsSlice,
      }
})


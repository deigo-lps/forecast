import { createSlice, configureStore } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: { searchData: [], hasSearched: false },
  reducers: {
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
    setHasSearched(state, action) {
      state.hasSearched = action.payload;
    },
  },
});

const forecastSlice = createSlice({
  name:"forecastSlice",
  initialState: { hasSelected: false, lat: null, lon: null },
  reducers: {
    setHasSelected(state,action){
      state.hasSelected = action.payload;
    },
    setLatLong(state,action){
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    }
  }
});

const store = configureStore({
  reducer: {search: searchSlice.reducer, forecast: forecastSlice.reducer},
});

export const searchActions = searchSlice.actions;
export const forecastActions = forecastSlice.actions;
export default store;

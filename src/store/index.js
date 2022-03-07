import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { isLoggedIn: false, user: undefined },
  reducers:{
    login(state,action){
      state.isLoggedIn=true;
      state.user=action.payload;
    },
    logout(state){
      state.isLoggedIn=false;
      state.user=undefined;
    }
  }
})

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
  name: "forecastSlice",
  initialState: { hasSelected: false, coord: { lat: null, lon: null } },
  reducers: {
    setHasSelected(state, action) {
      state.hasSelected = action.payload;
    },
    setLatLong(state, action) {
      state.coord = { lat: action.payload.lat, lon: action.payload.lon };
    },
  },
});

const historySlice = createSlice({
  name: "historySlice",
  initialState: {history: {}},
  reducers: {
    addToHistory(state,action){
      console.log(action.payload);
      state.history[action.payload.id]=action.payload.city;
    },
    setHistory(state,action){
      state.history=action.payload;
    }
  }
});

const store = configureStore({
  reducer: { search: searchSlice.reducer, forecast: forecastSlice.reducer, history: historySlice.reducer, login: loginSlice.reducer },
});

export const searchActions = searchSlice.actions;
export const forecastActions = forecastSlice.actions;
export const historyActions = historySlice.actions;
export const loginActions = loginSlice.actions;
export default store;

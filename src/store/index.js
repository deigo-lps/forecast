import { createSlice, configureStore } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {hasError:false,message:""},
  reducers:{
    setError(state,action){
      state.hasError=true;
      state.message=action.payload;
    },
    removeError(state){
      state.hasError=false;
    }
  }
})

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { isLoggedIn: false, user: undefined },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = undefined;
    },
  },
});

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
    clearSearch(state) {
      state.searchData = [];
      state.hasSearched = false;
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
    clearForecast(state) {
      state.hasSelected = false;
      state.coord = { lat: null, lon: null };
    },
  },
});

const historySlice = createSlice({
  name: "historySlice",
  initialState: { history: {} },
  reducers: {
    addToHistory(state, action) {
      state.history[action.payload.id] = action.payload.city;
    },
    setHistory(state, action) {
      state.history = action.payload;
    },
    clearHistory(state){
      state.history = {}
    }
  },
});

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    forecast: forecastSlice.reducer,
    history: historySlice.reducer,
    login: loginSlice.reducer,
    error: errorSlice.reducer,
  },
});

export const searchActions = searchSlice.actions;
export const forecastActions = forecastSlice.actions;
export const historyActions = historySlice.actions;
export const loginActions = loginSlice.actions;
export const errorActions = errorSlice.actions;
export default store;

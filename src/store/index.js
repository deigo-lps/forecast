import { createSlice, configureStore } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: { searchData: [], hasSearched: false },
  reducers: {
    setSearchData(state, action) {
      state.searchData = action.payload;
      console.log(action.payload);
    },
    setHasSearched(state, action) {
      state.hasSearched = action.payload;
      console.log(action.payload);
    },
  },
});

const store = configureStore({
  reducer: searchSlice.reducer,
});

export const searchActions = searchSlice.actions;
export default store;

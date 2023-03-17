import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {NewsFlow} from "../apiData/newsApi";

export const getNewsApi = createAsyncThunk("newState/getNewsApi",async (newData) => {
  const res = await NewsFlow(newData);
  return res.json();
});

const newState = createSlice({
  name: "newState",
  initialState: {
    newData: {},
    status: null,
  },
  // extraReducers: {
  //   [getNewsApi.pending]: (state) => {
  //     state.status = "Loading";
  //   },
  //   [getNewsApi.fulfilled]: (state, { payload }) => {
  //     state.newData = {...payload};
  //     state.status = "success";
  //   },
  //   [getNewsApi.rejected]: (state) => {
  //     state.status = "failed";
  //   },
  // },
  extraReducers(builder) {
    builder
      .addCase(getNewsApi.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getNewsApi.fulfilled, (state, {payload}) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.newData = payload
      })
      .addCase(getNewsApi.rejected, (state) => {
        state.status = 'failed'
        
      })
  }

});

export default newState;

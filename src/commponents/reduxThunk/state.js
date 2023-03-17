import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsFlow from "../apiData/newsApi";

export const getNewsApi = createAsyncThunk(async (newData) => {
  const res = await newsFlow(newData);
  return res.json();
});

const newState = createSlice({
  name: "newState",
  initialState: {
    newData: {},
    status: null,
  },
  reducers: {
    [getNewsApi.pending]: (state) => {
      state.status = "Loading";
    },
    [getNewsApi.fulfilled]: (state, { payload }) => {
      state.newData = { ...payload };
      state.status = "success";
    },
    [getNewsApi.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default newState;

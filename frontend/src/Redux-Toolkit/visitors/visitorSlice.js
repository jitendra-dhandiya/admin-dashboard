import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createVisitorAPI, fetchVisitorAPI } from "./visitorsAPI";
import toast from "react-hot-toast";

const initialState = {
  visitor: [],
  status: "idle",
};

export const fetchAllVisitorsAsync = createAsyncThunk(
  "visitors/fetchVisitors",
  async () => {
    const response = await fetchVisitorAPI();
    return response.data;
  }
);

export const createVisitorAsync = createAsyncThunk(
  "visitor/createVisitors",
  async (visitor) => {
    const response = await createVisitorAPI(visitor);
    return response.data;
  }
);

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVisitorsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllVisitorsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.visitor = action.payload;
      })
      .addCase(createVisitorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createVisitorAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.visitor.visitors.push(action.payload);
        toast.success("Visitors Added Successfully");
      });
  },
});

export const selectVisitors = (state) =>
  state.visitorsReducer?.visitor?.visitors;

export default visitorSlice.reducer;

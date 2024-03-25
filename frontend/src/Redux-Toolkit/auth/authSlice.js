import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserAPI, loginUserAPI, signOutUser } from "./authAPI";
import toast from "react-hot-toast";

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAPIAsync = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await createUserAPI(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUserAPIAsync = createAsyncThunk(
  "user/loginUser",
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await loginUserAPI(loginInfo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signOutUserAsync = createAsyncThunk(
  "user/signOutUser",
  async (userid) => {
    const response = await signOutUser(userid);

    return response.data;
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // For Creating The User
      .addCase(createUserAPIAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAPIAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
        toast.success("Register Successfull")
      })
      .addCase(createUserAPIAsync.rejected, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload
        state.error = action.payload;
        toast.error(state?.error?.error);
      })

      // For checking the User
      .addCase(loginUserAPIAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAPIAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
        toast.success(state.loggedInUser?.message);
      })
      .addCase(loginUserAPIAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
        toast.error(state.error?.error);
      })

      .addCase(signOutUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = null;
        toast.success("Logout Successfully...!");
      });
  },
});
export const selectLoggedInUser = (state) =>
  state.authReducer?.loggedInUser?.user;

export default authSlice.reducer;

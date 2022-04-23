import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  errorMessage: "",
};

export const getUsers = createAsyncThunk("/users/getUsers", async () => {
  let dataUrl = "https://jsonplaceholder.typicode.com/users";
  let response = await Axios.get(dataUrl);
  return response.data;
});

const userListSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "Something went wrong!!!";
        console.log(action);
      });
  },
});

export default userListSlice.reducer;

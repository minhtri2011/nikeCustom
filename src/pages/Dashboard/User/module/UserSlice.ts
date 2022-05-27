import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

interface state {
  loading: boolean;
  data: Array<User>;
}
const initialState: state = {
  loading: false,
  data: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser(state) {
      state.loading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<Array<User>>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserFailed(state) {
      state.loading = false;
    },

    deleteUser(state, action: PayloadAction<string>) {
      state.data = state.data.filter(
        (item: User) => item._id !== action.payload
      );
    },
  },
});

//action
export const UserActions = UserSlice.actions;

//selector
export const selectDataUserReducer = (state: any) => state.UserReducer.data;

//reducer
const UserReducer = UserSlice.reducer;
export default UserReducer;

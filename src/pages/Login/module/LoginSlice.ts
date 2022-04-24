import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

//interface
export interface LoginPayload {
  email: string;
  password: string;
  errorMessage?: string;
  checkInfo?: boolean;
}
export interface LoginState {
  isLoggedIn: boolean;
  logging?: boolean;
  auth:boolean;
  errorMessage: boolean;
  currentUser?: User;
}

export interface LoginErrorPayload {
  checkInfo?: boolean;
}

//state redux
const initialState: LoginState = {
  isLoggedIn: false,
  logging: false,
  auth:false,
  errorMessage: false,
  currentUser: undefined,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    //login action
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
      state.errorMessage = false;
      state.auth=false;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.errorMessage = false;
      state.logging = false;
      state.currentUser = action.payload;
      state.auth=false;
    },
    loginFailed(state) {
      state.logging = false;
      state.errorMessage = true;
      state.auth=false;
    },
    //logout action
    logout(state) {
      state.errorMessage = false;
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.auth=false;
    },
    setAuth(state){
      state.auth=true;
    }
  },
});

// actions
export const LoginActions = LoginSlice.actions;

// selector
export const selectIsLoggedIn = (state: any) => state.LoginReducer.isLoggedIn;
export const selectIsLogging = (state: any) => state.LoginReducer.isLogging;

//reducer
const LoginReducer = LoginSlice.reducer;

export default LoginReducer;

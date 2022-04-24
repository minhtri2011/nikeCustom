
import { LoginPayload } from "pages/Login/module/LoginSlice";
import { SignUpData } from "pages/SignUp/SignUp";
import axiosClient from "./axiosClient";

const userApi = {
  getAll() {
    const url = "/users";
    return axiosClient.get(url);
  },
  login(data: LoginPayload) {
    const url = "/users/login";
    return axiosClient.post(url, data );
  },
  create(data:SignUpData){
    const url="/users/create";
    return axiosClient.post(url,data)
  }
};

export default userApi;

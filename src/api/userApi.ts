import { favoriteProduct, favoriteProducts } from './../models/user';
import {
  DeleteId,
  Login,
  SignUp,
  UpdateAdmin, User
} from "models/user";
import { LoginPayload } from "pages/Login/module/LoginSlice";
import { SignUpData } from "pages/SignUp/SignUp";
import axiosClient from "./axiosClient";

const userApi = {
  getAll(token: string): Promise<User[]> {
    const url = "/users";
    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  login(data: LoginPayload): Promise<Login> {
    const url = "/users/login";
    return axiosClient.post(url, data);
  },
  signUp(data: SignUpData): Promise<SignUp> {
    const url = "/users/create";
    return axiosClient.post(url, data);
  },
  create(data: SignUpData, token: string): Promise<SignUp> {
    const url = "/users/create";
    return axiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  delete(data: DeleteId, token: string): Promise<DeleteId> {
    const url = "/users/delete";
    return axiosClient.delete(url, {
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateAdmin(data: UpdateAdmin, id: string | undefined, token: string) {
    const url = `/users/updateAdmin/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getUserById(id: string, token: string): Promise<User> {
    const url = `/users/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  addFavoriteProducts(data:favoriteProduct,token:string): Promise<favoriteProducts> {
    const url='/users/addUpdateFavorite'
    return axiosClient.post(url,data,{
      headers:{
        Authorization:`Bearer ${token}`,
      }
    })
  }
};

export default userApi;

import { cartUpload } from "models/cart";
import { oder } from "models/oder";
import axiosClient from "./axiosClient";

const oderApi = {
  getAll(token: string): Promise<Array<oder>> {
    const url = "cart/showAdmin";
    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getUserCart(token: string): Promise<any> {
    const url = "cart";
    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  create(data:cartUpload,token: string): Promise<cartUpload> {
    const url = "cart/create";
    return axiosClient.post(url,data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default oderApi;

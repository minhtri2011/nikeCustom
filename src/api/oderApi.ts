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
};
export default oderApi
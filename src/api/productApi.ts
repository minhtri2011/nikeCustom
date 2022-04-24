import axiosClient from "./axiosClient";

const productApi = {
  getAll() {
    const url = "/product";
    axiosClient(url);
  },
};
export default productApi;

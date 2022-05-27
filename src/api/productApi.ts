import { ProductData, Product, DeleteProductId } from "models/products";
import axiosClient from "./axiosClient";

const productApi = {
  getAll(): Promise<Product[]> {
    const url = "/product";
    return axiosClient.get(url);
  },
  create(data: any, token: string): Promise<ProductData> {
    const url = "/product/create";
    return axiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getById(id: string, token: string): Promise<ProductData> {
    const url = `/product/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(data: any, token: string): Promise<ProductData> {
    const url = `/product/update`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  delete(data: DeleteProductId, token: string): Promise<DeleteProductId> {
    const url = "/product/delete";
    return axiosClient.delete(url, {
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default productApi;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models/products";

interface state {
  loading: boolean;
  data: Array<Product>;
}
const initialState: state = {
  loading: false,
  data: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchProductSuccess(state, action: PayloadAction<Array<Product>>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductFailed(state) {
      state.loading = false;
    },

    deleteProduct(state, action: PayloadAction<string>) {
      state.data = state.data.filter(
        (item: Product) => item._id !== action.payload
      );
    },
  },
});

//action
export const ProductActions = ProductSlice.actions;
//selector
export const selectDataProductReducer = (state: any) => state.ProductReducer.data;
export const selectLoadingDataProductReducer = (state: any) => state.ProductReducer.loading

//reducer
const ProductReducer = ProductSlice.reducer;
export default ProductReducer;

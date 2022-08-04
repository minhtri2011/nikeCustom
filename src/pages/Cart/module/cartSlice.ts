import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartCreate } from "./../../../models/cart";
interface state {
  product: cartCreate[];
}

const initialState: state = {
  product: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: state, action: PayloadAction<cartCreate>) => {
      const findDuplicateProduct = state.product.find(
        (item: cartCreate) =>
          item.name === action.payload.name &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      findDuplicateProduct
        ? ++findDuplicateProduct.quantity
        : state.product.push(action.payload);
    },
    deleteProduct: (state: state, action: PayloadAction<cartCreate>) => {
      state.product = state.product.filter(
        (product: cartCreate) => product.id !== action.payload.id
      );
    },
    changeSize: (
      state: state,
      action: PayloadAction<{ size: string; id: string }>
    ): void => {
      const index = state.product.findIndex(
        (item: cartCreate) => item.id === action.payload.id
      );
      state.product[index].size = action.payload.size;
    },
    changeQuantity: (
      state: state,
      action: PayloadAction<{ quantity: number; id: string }>
    ) => {
      const index = state.product.findIndex(
        (item: cartCreate) => item.id === action.payload.id
      );
      state.product[index].quantity = action.payload.quantity;
    },
    paymentSuccess:(state:state)=>{
      state.product=[]
    }
  },
});

//actions
export const CartActions = cartSlice.actions;

//selector
export const selectDataCart = (state: any) => state.CartReducer.product;
export const selectCartLength = (state: any) => state.CartReducer.product.length;
export const selectTotalCart = (state: any) =>
  state.CartReducer.product.reduce((pre: number, curr: cartCreate) => {
    return pre = pre + curr.price * curr.quantity;
  }, 0);

//reducer
const CartReducer = cartSlice.reducer;
export default CartReducer;

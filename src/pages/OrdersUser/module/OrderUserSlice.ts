import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userOder } from 'models/oder';

interface state{
    loading:boolean
    data:userOder[]
}

const initialState:state = {
    loading:false,
    data:[]
}

const OrdersUserSlice = createSlice({
  name: 'ordersUser',
  initialState,
  reducers: {
    fetchUserOrder(state){
        state.loading=true
    },
    fetchSuccess(state,action:PayloadAction<userOder[]>){
        state.loading=false;
        state.data=action.payload;
    },
    fetchFailed(state){
        state.loading=false
    }
  }
});

//action
export const OrderUserAction=OrdersUserSlice.actions

//selector
export const selectorOrderUserLoading=(state:any)=>state.OrderUserReducer.loading
export const selectorOrderUserData=(state:any)=>state.OrderUserReducer.data

//reducer
const OrderUserReducer= OrdersUserSlice.reducer
export default OrderUserReducer
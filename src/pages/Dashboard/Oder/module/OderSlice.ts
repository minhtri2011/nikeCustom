import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { oder } from "models/oder";

interface state {
  loading: boolean;
  data: oder[];
}

const initialState: state = {
  loading: false,
  data: [],
};

const OderSlice = createSlice({
  name: "oder",
  initialState,
  reducers: {
    fetchOder(state) {
      state.loading = true;
    },
    fetchOderSuccess(state,action:PayloadAction<oder[]>){
      state.loading=false;
      state.data=action.payload
    },
    fetchOderFailed(state){
      state.loading=false
    }
  },
});


//action
export const OderActions = OderSlice.actions

//selector
export const selectorOderLoading=(state:any)=>state.OderReducer.loading
export const selectorOderData=(state:any)=>state.OderReducer.data

//reducer
const OderReducer=OderSlice.reducer
export default OderReducer
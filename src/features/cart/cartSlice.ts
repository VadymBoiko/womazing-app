import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderProduct } from "../../interfaces/interfaces";

interface cartState {
  totalQuantity: number,
  totalPrice: number;
  order: IOrderProduct[];
}

const initialState = {
  totalQuantity: 0,
  totalPrice: 0,
  order: [],
} as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IOrderProduct>) => {
      const idx = state.order.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (idx >= 0) {
        state.order[idx].count += action.payload.count;
      } else {
        state.order = [...state.order, action.payload];
      }
      state.totalPrice = state.order.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
    },
    incrementProduct: (state, action:PayloadAction<number>) =>{
      state.order = state.order.map((item) => {
        if(item.id === action.payload){
          item.count++;
        }
        return item;
      })
    },
    decrementProduct: (state, action:PayloadAction<number>) =>{
      state.order = state.order.map((item) => {
        if(item.id === action.payload){
          item.count--;
        }
        if(item.count === 0) item.count = 1
        return item;
      })
    },
    setCountProduct: (state, action:PayloadAction<IOrderProduct>) =>{
      state.order.map((item) =>{
        if(item.id === action.payload.id){
           item.count = action.payload.count
        } 
       } )
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter((item) => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.order = [];
    },
    updateSummary: (state) => {
      state.totalPrice = state.order.reduce((acc, obj) => {
        return obj.price * obj.count + acc;
      }, 0);
      state.totalQuantity = state.order.length;
    }
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, removeAll, incrementProduct, decrementProduct, setCountProduct, updateSummary } = cartSlice.actions;

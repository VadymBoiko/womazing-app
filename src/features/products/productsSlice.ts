import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { IProduct } from '../../interfaces/interfaces';
import ProductServices from "../../services/ProductServices";

interface ProductsState {
    loading: boolean,
    error:null | string,
    data: null | IProduct[]
}



// Action
export const getProducts = createAsyncThunk<IProduct[], undefined, {rejectValue: string}>(
    "products/getProducts",
    async() => {
            const responce = await ProductServices.getAllProduct();
            return responce.data;
    }
);


const initialState = {
    loading: false,
    error: null,
    data: null
} as ProductsState


// Slice

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state) => {
            state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action:PayloadAction<IProduct[]>) =>{
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state, action:PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload
            })     
    },

});


export default productsSlice.reducer


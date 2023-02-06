import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/interfaces";
import ProductServices from "../../services/ProductServices";

interface ProductState {
  loading: boolean;
  error: null | string;
  product: null | IProduct;
}

export const getSingleProduct = createAsyncThunk<IProduct,string | undefined,{ rejectValue: string }>(
    "product/getProduct", async (id) => {
    const responce = await ProductServices.getDetails(id);
    return responce.data;
});


const initialState = {
    loading: false,
    error: null,
    product: null
} as ProductState

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getSingleProduct.pending, (state) =>{
            state.loading = true;
        })
        .addCase(getSingleProduct.fulfilled, (state, action:PayloadAction<IProduct>) => {
            state.loading = false;
            state.product = action.payload;
        })
        .addCase(getSingleProduct.rejected, (state, action:PayloadAction<any>) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;
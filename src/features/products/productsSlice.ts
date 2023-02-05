import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { IProduct } from '../../interfaces/interfaces';
import ProductServices from "../../services/ProductServices";

interface ProductState {
    loading: boolean,
    error:null | string,
    data: null | Product[]
}

interface Product{
    id: number,
    title: string,
    price: number,
    category: string,
    image:string,
    sizes: Array<string>,
    colors: Array<string>
}

// Action
export const getProducts = createAsyncThunk<Product[], undefined, {rejectValue: string}>(
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
} as ProductState


// Slice

const productSlice = createSlice({
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


export default productSlice.reducer
export const selectOneProduct = (state:ProductState, productId:string | undefined) => 
    state.data?.find((product) => product.id.toString() === productId?.toString() )

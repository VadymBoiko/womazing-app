import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { IProduct } from '../../interfaces/interfaces';
import ProductServices from "../../services/ProductServices";


interface ProductsState {
    loading: boolean,
    error: null | string,
    data: IProduct[],
    loadingSingle: boolean,
    productSingle: null | IProduct,
}



// Action
export const getProducts =  createAsyncThunk(
    'products', 
    async() => {
        const responce = await ProductServices.getAllProduct();
        return responce.data      
})

export const getSingleProduct = createAsyncThunk(
    'single-product',
    async(id:number) => {
        const responce = await ProductServices.getSingleProduct(id);
        return responce.data 
    }
)


const initialState = {
    loading: false,
    error: null,
    data: [],
    loadingSingle: false,
    productSingle: null,
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
            .addCase(getSingleProduct.pending, (state) => {
                state.loadingSingle = true;
            }) 
            .addCase(getSingleProduct.fulfilled, (state, action:PayloadAction<IProduct>) =>{
                state.loadingSingle = false;
                state.productSingle = action.payload;
            })
    },

});


export default productsSlice.reducer


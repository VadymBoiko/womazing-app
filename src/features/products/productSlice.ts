import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { IProduct } from '../../interfaces/interfaces';
import axios from "axios";

const JSON_PRODUCT_API = 'http://localhost:8080/closest'

// Action
export const getProducts = createAsyncThunk(
    "products/getProducts",
    async(data, thunkApi) => {
        try {
            const responce = await axios.get<IProduct[]>(JSON_PRODUCT_API);
            return responce.data;
        }catch(error:any){
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

interface ProductState {
    loading: boolean,
    error:null | string,
    data: null | IProduct[]
}

const initialState = {
    loading: false,
    error: null,
    data: null
} as ProductState


// Slice

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state, action) => {
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
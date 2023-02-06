import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/productsSlice';
import productSlice from '../features/product/product';

export const store = configureStore({
  reducer: {productsSlice, productSlice}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
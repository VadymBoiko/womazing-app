import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/products/productSlice';

export const store = configureStore({
  reducer: productSlice,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
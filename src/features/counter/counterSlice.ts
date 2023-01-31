import { createSlice } from "@reduxjs/toolkit"


export interface counterState{
    value: number
}

const initialState:counterState = {
    value:0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
    }
})
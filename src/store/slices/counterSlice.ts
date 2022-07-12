import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
            return state;
        },
        decrement : (state) => {
            state.count = state.count - 1;
            return state;
        },
        incrementByNumber: (state, action) => {
            state.count = state.count + action.payload
        }
    }
});

export const {increment, decrement, incrementByNumber} = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
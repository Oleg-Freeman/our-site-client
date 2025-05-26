import { createSlice } from '@reduxjs/toolkit';
import { getRandomCompliment } from './complimentOperations';

const initialState = {
    compliment: null,
    isLoading: false,
}

const complimentSlice = createSlice({
    name: 'compliments',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getRandomCompliment.pending, state => {
                state.isLoading = true;
            })
            .addCase(getRandomCompliment.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.compliment = payload;
            })
            .addCase(getRandomCompliment.rejected, state => {
                state.isLoading = false;
            });
    }
});

export const complimentReducer = complimentSlice.reducer;
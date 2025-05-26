import { createSlice } from '@reduxjs/toolkit';
import { login, logout, getMe } from './userOperations';

const initialState = {
    currentUser: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.currentUser = payload.user;
                localStorage.setItem('token', payload.token);
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.currentUser = null;
                localStorage.removeItem('token');
            })
            .addCase(logout.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMe.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.currentUser = payload;
            })
            .addCase(getMe.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const userReducer = userSlice.reducer;
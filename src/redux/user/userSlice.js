import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './userOperations';

const initialState = {
    currentUser: {},
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
                state.currentUser = {};
                localStorage.removeItem('token');
            })
            .addCase(logout.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const userReducer = userSlice.reducer;
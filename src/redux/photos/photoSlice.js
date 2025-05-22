import { createSlice } from '@reduxjs/toolkit';
import { loadPhotos, uploadPhotos, downloadPhotos, deletePhoto } from './photoOperations';

const initialState = {
    photos: null,
    isLoading: false,
}

const photoSlice = createSlice({
    name: 'photos',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(loadPhotos.pending, state => {
                state.isLoading = true;
            })
            .addCase(loadPhotos.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.photos = payload;
            })
            .addCase(loadPhotos.rejected, state => {
                state.isLoading = false;
            })
            .addCase(uploadPhotos.pending, state => {
                state.isLoading = true;
            })
            .addCase(uploadPhotos.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.photos = [...state.photos, payload];
            })
            .addCase(uploadPhotos.rejected, state => {
                state.isLoading = false;
            })
            .addCase(downloadPhotos.pending, state => {
                state.isLoading = true;
            })
            .addCase(downloadPhotos.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(downloadPhotos.rejected, state => {
                state.isLoading = false;
            })
            .addCase(deletePhoto.pending, state => {
                state.isLoading = true;
            })
            .addCase(deletePhoto.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.photos = state.photos.filter(photo => photo._id !== payload);
            })
            .addCase(deletePhoto.rejected, state => {
                state.isLoading = false;
            });
    }
});

export const photoReducer = photoSlice.reducer;
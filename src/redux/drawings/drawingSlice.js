import { createSlice } from '@reduxjs/toolkit';
import { createDrawing, getDrawingShortList, getDrawingById, deleteDrawing } from './drawingOperations';

const initialState = {
    shortList: null,
    currentDrawing: null,
    isLoading: false,
}

const drawingSlice = createSlice({
    name: 'drawings',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(createDrawing.pending, state => {
                state.isLoading = true;
            })
            .addCase(createDrawing.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.currentDrawing = payload;
                if (state.shortList) {
                    state.shortList.push({
                        _id: payload._id,
                        user_id: payload.user_id,
                        createdAt: payload.createdAt,
                        updatedAt: payload.updatedAt,
                        name: payload.name,
                    });
                } else {
                    state.shortList = [payload];
                }
            })
            .addCase(createDrawing.rejected, state => {
                state.isLoading = false;
            })
            .addCase(getDrawingShortList.pending, state => {
                state.isLoading = true;
            })
            .addCase(getDrawingShortList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.shortList = payload;
            })
            .addCase(getDrawingShortList.rejected, state => {
                state.isLoading = false;
            })
            .addCase(getDrawingById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getDrawingById.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.currentDrawing = payload;
            })
            .addCase(getDrawingById.rejected, state => {
                state.isLoading = false;
            })
            .addCase(deleteDrawing.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteDrawing.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.shortList = state?.shortList.filter(drawing => drawing._id !== payload);
                if (state?.currentDrawing._id === payload) {
                    state.currentDrawing = null;
                }
            })
            .addCase(deleteDrawing.rejected, state => {
                state.isLoading = false;
            });

    }
})

export const drawingReducer = drawingSlice.reducer;
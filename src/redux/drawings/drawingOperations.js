import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../utils';
import { toast } from 'react-toastify';

export const createDrawing = createAsyncThunk(
    'drawings/create',
    async (drawingData, { rejectWithValue }) => {
        try {
            if (!drawingData?.name) {
                toast.error('Потрібно придумати назву малюнку');
                return rejectWithValue('Потрібно придумати назву малюнку');
            }
            const { data } = await httpClient.post('/drawings', drawingData);

            toast.success(`"${data.name}" успішно збережено!`);

            return data;
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                toast.error(data.message);
                return rejectWithValue(data.message);
            } else {
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    },
);

export const getDrawingShortList = createAsyncThunk(
    'drawings/shortList',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.get('/drawings');

            return data;
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                toast.error(data.message);
                return rejectWithValue(data.message);
            } else {
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    },
);

export const getDrawingById = createAsyncThunk(
    'drawings/id',
    async ({ id }, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.get(`/drawings/${id}`);

            return data;
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                toast.error(data.message);
                return rejectWithValue(data.message);
            } else {
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    },
);

export const deleteDrawing = createAsyncThunk(
    'drawings/delete',
    async ({ id }, { rejectWithValue }) => {
        try {
            await httpClient.delete(`/drawings/${id}`);

            return id;
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                toast.error(data.message);
                return rejectWithValue(data.message);
            } else {
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    },
);
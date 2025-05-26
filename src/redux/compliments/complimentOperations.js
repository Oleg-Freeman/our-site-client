import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../utils';
import { toast } from 'react-toastify';

export const getRandomCompliment = createAsyncThunk(
    'compliments/random',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.get('/compliments/random', { params });

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
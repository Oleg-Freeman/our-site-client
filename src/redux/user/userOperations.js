import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { httpClient, httpClientPublic } from '../../utils';

export const login = createAsyncThunk(
    'users/login',
    async ({ navigate, ...userData }, { rejectWithValue }) => {
        try {
            const { data } = await httpClientPublic.post('/users/login', userData);

            if (data?.user && data?.token) {
                navigate('/');
            }

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

export const logout = createAsyncThunk(
    'users/logout',
    async (_, { rejectWithValue }) => {
        try {
            await httpClient.get('/users/logout');
            localStorage.removeItem('token');
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
    }
)

export const getMe = createAsyncThunk(
    'users/me',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.get('/users/me');

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
    }
)
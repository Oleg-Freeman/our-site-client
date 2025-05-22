import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../../utils';
import { toast } from 'react-toastify';

export const loadPhotos = createAsyncThunk(
    'photos/list',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.get('/photos');

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

export const uploadPhotos = createAsyncThunk(
    'photos/upload',
    async (file, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.post(
                '/photos/upload',
                file,
                {
                    headers: {
                        'Content-Type': file?.type,
                    }
                }
            );

            toast.success('Фото додано успішно');

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

export const downloadPhotos = createAsyncThunk(
    'photos/download',
    async ({ url }, { rejectWithValue }) => {
        try {
            const { data } = await httpClient.get(
                url,
                { responseType: 'blob' }
            );

            const fileName = url.split('/').pop();
            const href = window.URL.createObjectURL(data);
            const anchorElement = document.createElement('a');

            anchorElement.href = href;
            anchorElement.download = fileName;

            document.body.appendChild(anchorElement);
            anchorElement.click();

            document.body.removeChild(anchorElement);
            window.URL.revokeObjectURL(href);
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

export const deletePhoto = createAsyncThunk(
    'photos/delete',
    async (params, { rejectWithValue }) => {
        try {
            await httpClient.delete('/photos', { params });

            toast.success('Фото видалено успішно');

            return params.id;
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
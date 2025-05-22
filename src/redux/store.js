import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { photoReducer } from './photos/photoSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        photos: photoReducer,
    }
});
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { photoReducer } from './photos/photoSlice';
import { complimentReducer } from './compliments/complimentSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        photos: photoReducer,
        compliments: complimentReducer
    }
});
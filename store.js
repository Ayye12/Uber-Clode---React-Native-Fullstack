import { configureStore } from '@reduxjs/toolkit'; //We take the data from redux
import navReducer from './slices/navSlice'; 

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
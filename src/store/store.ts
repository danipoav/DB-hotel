import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
import bookingSlice from './slices/bookingSlice'
import roomSlice from './slices/roomSlice'
import userSlice from './slices/userSlice'
import contactSlice from './slices/contactSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        booking: bookingSlice,
        room: roomSlice,
        user: userSlice,
        contact: contactSlice
    }
})

export type AppDispatch = typeof store.dispatch;

export default store;
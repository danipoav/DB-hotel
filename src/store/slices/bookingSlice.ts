import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBookings, fetchBooking, unFetchBooking, deleteBooking, createBooking, editBooking } from '../thunks/bookingThunk';
import { BookingTypeID } from "../../interfaces/BookingType";

interface BookingState {
    bookings: BookingTypeID[];
    booking: BookingTypeID | null;
}

export const bookingSlice = createSlice({
    name: 'bookings',
    initialState: <BookingState>{
        bookings: [],
        booking: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.fulfilled, (state, action: PayloadAction<BookingTypeID[]>) => {
                state.bookings = action.payload;
            })
            .addCase(fetchBooking.fulfilled, (state, action: PayloadAction<BookingTypeID>) => {
                state.booking = action.payload
            })
            .addCase(unFetchBooking.fulfilled, (state, action: PayloadAction<BookingTypeID | null>) => {
                state.booking = action.payload
            })
            .addCase(createBooking.fulfilled, (state, action: PayloadAction<BookingTypeID[]>) => {
                state.bookings = action.payload
            })
            .addCase(editBooking.fulfilled, (state, action: PayloadAction<BookingTypeID[]>) => {
                state.bookings = action.payload
            })
            .addCase(deleteBooking.fulfilled, (state, action: PayloadAction<BookingTypeID[]>) => {
                state.bookings = action.payload
            })
    }
})

export default bookingSlice.reducer;
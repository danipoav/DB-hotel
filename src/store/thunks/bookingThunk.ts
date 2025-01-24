import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingType, BookingTypeID } from "../../interfaces/BookingType"
import fetchAPI from "../../hooks/fetchAPI";

export const fetchBookings = createAsyncThunk(
    'bookings/fetchBookings',
    async () => {
        try {
            const bookings = await fetchAPI('bookings', {
                method: 'GET'
            })
            if (bookings) {
                return await bookings;
            } else {
                throw new Error('Error getting all bookings')
            }

        } catch (error) {
            throw error;
        }
    }
);

export const fetchBooking = createAsyncThunk<BookingTypeID, string>(
    'bookings/fetchBooking',
    async (id) => {
        try {
            const booking = await fetchAPI(`bookings/${id}`, {
                method: 'GET'
            })
            if (booking) {
                return booking
            } else {
                throw new Error('Error getting one booking')
            }
        } catch (error) {
            throw error;
        }
    }
);

export const unFetchBooking = createAsyncThunk<null, void>(
    'bookings/unFetchBooking',
    async () => {
        return null;
    }
);


export const createBooking = createAsyncThunk<BookingTypeID[], BookingType>(
    'bookings/createBooking',
    async (newBooking) => {
        try {
            const bookings = await fetchAPI('bookings', {
                method: 'POST',
                body: JSON.stringify(newBooking)
            })
            if (bookings) {
                return bookings
            } else {
                throw new Error('Error getting bookings from createBookings')
            }
        } catch (error) {
            throw error;
        }
    }
);

export const editBooking = createAsyncThunk<BookingTypeID[], BookingTypeID>(
    'bookings/editBookings',
    async (updatedBooking) => {
        try {
            const booking = await fetchAPI(`bookings/${updatedBooking.id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedBooking)
            })
            if (booking) {
                return booking
            } else {
                throw new Error('Error getting booking from updatedBooking')
            }
        } catch (error) {
            throw error
        }
    }
);

export const deleteBooking = createAsyncThunk<BookingTypeID[], string>(
    'booking/deleteBooking',
    async (id) => {
        try {
            const bookings = await fetchAPI(`bookings/${id}`, {
                method: 'DELETE'
            })
            if (bookings) {
                return bookings;
            } else {
                throw new Error('Error getting bookings from deleteBooking')
            }
        } catch (error) {
            throw error;
        }
    }
);
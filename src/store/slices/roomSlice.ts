import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRooms, fetchRoom, unFetchRoom, updatedRoom, createRoom, deleteRoom } from "../thunks/roomThunk";
import { RoomTypeID } from "../../interfaces/RoomType";

interface RoomState {
    rooms: RoomTypeID[];
    room: RoomTypeID | null
}

export const roomSlice = createSlice({
    name: 'rooms',
    initialState: <RoomState>{
        rooms: [],
        room: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.fulfilled, (state, action: PayloadAction<RoomTypeID[]>) => {
                localStorage.setItem('rooms', JSON.stringify(state.rooms))
                state.rooms = action.payload;
            })
            .addCase(fetchRoom.fulfilled, (state, action: PayloadAction<RoomTypeID>) => {
                state.room = action.payload
            })
            .addCase(unFetchRoom.fulfilled, (state, action: PayloadAction<RoomTypeID | null>) => {
                state.room = action.payload
            })
            .addCase(createRoom.fulfilled, (state, action: PayloadAction<RoomTypeID[]>) => {
                state.rooms = action.payload
            })
            .addCase(updatedRoom.fulfilled, (state, action: PayloadAction<RoomTypeID[]>) => {
                state.rooms = action.payload
            })
            .addCase(deleteRoom.fulfilled, (state, action: PayloadAction<RoomTypeID[]>) => {
                state.rooms = action.payload
            })
    }
})

export default roomSlice.reducer;
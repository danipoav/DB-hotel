import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRooms, fetchRoom, unFetchRoom, updatedRoom, createRoom, deleteRoom } from "../thunks/roomThunk";
import { RoomTypeID } from "../../interfaces/RoomType";

interface RoomState {
    rooms: RoomTypeID[];
    room: RoomTypeID | null,
    loading: boolean
}

export const roomSlice = createSlice({
    name: 'rooms',
    initialState: <RoomState>{
        rooms: [],
        room: null,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.fulfilled, (state, action: PayloadAction<RoomTypeID[]>) => {
                state.rooms = action.payload;
                state.loading = false;
            })
            .addCase(fetchRooms.pending,(state)=>{
                state.loading = true;
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
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomType, RoomTypeID } from "../../interfaces/RoomType";
import fetchAPI from "../../hooks/FetchAPI";

export const fetchRooms = createAsyncThunk<RoomTypeID[]>(
  'rooms/fetchRooms',
  async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const rooms = await fetchAPI('rooms', {
        method: 'GET'
      })
      if (rooms) {
        return rooms;
      } else {
        throw new Error('Error getting all rooms')
      }

    } catch (error) {
      throw error;
    }
  }
);

export const fetchRoom = createAsyncThunk<RoomTypeID, string>(
  'rooms/fetchRoom',
  async (id) => {
    try {
      const room = await fetchAPI(`rooms/${id}`, {
        method: 'GET'
      })
      if (room) {
        return room
      } else {
        throw new Error('Error getting one room')
      }
    } catch (error) {
      throw error;
    }
  }
);

export const unFetchRoom = createAsyncThunk<null>(
  'rooms/unFetchRoom',
  async () => null
);

export const createRoom = createAsyncThunk<RoomTypeID[], RoomType>(
  'rooms/createRoom',
  async (room) => {
    try {
      const rooms = await fetchAPI('rooms', {
        method: 'POST',
        body: JSON.stringify(room)
      })
      if (rooms) {
        return rooms
      } else {
        throw new Error('Error getting rooms from Create Rooms')
      }
    } catch (error) {
      throw error;
    }
  }
);

export const updatedRoom = createAsyncThunk<RoomTypeID[], RoomTypeID>(
  'rooms/updateRoom',
  async (room) => {
    try {
      const rooms = await fetchAPI(`rooms/${room.id}`, {
        method: 'PUT',
        body: JSON.stringify(room)
      })
      if (rooms) {
        return rooms
      } else {
        throw new Error('Error getting rooms from Update Rooms')
      }
    } catch (error) {
      throw error
    }
  }
);

export const deleteRoom = createAsyncThunk<RoomTypeID[], string>(
  'rooms/delete',
  async (id) => {
    try {
      const rooms = await fetchAPI(`rooms/${id}`, {
        method: 'DELETE'
      })
      if (rooms) {
        return rooms;
      } else {
        throw new Error('Error getting rooms from Delete Room')
      }
    } catch (error) {
      throw error;
    }
  }
);

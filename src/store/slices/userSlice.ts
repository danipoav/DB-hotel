import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUser, fetchUsers, unFetchUser, updatedUser } from "../thunks/userThunk";
import { UserTypeID } from "../../interfaces/UserType";

interface UserState {
    users: UserTypeID[];
    user: UserTypeID | null
}

export const userSlice = createSlice({
    name: 'users',
    initialState: <UserState>{
        users: [],
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserTypeID[]>) => {
                state.users = action.payload;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserTypeID>) => {
                state.user = action.payload
            })
            .addCase(unFetchUser.fulfilled, (state, action: PayloadAction<UserTypeID | null>) => {
                state.user = action.payload
            })
            .addCase(createUser.fulfilled, (state, action: PayloadAction<UserTypeID[]>) => {
                state.users = action.payload
            })
            .addCase(updatedUser.fulfilled, (state, action: PayloadAction<UserTypeID[]>) => {
                state.users = action.payload
            })
            .addCase(deleteUser.fulfilled, (state, action: PayloadAction<UserTypeID[]>) => {
                state.users = action.payload
            })
    }
})

export default userSlice.reducer;
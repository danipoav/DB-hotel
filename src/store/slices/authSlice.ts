import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../thunks/authThunk";
import { toast } from "react-toastify";

interface AuthState {
    token: string | null;
    expiration: number | null;
    isAuthenticated: boolean;
    loading: boolean
}

const initialState: AuthState = {
    token: null,
    expiration: null,
    isAuthenticated: false,
    loading: false
}

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        initializeSession(state) {
            const token = sessionStorage.getItem("token");
            const expiration = sessionStorage.getItem("expiration");

            if (token && expiration && Date.now() < Number(expiration)) {
                state.token = token;
                state.expiration = Number(expiration);
                state.isAuthenticated = true;
            } else {
                state.token = null;
                state.expiration = null;
                state.isAuthenticated = false;
                sessionStorage.clear();
            }
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getToken.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.expiration = action.payload.expirationTime
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(getToken.pending, (state) => {
                state.loading = true;
            })
            .addCase(getToken.rejected, (state) => {
                state.token = null;
                state.isAuthenticated = false
                state.expiration = null
            })
    }
})

export const { logout, initializeSession } = authSlice.actions;
export default authSlice.reducer;
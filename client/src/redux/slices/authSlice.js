import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axios from "axios";

import { api } from "../api.js"
// Create the thunk for the register user

export const userRegistration = createAsyncThunk("userRegistration", async (useRouteLoaderData, { rejectWithValue }) => {

    try {
        const response = await axios.post(`${api}/auth/signup`, useRouteLoaderData, { withCredentials: true });

        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

// Login thunk
export const userLogin = createAsyncThunk(
    'userLogin',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${api}/auth/login`, credentials, { withCredentials: true });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Logout thunk
export const userLogout = createAsyncThunk('userLogout', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${api}/auth/logout`, {}, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Logout failed' });
    }
});

const initialState = {
    token: null,
    user: null,
    error: null,
    isLoading: false
}

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(userRegistration.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userRegistration.fulfilled, (state, action) => {
            console.log(action.payload);

            state.isLoading = false
            state.user = action.payload.data.user
            state.token = action.payload.data.accessToken
        })
        builder.addCase(userRegistration.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload.message
        })
        // login
        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.data.user;
            state.token = action.payload.data.accessToken;
            state.error = null;
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Login failed';
        });

        // logout
        builder.addCase(userLogout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(userLogout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.error = null;
        });
        builder.addCase(userLogout.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Logout failed';
        });
    }
})


export default authSlice.reducer;
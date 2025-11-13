import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axiosClient from "../axiosClient";
// Create the thunk for the register user

export const userRegistration = createAsyncThunk("userRegistration", async (useRouteLoaderData, { rejectWithValue }) => {

    try {
        const response = await axiosClient.post(`/auth/signup`, useRouteLoaderData);

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
            const response = await axiosClient.post(`/auth/login`, credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Logout thunk
export const userLogout = createAsyncThunk('userLogout', async (_, { rejectWithValue }) => {
    try {
        const response = await axiosClient.post(`/auth/logout`, {});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Logout failed' });
    }
});

const persistedToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

const initialState = {
    token: persistedToken || null,
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
            // console.log(action.payload);

            state.isLoading = false
            state.user = action.payload.data.user
            state.token = action.payload.data.accessToken
            try {
                localStorage.setItem('accessToken', action.payload.data.accessToken);
            } catch (err) {
                // ignore storage errors
            }
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
            try {
                localStorage.setItem('accessToken', action.payload.data.accessToken);
            } catch (err) { }
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
            try {
                localStorage.removeItem('accessToken');
            } catch (err) { }
        });
        builder.addCase(userLogout.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'Logout failed';
        });
    }
})


export default authSlice.reducer;
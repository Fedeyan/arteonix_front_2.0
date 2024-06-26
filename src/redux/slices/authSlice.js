import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice", initialState: {
        authStatus: false,
    },
    reducers: {
        setAuthStatus: (state, action) => {
            state.authStatus = action.payload
        }
    }
})

export const { setAuthStatus } = authSlice.actions

const authReducer = authSlice.reducer;

export default authReducer
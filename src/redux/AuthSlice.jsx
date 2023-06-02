import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            return action.payload;
        },

        reset: (state, action) => {
            return initialState
        }
    }
})


export const {login, reset} = authSlice.actions;
export const authReducer = authSlice.reducer;
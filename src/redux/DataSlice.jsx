import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
        storeVideoId : (state, action) => {
            return {...state, video: action.payload}
        },

        reset: (state, action) => {
            return initialState
        }
    }
})


export const {storeVideoId, reset} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
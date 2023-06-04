import { createSlice } from "@reduxjs/toolkit";

const initialState = { }

export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
        storeVideoId : (state, action) => {
            return {...state, video: action.payload}
        },

        resetData: (state, action) => {
            return initialState
        }
    }
})


export const {storeVideoId, resetData} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
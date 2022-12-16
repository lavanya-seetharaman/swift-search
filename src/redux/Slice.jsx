import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name : "mode",
    initialState : false,
    reducers : {
        setMode : (state, action) => {
            return !state;
        }
    }
})


export const {setMode} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;


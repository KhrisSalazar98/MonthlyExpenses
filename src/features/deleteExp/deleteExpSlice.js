import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const deleteExpSlice = createSlice({
    name: "deleteExp",
    initialState,
    reducers: {
        getExpDelete: (state, action) => {
            state = action.payload;
            return state;
        },
        addExpDelete: (state, action) => {
            console.log(action.payload);
            
            state = action.payload;
            return state;
        }
    }
});

export const {addExpDelete} = deleteExpSlice.actions;
export default deleteExpSlice.reducer;


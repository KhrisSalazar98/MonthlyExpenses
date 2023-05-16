import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const textMonthsSlice = createSlice({
    name: 'textMonth',
    initialState,
    reducers: {
        changeText: (state, action) => {

            state = action.payload;
            
            return state;
        }
    }
});

export const {changeText} = textMonthsSlice.actions;
export default textMonthsSlice.reducer; 
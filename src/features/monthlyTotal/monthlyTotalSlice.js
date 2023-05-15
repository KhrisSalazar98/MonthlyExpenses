import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        monthNumber: 0,
        total: 0
    },
    {
        monthNumber: 1,
        total: 0
    },
    {
        monthNumber: 2,
        total: 0
    },
    {
        monthNumber: 3,
        total: 0
    },
    {
        monthNumber: 4,
        total: 0
    },
    {
        monthNumber: 5,
        total: 0
    },
    {
        monthNumber: 6,
        total: 0
    },
    {
        monthNumber: 7,
        total: 0
    },
    {
        monthNumber: 8,
        total: 0
    },
    {
        monthNumber: 9,
        total: 0
    },
    {
        monthNumber: 10,
        total: 0
    },
    {
        monthNumber: 11,
        total: 0
    }

];

export const monthlyTotalSlice = createSlice({
    name: "monthlyTotal",
    initialState,
    reducers: {
        getTotal: (state, action) => {
            state = action.payload;
            return state;
        },
        increaseTotal: (state, action) => {
            const mes = new Date().getMonth();

            state[mes].total = state[mes].total + parseInt(action.payload.price); 
        },
        decreaseTotal: (state, action) => {
            const mes = new Date().getMonth();

            state[mes].total = state[mes].total - parseInt(action.payload.price);
        },
        editTotal: (state, action) => {
            const mes = new Date().getMonth();

            state[mes].total = state[mes].total - parseInt(action.payload.oldPrice);
            state[mes].total = state[mes].total + parseInt(action.payload.newPrice);
        }
    }
});

export const {getTotal, increaseTotal, decreaseTotal, editTotal} = monthlyTotalSlice.actions;
export default monthlyTotalSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        monthNumber: 0,
        year: 0,
        total: 0
    },
    {
        monthNumber: 1,
        year: 0,
        total: 0
    },
    {
        monthNumber: 2,
        year: 0,
        total: 0
    },
    {
        monthNumber: 3,
        year: 0,
        total: 0
    },
    {
        monthNumber: 4,
        year: 0,
        total: 0
    },
    {
        monthNumber: 5,
        year: 0,
        total: 0
    },
    {
        monthNumber: 6,
        year: 0,
        total: 0
    },
    {
        monthNumber: 7,
        year: 0,
        total: 0
    },
    {
        monthNumber: 8,
        year: 0,
        total: 0
    },
    {
        monthNumber: 9,
        year: 0,
        total: 0
    },
    {
        monthNumber: 10,
        total: 0
    },
    {
        monthNumber: 11,
        year: 0,
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
            const currentYear = new Date().getFullYear();

            state[mes].total = state[mes].total + parseInt(action.payload.price); 
            state[mes].year = currentYear;
        },
        decreaseTotal: (state, action) => {
            const mes = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            state[mes].total = state[mes].total - parseInt(action.payload.price);
            state[mes].year = currentYear;
        },
        editTotal: (state, action) => {
            const mes = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            state[mes].total = state[mes].total - parseInt(action.payload.oldPrice);
            state[mes].total = state[mes].total + parseInt(action.payload.newPrice);
            state[mes].year = currentYear;
        },
        clearAllTotals: (state, action) => {

            const currentYear = new Date().getFullYear();

            state.forEach((mes) => {
                if(mes.year < currentYear){
                    mes.total = 0;
                }
            });

            return state;
        }
    }
});

export const {getTotal, increaseTotal, decreaseTotal, editTotal, clearAllTotals} = monthlyTotalSlice.actions;
export default monthlyTotalSlice.reducer;
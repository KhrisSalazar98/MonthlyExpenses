import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "cmExp_0",
        name: "Agua"
    },
    {
        id: "cmExp_1",
        name: "Compras de Supermercado"
    },
    {
        id: "cmExp_2",
        name: "Compras de Verdulería"
    },
    {
        id: "cmExp_3",
        name: "Gas"
    },
    {
        id: "cmExp_5",
        name: "Internet Hogar"
    },
    {
        id: "cmExp_6",
        name: "Luz"
    },
    {
        id: "cmExp_7",
        name: "Plan Telefonía Móvil"
    }
];

export const commonExpensesSlice = createSlice({
    name: 'commonExpenses',
    initialState,
    reducers: {}
});

export default commonExpensesSlice.reducer;


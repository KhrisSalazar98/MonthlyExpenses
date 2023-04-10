import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice';
import expensesReducer from "../features/expenses/expensesSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        expenses: expensesReducer,
    },
});
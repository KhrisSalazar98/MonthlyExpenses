import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice';
import expensesReducer from "../features/expenses/expensesSlice";
import textMonthsReducer from "../features/textMonths/textMonthsSlice";
import commonExpensesReducer from "../features/commonExpenses/commonExpensesSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        expenses: expensesReducer,
        commonExpenses: commonExpensesReducer,
        textMonth: textMonthsReducer
    },
});
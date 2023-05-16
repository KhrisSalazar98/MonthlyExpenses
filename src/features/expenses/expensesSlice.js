import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // {
    //     id: "1",
    //     day: new Date().getDate(),
    //     month: "enero",
    //     year: new Date().getFullYear(),
    //     monthNumber: 0,
    //     description: "Gasto enero 1",
    //     price: 20000
    // },
    // {
    //     id: "2",
    //     day: new Date().getDate(),
    //     month: "enero",
    //     year: new Date().getFullYear(),
    //     monthNumber: 0,
    //     description: "Gasto enero 2",
    //     price: 20000
    // },
    // {
    //     id: "3",
    //     day: new Date().getDate(),
    //     month: "enero",
    //     year: new Date().getFullYear(),
    //     monthNumber: 0,
    //     description: "Gasto enero 3",
    //     price: 20000
    // },
    // {
    //     id: "4",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 0,
    //     description: "Gasto enero 4",
    //     price: 20000
    // },
    // {
    //     id: "5",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 1,
    //     description: "Gasto febrero 1",
    //     price: 20000
    // },
    // {
    //     id: "6",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 1,
    //     description: "Gasto febrero 2",
    //     price: 20000
    // },
    // {
    //     id: "7",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 1,
    //     description: "Gasto febrero 3",
    //     price: 20000
    // },
    // {
    //     id: "8",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 1,
    //     description: "Gasto febrero 4",
    //     price: 20000
    // },
    // {
    //     id: "9",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 1,
    //     description: "Gasto febrero 5",
    //     price: 20000
    // },
    // {
    //     id: "10",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 2,
    //     description: "Gasto marzo 1",
    //     price: 20000
    // },
    // {
    //     id: "11",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 2,
    //     description: "Gasto marzo 2",
    //     price: 20000
    // },
    // {
    //     id: "12",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 2,
    //     description: "Gasto marzo 3",
    //     price: 20000
    // },
    // {
    //     id: "13",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 2,
    //     description: "Gasto marzo 4",
    //     price: 20000
    // },
    // {
    //     id: "14",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 2,
    //     description: "Gasto marzo 5",
    //     price: 20000
    // },
    // {
    //     id: "15",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 3,
    //     description: "Pagar plan Entel",
    //     price: 20000
    // },
    // {
    //     id: "16",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: 3,
    //     description: "Pagar plan Entel",
    //     price: 20000
    // },
    // {
    //     id: "17",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: new Date().getMonth(),
    //     description: "Pagar plan Entel",
    //     price: 20000
    // },
    // {
    //     id: "18",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: new Date().getMonth(),
    //     description: "Pagar plan Entel",
    //     price: 20000
    // },
    // {
    //     id: "19",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: new Date().getMonth(),
    //     description: "Pagar plan Entel",
    //     price: 20000
    // },
    // {
    //     id: "20",
    //     day: new Date().getDate(),
    //     month: new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date()),
    //     year: new Date().getFullYear(),
    //     monthNumber: new Date().getMonth(),
    //     description: "Pagar plan Entel",
    //     price: 20000
    // },

];

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        getExpenses: (state, action) => {
            state = action.payload;
            return state;
        },
        addExp: (state, action) => {
            const description = action.payload.description[0].toUpperCase() + action.payload.description.substring(1).toLowerCase();

            const day =  new Date().getDate();
            const month = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
            const year =  new Date().getFullYear();
            const monthNumber = new Date().getMonth();
            const gastoNormal = action.payload.select === true ? true : false;

            const newExp = {
                id: action.payload.id,
                day,
                month,
                year,
                monthNumber,
                description,
                price: action.payload.price,
                gastoNormal
            }

            state.unshift(newExp);
        },
        deleteExp: (state, action) => {
            const expFound = state.find(exp => exp.id === action.payload.id);

            if(expFound){
                state.splice(state.indexOf(expFound),1);
            }
        },
        editExp: (state, action) => {
            
            const {id, selectGasto, inputGasto, inputPrecio, selectEdit} = action.payload;
            
            const foundExp = state.find((exp) => exp.id === id);


            if(selectEdit === true && selectGasto !== "Selecciona un gasto"){
                if(foundExp) {
                    foundExp.description = selectGasto;
                    foundExp.price = inputPrecio;
                    foundExp.gastoNormal = selectEdit;
                }
            }

            if(selectEdit === false && inputGasto !== "") {
                const newDescription = inputGasto[0].toUpperCase() + inputGasto.substring(1).toLowerCase();
                
                if(foundExp) {
                    foundExp.description = newDescription;
                    foundExp.price = inputPrecio;
                    foundExp.gastoNormal = selectEdit;
                }
            
            }

            if(selectGasto === "Selecciona un gasto" && inputGasto === ""){
                
                if(foundExp) {
                    foundExp.price = inputPrecio;
                    foundExp.gastoNormal = selectEdit;
                }
            }
  
        },
        clearAllExpenses: (state, payload) => {
            const fecha = new Date();

            const lastYearExpenses = state.filter(exp => exp.year === fecha.getFullYear());

            state = lastYearExpenses;

            return state;
        }
    }
});

export const {getExpenses, addExp, deleteExp, editExp, clearAllExpenses} = expensesSlice.actions;
export default expensesSlice.reducer;
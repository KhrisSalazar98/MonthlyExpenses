import React, { useEffect } from 'react';

import Header from './components/Header';

import './sass/style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from './features/theme/themeSlice';
import { getExpenses } from './features/expenses/expensesSlice';
import { getTotal } from './features/monthlyTotal/monthlyTotalSlice';
import { clearAllExpenses } from './features/expenses/expensesSlice';
import { clearAllTotals } from './features/monthlyTotal/monthlyTotalSlice';

import Main from './components/Main';


const KEY_THEME = "monthlyexpenses.theme";
const KEY_EXPENSES = "monthlyexpenses.exp";
const KEY_MONTHLYTOTAL = "monthlyexpenses.total";

function App() {

  const fecha = new Date();

  const dispatch = useDispatch();
  const selectorTheme = useSelector(state => state.theme);
  const selectorExpenses = useSelector(state => state.expenses);
  const selectorMonthlyTotal = useSelector(state => state.monthlyTotal);

  const body = document.querySelector('#body');

  // Obtener la información del estado que se procesó previamente
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem(KEY_THEME));
    const storedExpenses = JSON.parse(localStorage.getItem(KEY_EXPENSES));
    const storedMonthlyTotal = JSON.parse(localStorage.getItem(KEY_MONTHLYTOTAL));

    if(storedTheme){
      dispatch(getTheme(storedTheme));
    }

    if(storedExpenses){
      dispatch(getExpenses(storedExpenses));
    }

    if(storedMonthlyTotal) {
      dispatch(getTotal(storedMonthlyTotal));
    }

    if(fecha.getMonth === 0 && fecha.getDay === 1) {
      dispatch(clearAllExpenses());
      dispatch(clearAllTotals());
    }else{
      console.log("No es posible eliminar los registros");
    }

  }, [dispatch]);

  // Cada vez que el estado tenga cambios
  useEffect(() => {

    localStorage.setItem(KEY_THEME, JSON.stringify(selectorTheme));
    localStorage.setItem(KEY_EXPENSES, JSON.stringify(selectorExpenses));
    localStorage.setItem(KEY_MONTHLYTOTAL, JSON.stringify(selectorMonthlyTotal));

  }, [selectorTheme, selectorExpenses, selectorMonthlyTotal]);
  

  body.classList.contains('Light') && body.classList.remove('Light');
  body.classList.contains('Dark') && body.classList.remove('Dark');

  body.classList.add(selectorTheme.mode);

  return (
    <>
      <Header selectorTheme={selectorTheme} />
      <Main />
    </>
  );
}

export default App;

import React, { useEffect } from 'react';

import Header from './components/Header';

import './sass/style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from './features/theme/themeSlice';
import Main from './components/Main';
import { getExpenses } from './features/expenses/expensesSlice';

const KEY_THEME = "monthlyexpenses.theme";
const KEY_EXPENSES = "monthlyexpenses.exp";

function App() {

  const dispatch = useDispatch();
  const selectorTheme = useSelector(state => state.theme);
  const selectorExpenses = useSelector(state => state.expenses);

  const body = document.querySelector('#body');

  // Obtener la información del estado que se procesó previamente
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem(KEY_THEME));
    const storedExpenses = JSON.parse(localStorage.getItem(KEY_EXPENSES));

    if(storedTheme){
      dispatch(getTheme(storedTheme));
    }

    if(storedExpenses){
      dispatch(getExpenses(storedExpenses));
    }

  }, [dispatch]);

  // Cada vez que el estado tenga cambios
  useEffect(() => {

    localStorage.setItem(KEY_THEME, JSON.stringify(selectorTheme));
    localStorage.setItem(KEY_EXPENSES, JSON.stringify(selectorExpenses));

  }, [selectorTheme, selectorExpenses]);
  

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

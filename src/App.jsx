import React, { useEffect } from 'react';

import Header from './components/Header';

import './sass/style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from './features/theme/themeSlice';

const KEY_THEME = "monthlyexpenses.theme";

function App() {

  const dispatch = useDispatch();
  const selectorTheme = useSelector(state => state.theme);

  const body = document.querySelector('#body');

  // Obtener la información del estado que se procesó previamente
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem(KEY_THEME));

    if(storedTheme){
      dispatch(getTheme(storedTheme));
    }

  }, [dispatch]);

  // Cada vez que el estado tenga cambios
  useEffect(() => {

    localStorage.setItem(KEY_THEME, JSON.stringify(selectorTheme));

  }, [selectorTheme]);
  

  body.classList.contains('Light') && body.classList.remove('Light');
  body.classList.contains('Dark') && body.classList.remove('Dark');

  body.classList.add(selectorTheme.mode);

  return (
    <>
      <Header selectorTheme={selectorTheme} />
    </>
  );
}

export default App;

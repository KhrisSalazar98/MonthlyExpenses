import React from 'react';

import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon, faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';

const Header = ({selectorTheme}) => {

    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        dispatch(changeTheme());
    }

    return (
        <header className='sombra'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-lg-3 d-flex justify-content-center align-items-center'>
                        <label className={`${selectorTheme.isChecked ? "noOpc" : "opcTheme"} form-check-label mt-3 mt-lg-0`} htmlFor="flexSwitchCheckDefault"><FontAwesomeIcon icon={faSun} size='xl' /></label>
                        <div className="form-check form-switch mt-3 mt-lg-0 ms-2">
                            
                            <input onChange={toggleTheme} checked={selectorTheme.isChecked} className="sombra_btn form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            
                        </div>
                        <label className={`${selectorTheme.isChecked ? "opcTheme" : "noOpc"} form-check-label mt-3 mt-lg-0`} htmlFor="flexSwitchCheckDefault"><FontAwesomeIcon icon={faMoon} size='xl' /></label>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-6">
                        <h1 className='py-4 text-center'>Monthly Expenses <FontAwesomeIcon className='iconTitle' icon={faMoneyBill1Wave} /></h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
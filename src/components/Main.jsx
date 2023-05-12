import React, { useState, useRef } from 'react';

import {v4 as uuid} from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { addExp } from '../features/expenses/expensesSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListOl} from '@fortawesome/free-solid-svg-icons';

import AccordionExpenses from './AccordionExpenses';
import ModalAgregarGasto from './ModalAgregarGasto';

const Main = () => {

    const dispatch = useDispatch();

    const selectorExpenses = useSelector(state => state.expenses);
    const selectorCommonExpenses = useSelector(state => state.commonExpenses);
    const selectorTextMonth = useSelector(state => state.textMonth);

    const fecha = new Date();

    const [select ,setSelect] = useState(true);

    const selectGastoRef = useRef();
    const inputGastoRef = useRef();
    const inputPrecioRef = useRef();

    const [exp,setExp] = useState({
        description: "",
        price: 0
    });

    const handleViewSelect = () => {
        setSelect(!select);
    }

    const handleCloseModalAdd = () => {
        inputGastoRef.current.value = null;
        inputPrecioRef.current.value = null;
        selectGastoRef.current.value = selectGastoRef.current[0].value;
    }

    const handleChange = (e) => {
        
        setExp({
            ...exp,
            [e.target.name]: e.target.value,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addExp({
            ...exp,
            id: uuid(),
        }));
    }


    return (
        <main>
            <div className='container-md'>
            
                <h2 className='text-center mt-5'><FontAwesomeIcon className='iconMainList' icon={faListOl} /> Lista de Gastos</h2>
            
                <hr />
            
                <div className="accordion mt-5" id="accordionExample">
                
               
                    <AccordionExpenses fecha={fecha} numero_mes={0} selectorExpenses={selectorExpenses} txt_mes={"Enero"} />
                
                    <AccordionExpenses fecha={fecha} numero_mes={1} selectorExpenses={selectorExpenses} txt_mes={"Febrero"} />

                    <AccordionExpenses fecha={fecha} numero_mes={2} selectorExpenses={selectorExpenses} txt_mes={"Marzo"} />
               
                    <AccordionExpenses fecha={fecha} numero_mes={3} selectorExpenses={selectorExpenses} txt_mes={"Abril"} />

                    <AccordionExpenses fecha={fecha} numero_mes={4} selectorExpenses={selectorExpenses} txt_mes={"Mayo"} />
    
                    <AccordionExpenses fecha={fecha} numero_mes={5} selectorExpenses={selectorExpenses} txt_mes={"Junio"} />
    
                    <AccordionExpenses fecha={fecha} numero_mes={6} selectorExpenses={selectorExpenses} txt_mes={"Julio"} />
        
                    <AccordionExpenses fecha={fecha} numero_mes={7} selectorExpenses={selectorExpenses} txt_mes={"Agosto"} />
            
                    <AccordionExpenses fecha={fecha} numero_mes={8} selectorExpenses={selectorExpenses} txt_mes={"Septiembre"} />
        
                    <AccordionExpenses fecha={fecha} numero_mes={9} selectorExpenses={selectorExpenses} txt_mes={"Octubre"} />
                
                    <AccordionExpenses fecha={fecha} numero_mes={10} selectorExpenses={selectorExpenses} txt_mes={"Noviembre"} />
                
                    <AccordionExpenses fecha={fecha} numero_mes={11} selectorExpenses={selectorExpenses} txt_mes={"Diciembre"} />

                </div>

                

            </div>

            {/* Modal Agregar Nuevo Gasto */}
            <ModalAgregarGasto 
                handleCloseModalAdd={handleCloseModalAdd}
                selectorTextMonth={selectorTextMonth}
                handleSubmit={handleSubmit}
                handleViewSelect={handleViewSelect}
                select={select}
                selectGastoRef={selectGastoRef}
                selectorCommonExpenses={selectorCommonExpenses}
                inputGastoRef={inputGastoRef}
                inputPrecioRef={inputPrecioRef}
                handleChange={handleChange}
            />
        </main>
    )
}

export default Main;
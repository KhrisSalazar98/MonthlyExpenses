import React, { useState, useRef } from 'react';

import {v4 as uuid} from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { addExp } from '../features/expenses/expensesSlice';
import { increaseTotal } from '../features/monthlyTotal/monthlyTotalSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListOl} from '@fortawesome/free-solid-svg-icons';

import AccordionExpenses from './AccordionExpenses';
import ModalAgregarGasto from './ModalAgregarGasto';
import ModalEliminarGasto from './ModalEliminarGasto';

const Main = () => {

    const dispatch = useDispatch();

    const selectorExpenses = useSelector(state => state.expenses);
    const selectorCommonExpenses = useSelector(state => state.commonExpenses);
    const selectorTextMonth = useSelector(state => state.textMonth);
    const selectorMonthlyTotal = useSelector(state => state.monthlyTotal);

    const fecha = new Date();

    const [select, setSelect] = useState(true);

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

        dispatch(increaseTotal(exp));
    }

    


    return (
        <main>
            <div className='container-md'>
            
                <h2 className='text-center mt-5'><FontAwesomeIcon className='iconMainList' icon={faListOl} /> Lista de Gastos</h2>
            
                <hr />
            
                <div className="accordion mt-5" id="accordionExample">
                
               
                    <AccordionExpenses fecha={fecha} numero_mes={0} selectorExpenses={selectorExpenses} txt_mes={"Enero"} selectorMonthlyTotal={selectorMonthlyTotal[0]} />
                
                    <AccordionExpenses fecha={fecha} numero_mes={1} selectorExpenses={selectorExpenses} txt_mes={"Febrero"} selectorMonthlyTotal={selectorMonthlyTotal[1]} />

                    <AccordionExpenses fecha={fecha} numero_mes={2} selectorExpenses={selectorExpenses} txt_mes={"Marzo"} selectorMonthlyTotal={selectorMonthlyTotal[2]} />
               
                    <AccordionExpenses fecha={fecha} numero_mes={3} selectorExpenses={selectorExpenses} txt_mes={"Abril"} selectorMonthlyTotal={selectorMonthlyTotal[3]} />

                    <AccordionExpenses fecha={fecha} numero_mes={4} selectorExpenses={selectorExpenses} txt_mes={"Mayo"} selectorMonthlyTotal={selectorMonthlyTotal[4]} />
    
                    <AccordionExpenses fecha={fecha} numero_mes={5} selectorExpenses={selectorExpenses} txt_mes={"Junio"} selectorMonthlyTotal={selectorMonthlyTotal[5]} />
    
                    <AccordionExpenses fecha={fecha} numero_mes={6} selectorExpenses={selectorExpenses} txt_mes={"Julio"} selectorMonthlyTotal={selectorMonthlyTotal[6]} />
        
                    <AccordionExpenses fecha={fecha} numero_mes={7} selectorExpenses={selectorExpenses} txt_mes={"Agosto"} selectorMonthlyTotal={selectorMonthlyTotal[7]} />
            
                    <AccordionExpenses fecha={fecha} numero_mes={8} selectorExpenses={selectorExpenses} txt_mes={"Septiembre"} selectorMonthlyTotal={selectorMonthlyTotal[8]} />
        
                    <AccordionExpenses fecha={fecha} numero_mes={9} selectorExpenses={selectorExpenses} txt_mes={"Octubre"} selectorMonthlyTotal={selectorMonthlyTotal[9]} />
                
                    <AccordionExpenses fecha={fecha} numero_mes={10} selectorExpenses={selectorExpenses} txt_mes={"Noviembre"} selectorMonthlyTotal={selectorMonthlyTotal[10]}/>
                
                    <AccordionExpenses fecha={fecha} numero_mes={11} selectorExpenses={selectorExpenses} txt_mes={"Diciembre"} selectorMonthlyTotal={selectorMonthlyTotal[11]}/>

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

            {/* Modal Eliminar Gasto */}
            <ModalEliminarGasto handleSubmit={handleSubmit}/>
        

        </main>
    )
}

export default Main;
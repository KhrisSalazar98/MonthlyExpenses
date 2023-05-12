import React, { useState, useRef } from 'react';

import {v4 as uuid} from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { addExp } from '../features/expenses/expensesSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen, faHandHoldingDollar, faListOl, faPlus, faReadMe} from '@fortawesome/free-solid-svg-icons';

import AccordionExpenses from './AccordionExpenses';

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

                {/* Modal Agregar Nuevo Gasto */}
                <div className="modal fade" id={`modalAgregarGasto`} tabIndex={-1} aria-labelledby={`modalAgregarGastoLabel`} aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title fs-5 modal_titulo_desktop" id={`modalAgregarGastoLabel`}><FontAwesomeIcon className='iconTitle' icon={faPlus} /> Nuevo Gasto</h3>
                                <button type="button" onClick={handleCloseModalAdd} className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                                
                            </div>
                            <div className="modal-body">
                            
                                <div className='container'>
                                    <p className='text-center mt-4'>Este gasto corresponde al mes de {selectorTextMonth}.</p>

                                    <div className="row justify-content-center mt-5">
                                        <div className='col-12 col-sm-12 col-md-11'>
                                            <div className='rounded-3 p-0 p-lg-3'>
                                                <div className="container p-3 p-lg-4">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="row">

                                                            {/* Radio Button */}
                                                            <div className='col-12 col-sm-12 mb-4'>
                                                                <label>Tipo de Gasto: </label>
                                                                <div className="row container mt-2">
                                                                    <div className='col-12 col-lg-2 form-check'>
                                                                        <input defaultChecked onChange={handleViewSelect} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                            Común
                                                                        </label>
                                                                    </div>
                                                                    <div className='col-12 col-lg-2 form-check'>
                                                                        <input  onChange={handleViewSelect} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                            Otro
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>

                                                            {/* Select gasto normal */}
                                                            <div className={`col-12 col-sm-12 mb-4 ${select === true ? 'd-block' : 'd-none'}`}>
                                                                <label htmlFor="gasto_normal"><FontAwesomeIcon icon={faBookOpen} /> Gasto: </label><br />
                                                                <select onChange={handleChange} ref={selectGastoRef} name="description" className='border-0 mt-2 rounded-2 py-1 w-100' id="gasto_normal">
                                                                    <option value="0">Selecciona un gasto</option>
                                                                    {selectorCommonExpenses.map((cmExp) => (
                                                                        <option key={cmExp.id} value={cmExp.name}>{cmExp.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            
                                                            {/* Input Otro gasto */}
                                                            <div className={`col-12 col-sm-12 mb-4 ${select === true ? 'd-none' : 'd-block'}`}>
                                                                <label htmlFor="otro"><FontAwesomeIcon icon={faBookOpen} /> Gasto: </label><br />
                                                                <input onChange={handleChange} name="description" ref={inputGastoRef} className='border-0 mt-2 rounded-2 w-100 input_form' id="otro" type="text" placeholder='Ingresa un gasto' autoComplete='off' />
                                                            </div>

                                                            {/* Input precio */}
                                                            <div className='col-12 col-sm-12 mb-5'>
                                                                <label htmlFor="otro"><FontAwesomeIcon icon={faHandHoldingDollar} /> Precio: </label><br />
                                                                <input name="price" onChange={handleChange} ref={inputPrecioRef} className='border-0 mt-2 rounded-2 w-100 input_form' id="otro" type="number" placeholder='Ingresa el precio' autoComplete='off' />
                                                            </div>

                                                            {/* Botón Agregar */}
                                                            <div className='col-12 col-sm-12 text-center'>
                                                                <button className='border-0 px-3 py-1 rounded-pill sombra_btn' type="submit" data-bs-dismiss="modal">Agregar</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                            
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Main;
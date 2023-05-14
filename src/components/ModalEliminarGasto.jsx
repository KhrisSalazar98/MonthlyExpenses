import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCheck, faCircleExclamation, faHandHoldingDollar, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';


import { useSelector, useDispatch } from 'react-redux';
import { deleteExp } from '../features/expenses/expensesSlice';
import { decreaseTotal } from '../features/monthlyTotal/monthlyTotalSlice';


const ModalEliminarGasto = ({handleSubmit}) => {

    const selectorDeleteExp = useSelector(state => state.deleteExp);

    const dispatch = useDispatch();

    const handleDeleteExp = (exp) => {
        dispatch(deleteExp(exp));
        dispatch(decreaseTotal(exp));
    }

    return (
        <>
            <div className="modal fade" id={`modalEliminarGasto`} tabIndex={-1} aria-labelledby={`modalEliminarGastoLabel`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id={`modalEliminarGastoLabel`}><FontAwesomeIcon className='iconTitle' icon={faTrashCan} /> Eliminar Gasto</h3>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />      
                        </div>
                        <div className="modal-body">
                            
                            <div className='container'>
                                <p className='text-center mt-4'><FontAwesomeIcon className='iconTitle' icon={faCircleExclamation} size="xl" /> ¿Deseas eliminar el siguiente gasto?</p>

                                <div className="row justify-content-center mt-4">
                                    <div className='col-12 col-sm-12 col-md-11'>
                                        <div className='rounded-3 p-0 p-lg-3'>
                                            <div className="container p-3 p-lg-4">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row px-lg-3">
                                                        
                                                        {/* Datos del gasto */}
                                                        <div className='col-12 col-sm-12'>

                                                            <p className='text-white'>
                                                                <span className='data_title'><FontAwesomeIcon className='iconMainList' icon={faBookOpen} /> Descripción:</span> <span className='data_item_desktop'>{selectorDeleteExp.description}</span>
                                                                <br />
                                                                <span className='data_item_mobile'>{selectorDeleteExp.description}</span>
                                                            </p>
                                          
                                                            <p className='text-white'>
                                                                <span className='data_title'><FontAwesomeIcon className='iconMainList' icon={faHandHoldingDollar} /> Costo:</span> <span className='data_item_desktop'>${selectorDeleteExp.price}</span>
                                                                <br />
                                                                <span className='data_item_mobile'>${selectorDeleteExp.price}</span>
                                                            </p>
                                                        </div>

                                                        {/* Botones confirmar y cancelar */}
                                                        <div className='col-12 col-sm-12 mt-3 text-center d-lg-flex justify-content-lg-around'>
                                                            <button onClick={() => handleDeleteExp(selectorDeleteExp)} className='border-0 mb-3 mb-lg-0 mx-3 mx-lg-0 px-3 py-1 rounded-pill sombra_btn' type="button" data-bs-dismiss="modal"><FontAwesomeIcon className='iconMainList' icon={faCheck} /> Confirmar</button>
                                                            <button className='border-0 mb-3 mb-lg-0 mx-3 mx-lg-0 px-3 py-1 rounded-pill sombra_btn' type="button" data-bs-dismiss="modal"><FontAwesomeIcon className='iconMainList' icon={faXmark} /> Cancelar</button>
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
        </>
    )
}

export default ModalEliminarGasto;
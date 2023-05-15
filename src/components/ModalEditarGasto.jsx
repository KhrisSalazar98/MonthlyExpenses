import React from 'react';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen, faHandHoldingDollar, faPenToSquare, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

const ModalEditarGasto = ({handleViewSelectEdit,selectEdit,selectorCommonExpenses}) => {

    const expCaptured = useSelector(state => state.deleteExp);


    return (
        <>
            <div className="modal fade" id="modalEditarGasto" tabIndex={-1} aria-labelledby="modalEditarGastoLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5 modal_titulo_desktop" id="modalEditarGastoLabel"><FontAwesomeIcon className='iconTitle' icon={faPenToSquare} /> Editar Gasto</h3>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <p className='text-center mt-4'><FontAwesomeIcon className='iconTitle' icon={faCircleExclamation} size="xl" /> El gasto a editar corresponde al mes de {expCaptured.month}.</p>

                                <div className="row justify-content-center mt-5">
                                    <div className='col-12 col-sm-12 col-md-11'>
                                        <div className='rounded-3 p-0 p-lg-3'>
                                            <div className="container p-3 p-lg-4">
                                                <form>
                                                    <div className="row">

                                                        
                                                        <div className='col-12 col-sm-12 mb-4'>
                                                            <label>Tipo de Gasto: </label>
                                                            <div className="row container mt-2">
                                                                <div className='col-12 col-lg-2 form-check'>
                                                                    <input defaultChecked onChange={handleViewSelectEdit} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                        Común
                                                                    </label>
                                                                </div>
                                                                <div className='col-12 col-lg-2 form-check'>
                                                                    <input onChange={handleViewSelectEdit} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                        Otro
                                                                    </label>
                                                                </div>
                                                            </div>
                                                                
                                                        </div>

                                                        
                                                        <div className={`col-12 col-sm-12 mb-4 ${selectEdit === true ? 'd-block' : 'd-none'}`}>
                                                            <label htmlFor="gasto_normal_edit"><FontAwesomeIcon icon={faBookOpen} /> Gasto: </label><br />
                                                            <select name="description_edit" className='border-0 mt-2 rounded-2 py-1 w-100' id="gasto_normal_edit" defaultValue={expCaptured.gastoNormal === true ? expCaptured.description : "Selecciona una opción"}>
                                                                {expCaptured.gastoNormal === true ? <option selected value={expCaptured.description}>{expCaptured.description}</option> : ""}
                                                                
                                                                <option value="Selecciona un gasto">Selecciona un gasto</option>
                                                                {selectorCommonExpenses.map((cmExp) => (
                                                                    <option className={cmExp.name === expCaptured.description ? "d-none" : ""} key={cmExp.id} value={cmExp.name}>{cmExp.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                            
                                                       
                                                        <div className={`col-12 col-sm-12 mb-4 ${selectEdit === true ? 'd-none' : 'd-block'}`}>
                                                            <label htmlFor="otro_edit"><FontAwesomeIcon icon={faBookOpen} /> Gasto: </label><br />
                                                            <input 
                                                                name="description_edit"
                                                                className='border-0 mt-2 rounded-2 w-100 input_form'
                                                                id="otro_edit"
                                                                type="text"
                                                                placeholder='Ingresa un gasto'
                                                                autoComplete='off'
                                                                defaultValue={expCaptured.gastoNormal === true ? "" : expCaptured.description} 
                                                            />
                                                        </div>

                                                       
                                                        <div className='col-12 col-sm-12 mb-4'>
                                                            <label htmlFor="precio_edit"><FontAwesomeIcon icon={faHandHoldingDollar} /> Precio: </label><br />
                                                            <input
                                                                name="price_edit"
                                                                className='border-0 mt-2 rounded-2 w-100 input_form'
                                                                id="precio_edit"
                                                                type="number"
                                                                placeholder='Ingresa el precio'
                                                                autoComplete='off'
                                                                defaultValue={expCaptured.price} 
                                                            />
                                                        </div>

                                                        
                                                        <div className='col-12 col-sm-12 text-center'>
                                                            <button id="btnEditar" className='border-0 px-4 py-2 rounded-pill btn_disabled_edit sombra_btn' type="submit" data-bs-dismiss="modal"><FontAwesomeIcon className='iconTitle' icon={faPenToSquare} /> Guardar Cambios</button>
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

export default ModalEditarGasto;
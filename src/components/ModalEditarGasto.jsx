import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { editExp } from '../features/expenses/expensesSlice';
import { editTotal } from '../features/monthlyTotal/monthlyTotalSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen, faHandHoldingDollar, faPenToSquare, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

const ModalEditarGasto = ({handleCloseModalEdit, handleViewSelectEdit, selectEdit, selectorCommonExpenses, selectGastoRef_edit, inputGastoRef_edit, inputPrecioRef_edit, validateFieldsEdit}) => {

    const dispatch = useDispatch();

    const expCaptured = useSelector(state => state.deleteExp);

    try{
        inputPrecioRef_edit.current.value = expCaptured.price;
    }catch(err){

    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        dispatch(editExp({
            id: expCaptured.id,
            selectGasto: selectGastoRef_edit.current.value,
            inputGasto: inputGastoRef_edit.current.value,
            inputPrecio: inputPrecioRef_edit.current.value,
            selectEdit
        }));

        dispatch(editTotal({
            oldPrice: expCaptured.price,
            newPrice: inputPrecioRef_edit.current.value
        }))
    }


    return (
        <>
            <div className="modal fade" id="modalEditarGasto" tabIndex={-1} aria-labelledby="modalEditarGastoLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5 modal_titulo_desktop" id="modalEditarGastoLabel"><FontAwesomeIcon className='iconTitle' icon={faPenToSquare} /> Editar Gasto</h3>
                            <button type="button" onClick={handleCloseModalEdit} className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <p className='text-center mt-4'><FontAwesomeIcon className='iconTitle' icon={faCircleExclamation} size="xl" /> El gasto a editar corresponde al mes de {expCaptured.month}.</p>

                                <div className="row justify-content-center mt-5">
                                    <div className='col-12 col-sm-12 col-md-11'>
                                        <div className='rounded-3 p-0 p-lg-3'>
                                            <div className="container p-3 p-lg-4">
                                                <form onSubmit={handleSubmitEdit}>
                                                    <div className="row">

                                                        <div className='col-12 col-sm-12 mb-2'>
                                                            <p className='text-center text-white'><FontAwesomeIcon icon={faBookOpen} /> Gasto Actual: <span>{expCaptured.description}</span></p>
                                                        </div>

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
                                                            <label htmlFor="gasto_normal_edit"><FontAwesomeIcon icon={faBookOpen} /> Nuevo Gasto: </label><br />
                                                            <select onChange={() => validateFieldsEdit(inputPrecioRef_edit)} name="description_edit" className='border-0 mt-2 rounded-2 py-1 w-100' ref={selectGastoRef_edit} id="gasto_normal_edit">
                                                                <option value="Selecciona un gasto">Selecciona un gasto</option>
                                                                {selectorCommonExpenses.map((cmExp) => (
                                                                    <option className={cmExp.name === expCaptured.description ? "d-none" : ""} key={cmExp.id} value={cmExp.name}>{cmExp.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                            
                                                       
                                                        <div className={`col-12 col-sm-12 mb-4 ${selectEdit === true ? 'd-none' : 'd-block'}`}>
                                                            <label htmlFor="otro_edit"><FontAwesomeIcon icon={faBookOpen} /> Nuevo Gasto: </label><br />
                                                            <input 
                                                                name="description_edit"
                                                                className='border-0 mt-2 rounded-2 w-100 input_form'
                                                                id="otro_edit"
                                                                type="text"
                                                                placeholder='Ingresa un gasto'
                                                                autoComplete='off'
                                                                ref={inputGastoRef_edit}
                                                                onKeyUp={() => validateFieldsEdit(inputPrecioRef_edit)}
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
                                                                ref={inputPrecioRef_edit}
                                                                onKeyUp={() => validateFieldsEdit(inputPrecioRef_edit)} 
                                                                
                                                            />
                                                        </div>

                                                        
                                                        <div className='col-12 col-sm-12 text-center'>
                                                            <button id="btnEditar" onClick={handleCloseModalEdit} className={`border-0 px-4 py-2 rounded-pill sombra_btn`} type="submit" data-bs-dismiss="modal"><FontAwesomeIcon className='iconTitle' icon={faPenToSquare} /> Guardar Cambios</button>
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
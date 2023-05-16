import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faCalendarDays, faBookOpen, faHandHoldingDollar, faPenToSquare, faTrashCan, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { changeText } from '../features/textMonths/textMonthsSlice';
import { addExpDelete } from '../features/deleteExp/deleteExpSlice';

const AccordionExpenses = ({fecha, numero_mes, selectorExpenses, txt_mes, selectorMonthlyTotal}) => {

    const dispatch = useDispatch();

    const handleChangeText = () => {
        dispatch(changeText(txt_mes));
    }

    const handleGetExpId = (exp) => {
        dispatch(addExpDelete(exp));
    }

    return (
        <>
            <div className={`${fecha.getMonth() > numero_mes && selectorExpenses.filter((exp) => exp.monthNumber === numero_mes).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${numero_mes+1}`} aria-expanded="true" aria-controls={`collapse_${numero_mes+1}`}>
                        <span className='numeroMes me-3'>{numero_mes+1 >= 10 ? numero_mes+1 : `0${numero_mes+1}` }</span> <span>Gastos de {txt_mes}</span>
                    </button>
                </h2>
                <div id={`collapse_${numero_mes+1}`} className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                    <div className="accordion-body px-1 px-sm-2 px-md-3 px-lg-4 rounded-bottom-3">


                        <div className='mt-4 text-center text-lg-end'>

                            {fecha.getMonth() > numero_mes || fecha.getMonth() < numero_mes ?
                                (<button className='border-0 opacity-50 rounded-pill px-4 py-2 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                :
                                (<button onClick={handleChangeText} className='border-0 rounded-pill px-4 py-2 btnAgregar sombra_btn' type='button' data-bs-toggle="modal" data-bs-target={`#modalAgregarGasto`}><FontAwesomeIcon icon={faPlus} /> Agregar</button>) 
                            }
                                

                               
                        </div>
                            
                        {/* Listado de gastos */}
                        <div className='container-md mt-4'>
                            <div className='row scroll_row'>
                                    
                                {selectorExpenses.filter((exp) => exp.monthNumber === numero_mes).length ? (
                                    
                                    selectorExpenses.map((exp) => (

                                        exp.monthNumber === numero_mes && (
                                            <div key={exp.id} className='col-12 col-sm-12 col-md-6 col-lg-4 mb-5'>
                                                <div className='p-3 rounded-3 sombra_btn'>
                                                    <h6 className='text-center mb-4'><FontAwesomeIcon className='iconMainList' icon={faCalendarDays} /> {exp.day < 10 ? `0${exp.day}`: exp.day}/{exp.monthNumber+1 < 10 ? `0${exp.monthNumber+1}` : exp.monthNumber+1}/{exp.year}</h6>

                                                    <p>
                                                        <span className='data_title'><FontAwesomeIcon className='iconMainList' icon={faBookOpen} /> Descripción:</span> <span className='data_item_desktop'>{exp.description}</span>
                                                        <br />
                                                        <span className='data_item_mobile'>{exp.description}</span>
                                                    </p>
                                          
                                                    <p>
                                                        <span className='data_title'><FontAwesomeIcon className='iconMainList' icon={faHandHoldingDollar} /> Costo:</span> <span className='data_item_desktop'>${exp.price}</span>
                                                        <br />
                                                        <span className='data_item_mobile'>${exp.price}</span>
                                                    </p>

                                                    <div className='mt-4 mb-2 text-center'>
                                                        <button onClick={() => handleGetExpId(exp)} className='border-0 rounded-pill px-4 py-2 sombra_btn' type='button' data-bs-toggle="modal" data-bs-target={`#modalEditarGasto`}><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                        <button onClick={() => handleGetExpId(exp)} className='border-0 rounded-pill mt-3 px-4 py-2 sombra_btn' type='button' data-bs-toggle="modal" data-bs-target={`#modalEliminarGasto`}><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                    )))
                                    :
                                    <>
                                        <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                            <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "{txt_mes}" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                        </div>
                                    </>
                                                 
                                }

                                

                            </div>
                        </div>
                        
                        {/* Gasto Total Mensual */}
                        <div className={`txt_gasto_mensual mt-3 ${selectorExpenses.filter((exp) => exp.monthNumber === numero_mes).length > 0 ? 'd-block' : 'd-none'}`}>
                            <p className='px-2'>Gasto Total Mensual: ${selectorMonthlyTotal.total}</p>
                        </div>

                    </div>
                </div>

            
        
            </div>

        </>
    )
}

export default AccordionExpenses;
import React from 'react';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListOl, faPlus, faCalendarDays, faBookOpen, faHandHoldingDollar, faPenToSquare, faTrashCan, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

const Main = () => {

  
  const selectorExpenses = useSelector(state => state.expenses);

  const fecha = new Date();
   
  return (
    <main>
        <div className='container-md'>
            
            <h2 className='text-center mt-5'><FontAwesomeIcon className='iconMainList' icon={faListOl} /> Lista de Gastos</h2>
            
            <hr />
            
            <div className="accordion mt-5" id="accordionExample">

                {/* Enero */}
                <div className={`${fecha.getMonth() > 0 && selectorExpenses.filter((exp) => exp.monthNumber === 0).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                            <span className='numeroMes me-3'>01</span> <span>Gastos de Enero</span>
                        </button>
                    </h2>
                    <div id="collapse_1" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body px-1 px-sm-2 px-md-3 px-lg-4 rounded-bottom-3">


                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 0 || fecha.getMonth() < 0 ?
                                    ( <button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>) 
                                }
                                

                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 0).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 0 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "enero" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Febrero */}
                <div className={`${fecha.getMonth() > 1 && selectorExpenses.filter((exp) => exp.monthNumber === 1).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                        <span className='numeroMes me-3'>02</span> <span>Gastos de Febrero</span>
                        </button>
                    </h2>
                    <div id="collapse_2" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 1 || fecha.getMonth() < 1 ?
                                    ( <button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>) 
                                }
                                

                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 1).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 1 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "febrero" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marzo */}
                <div className={`${fecha.getMonth() > 2 && selectorExpenses.filter((exp) => exp.monthNumber === 2).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                            <span className='numeroMes me-3'>03</span> <span>Gastos de Marzo</span>
                        </button>
                    </h2>
                    <div id="collapse_3" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 2 || fecha.getMonth() < 2 ?
                                    ( <button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>) 
                                }
                                

                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 2).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 2 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "marzo" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Abril */}
                <div className={`${fecha.getMonth() > 3 && selectorExpenses.filter((exp) => exp.monthNumber === 3).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                            <span className='numeroMes me-3'>04</span> <span>Gastos de Abril</span>
                        </button>
                    </h2>
                    <div id="collapse_4" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 3 || fecha.getMonth() < 3 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 3).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 3 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "abril" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mayo */}
                <div className={`${fecha.getMonth() > 4 && selectorExpenses.filter((exp) => exp.monthNumber === 4).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                            <span className='numeroMes me-3'>05</span> <span>Gastos de Mayo</span>
                        </button>
                    </h2>
                    <div id="collapse_5" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 4 || fecha.getMonth() < 4 ?
                                    ( <button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                

                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 4).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 4 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "mayo" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Junio */}
                <div className={`${fecha.getMonth() > 5 && selectorExpenses.filter((exp) => exp.monthNumber === 5).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                            <span className='numeroMes me-3'>06</span> <span>Gastos de Junio</span>
                        </button>
                    </h2>
                    <div id="collapse_6" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 5 || fecha.getMonth() < 5 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 5).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 5 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "junio" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Julio */}
                <div className={`${fecha.getMonth() > 6 && selectorExpenses.filter((exp) => exp.monthNumber === 6).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                            <span className='numeroMes me-3'>07</span> <span>Gastos de Julio</span>
                        </button>
                    </h2>
                    <div id="collapse_7" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 6 || fecha.getMonth() < 6 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 6).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 6 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "julio" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Agosto */}
                <div className={`${fecha.getMonth() > 7 && selectorExpenses.filter((exp) => exp.monthNumber === 7).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                            <span className='numeroMes me-3'>08</span> <span>Gastos de Agosto</span>
                        </button>
                    </h2>
                    <div id="collapse_8" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 7 || fecha.getMonth() < 7 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 7).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 7 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "agosto" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Septiembre */}
                <div className={`${fecha.getMonth() > 8 && selectorExpenses.filter((exp) => exp.monthNumber === 8).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_9" aria-expanded="false" aria-controls="collapse_9">
                            <span className='numeroMes me-3'>09</span> <span>Gastos de Septiembre</span>
                        </button>
                    </h2>
                    <div id="collapse_9" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 8 || fecha.getMonth() < 8 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 8).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 8 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "septiembre" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Octubre */}
                <div className={`${fecha.getMonth() > 9 && selectorExpenses.filter((exp) => exp.monthNumber === 9).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_10" aria-expanded="false" aria-controls="collapse_10">
                            <span className='numeroMes me-3'>10</span> <span>Gastos de Octubre</span>
                        </button>
                    </h2>
                    <div id="collapse_10" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 9 || fecha.getMonth() < 9 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 9).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 9 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "octubre" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Noviembre */}
                <div className={`${fecha.getMonth() > 10 && selectorExpenses.filter((exp) => exp.monthNumber === 10).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_11" aria-expanded="false" aria-controls="collapse_11">
                            <span className='numeroMes me-3'>11</span> <span>Gastos de Noviembre</span>
                        </button>
                    </h2>
                    <div id="collapse_11" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 10 || fecha.getMonth() < 10 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 10).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 10 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "noviembre" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Diciembre */}
                <div className={`${fecha.getMonth() > 11 && selectorExpenses.filter((exp) => exp.monthNumber === 11).length === 0 ? 'd-none' : 'd-block'} accordion-item border-0 mb-4 rounded-3`}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_12" aria-expanded="false" aria-controls="collapse_12">
                            <span className='numeroMes me-3'>12</span> <span>Gastos de Diciembre</span>
                        </button>
                    </h2>
                    <div id="collapse_12" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>

                                {fecha.getMonth() > 11 || fecha.getMonth() < 11 ?
                                    (<button className='border-0 opacity-50 rounded-pill px-4 py-1 btnAgregar_falso sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)  
                                    :
                                    (<button className='border-0 rounded-pill px-4 py-1 btnAgregar sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>)
                                    
                                }
                                                               
                            </div>
                            
                            {/* Listado de gastos */}
                            <div className='container-md mt-4'>
                                <div className='row scroll_row'>
                                    
                                    {selectorExpenses.filter((exp) => exp.monthNumber === 11).length ? (
                                    
                                        selectorExpenses.map((exp) => (

                                            exp.monthNumber === 11 && (
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
                                                            <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faPenToSquare} /> Editar</button><br />
                                                            <button className='border-0 rounded-pill mt-3 px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon className='iconMainList' icon={faTrashCan} /> Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            )
                                        )))
                                        :
                                        <>
                                            <div className='col-12 col-sm-12 d-flex align-items-center justify-content-center'>
                                                <span className='txt_noExpenses text-center'>No hay gastos registrados en el mes de "diciembre" <FontAwesomeIcon icon={faCircleExclamation} /></span>
                                            </div>
                                        </>
                                                 
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
  )
}

export default Main;
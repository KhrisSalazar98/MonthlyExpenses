import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListOl, faPlus} from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <main>
        <div className='container'>
            <h2 className='text-center mt-5'><FontAwesomeIcon className='iconMainTitle' icon={faListOl} /> Lista de Gastos</h2>
            <hr />

            

            <div className="accordion mt-5" id="accordionExample">

                {/* Enero */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                            <span className='numeroMes me-3'>01</span> <span>Gastos de Enero</span>
                        </button>
                    </h2>
                    <div id="collapse_1" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Febrero */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                        <span className='numeroMes me-3'>02</span> <span>Gastos de Febrero</span>
                        </button>
                    </h2>
                    <div id="collapse_2" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Marzo */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                            <span className='numeroMes me-3'>03</span> <span>Gastos de Marzo</span>
                        </button>
                    </h2>
                    <div id="collapse_3" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Abril */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                            <span className='numeroMes me-3'>04</span> <span>Gastos de Abril</span>
                        </button>
                    </h2>
                    <div id="collapse_4" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mayo */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                            <span className='numeroMes me-3'>05</span> <span>Gastos de Mayo</span>
                        </button>
                    </h2>
                    <div id="collapse_5" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Junio */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                            <span className='numeroMes me-3'>06</span> <span>Gastos de Junio</span>
                        </button>
                    </h2>
                    <div id="collapse_6" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Julio */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                            <span className='numeroMes me-3'>07</span> <span>Gastos de Julio</span>
                        </button>
                    </h2>
                    <div id="collapse_7" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Agosto */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                            <span className='numeroMes me-3'>08</span> <span>Gastos de Agosto</span>
                        </button>
                    </h2>
                    <div id="collapse_8" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Septiembre */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_9" aria-expanded="false" aria-controls="collapse_9">
                            <span className='numeroMes me-3'>09</span> <span>Gastos de Septiembre</span>
                        </button>
                    </h2>
                    <div id="collapse_9" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Octubre */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_10" aria-expanded="false" aria-controls="collapse_10">
                            <span className='numeroMes me-3'>10</span> <span>Gastos de Octubre</span>
                        </button>
                    </h2>
                    <div id="collapse_10" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Noviembre */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_11" aria-expanded="false" aria-controls="collapse_11">
                            <span className='numeroMes me-3'>11</span> <span>Gastos de Noviembre</span>
                        </button>
                    </h2>
                    <div id="collapse_11" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Diciembre */}
                <div className="accordion-item border-0 mb-4 rounded-3">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed py-4 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_12" aria-expanded="false" aria-controls="collapse_12">
                            <span className='numeroMes me-3'>12</span> <span>Gastos de Diciembre</span>
                        </button>
                    </h2>
                    <div id="collapse_12" className="accordion-collapse collapse rounded-bottom-3 sombra_btn" data-bs-parent="#accordionExample">
                        <div className="accordion-body rounded-bottom-3">
                            <div className='mt-4 text-center text-lg-end'>
                                <button className='border-0 rounded-pill px-4 py-1 sombra_btn' type='button'><FontAwesomeIcon icon={faPlus} /> Agregar</button>
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
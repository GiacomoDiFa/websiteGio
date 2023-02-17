import React from 'react'
import Card from '../components/Card'
import Cardimage from '../components/Cardimage'
import profilephoto from '../assets/giorgia.jpg';

function Homescreen() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <div className='row no-gutters vh-100'>
                        <div className='col-lg-6 col-12 px-0 pb-5'>
                            <div className='container h-75 d-flex flex-column justify-content-center align-items-center mt-5'>
                                <h3 >Dottoressa</h3>
                                <h1 >Giorgia Traversi</h1>
                                <h3 >Logopedista</h3>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 h-100 px-0'>
                            <img src={profilephoto} className="img-fluid" alt="Prova" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section vh-100'>
                <div className='container mb-5 mb-sm-3 mt-5'>
                    <div className='row no-gutters'>
                        <div className='col-lg-6 col-12'>
                            <h1>Condizioni di cui mi occupo</h1>
                        </div>
                        <div className='col-lg-6 col-12 pt-3 pt-lg-0'>
                            <button className='btn btn-primary float-lg-end float-xs-start'>Contattami</button>
                        </div>
                    </div>
                </div>
                <div className='container h-50 mt-5'>
                    <div className='row no-gutters h-100'>

                        <div className='col-sm-6 col-12 mb-3 mb-sm-3'>
                            <Card />
                        </div>
                        <div className='col-sm-6 col-12 mb-3 mb-sm-3'>
                            <Card />
                        </div>
                        <div className='col-sm-6 col-12 mb-3 mb-sm-3'>
                            <Card />
                        </div>
                        <div className='col-sm-6 col-12 mb-3 mb-sm-3'>
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section vh-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <h1>I miei servizi</h1>
                        </div>
                        <div className='col-lg-6 col-12 pt-3 pt-lg-0'>
                            <button className='btn btn-primary float-lg-end float-xs-start'>Contattami</button>
                        </div>
                    </div>
                </div>
                <div className='container h-75'>
                    <div className='row h-100'>
                        <div className='col-lg-6 col-12 h-100 mt-5 mt-lg-0'>
                            <Cardimage/>
                        </div>
                        <div className='col-lg-6 col-12 h-100'>
                            <Cardimage/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homescreen
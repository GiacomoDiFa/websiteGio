import React from 'react'
import Card from '../components/Card'
import Cardimage from '../components/Cardimage'
import profilephoto from '../assets/giorgia.jpg';
import pdffile from '../assets/firmato.pdf'
import Form from '../components/Form';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Homescreen() {
    return (
        <>
            <div className='section'>
                <div className='container pt-5' data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <div className='row no-gutters vh-100'>
                        <div className='col-lg-6 col-12 px-0 pb-5'>
                            <div className='container h-75 d-flex flex-column justify-content-center align-items-center mt-5'>
                                <h3 className='fontgloock' >Dottoressa</h3>
                                <h1 className='fontminerve'>Giorgia Traversi</h1>
                                <h3 className='fontgloock'>Logopedista</h3>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 h-100 px-0'>
                            <div className='container'>
                                <img src={profilephoto} className="img-fluid" alt="Prova" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section vh-100'>
                <div className='container mb-5 mb-sm-3 mt-5' data-aos="fade-right" data-aos-delay="100"
                    data-aos-duration="1000">
                    <div className='row no-gutters' data-aos="fade-right" data-aos-delay="100"
                        data-aos-duration="1000">
                        <div className='col-lg-6 col-12' data-aos="fade-right" data-aos-delay="100"
                            data-aos-duration="1000">
                            <h1 className='fontminerve'>Ambiti in cui intervengo</h1>
                        </div>
                        <div className='col-lg-6 col-12 pt-3 pt-lg-0' data-aos="fade-right" data-aos-delay="100"
                            data-aos-duration="1000">
                            <div className='container'>
                                <a href={pdffile} target="_blank"><button className='btn btn-primary float-lg-end float-xs-start'>Contattami</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container h-50 mt-5' data-aos="fade-right" data-aos-delay="100"
                    data-aos-duration="1000">
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
            <div className='container' data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <div className='row'>
                    <div className='col-lg-6 col-12' data-aos="fade-right" data-aos-delay="100"
                        data-aos-duration="1000">
                        <h1 className='fontminerve'>I miei servizi</h1>
                    </div>
                    <div className='col-lg-6 col-12 pt-3 pt-lg-0' data-aos="fade-right" data-aos-delay="100"
                        data-aos-duration="1000">
                        <button className='btn btn-primary float-lg-end float-xs-start'>Contattami</button>
                    </div>
                </div>
            </div>
            <div className='container h-75' data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <div className='row h-100'>
                    <div className='col-lg-6 col-12 h-100 mt-5 mt-lg-0' data-aos="fade-right" data-aos-delay="100"
                        data-aos-duration="1000">
                        <div className='container'>
                            <Cardimage />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 h-100' data-aos="fade-right" data-aos-delay="100"
                        data-aos-duration="1000">
                        <div className='container'>
                            <Cardimage />
                        </div>
                    </div>
                </div>
            </div>

            <div className='section vh-100'>
                <div className='container pt-5' data-aos="fade-right" data-aos-delay="100"
                    data-aos-duration="1000">
                    <div className='row'>
                        <h1 className='fontminerve'>I miei contatti</h1>
                    </div>
                </div>
                <div className='container' data-aos="fade-right" data-aos-delay="100"
                    data-aos-duration="1000">
                    <div className='row'>

                        <div className='col-lg-6 col-12' data-aos="fade-right" data-aos-delay="100"
                            data-aos-duration="1000">
                            <p className='mb-0 mt-3'>I miei studi:</p>
                            <p className='fs-2 pt-0 mt-0'>Rimini (RN), Morciano di Romagna (RN), Montecalvo in Foglia (PU)</p>
                            <hr></hr>
                            <p className='mb-0'>Ricevo anche:</p>
                            <p className='fs-2'>On-line</p>
                            <hr></hr>
                            <p className='mb-0'>Il mio indirizzo email:</p>
                            <p className='fs-2'>giorgia.traversi@gmail.com</p>
                            <hr></hr>
                            <p className='mb-0'>Seguimi sui social:</p>
                            <p>Icona insta, Icona fb</p>
                        </div>


                        <div className='col-lg-6 col-12' data-aos="fade-right" data-aos-delay="100"
                            data-aos-duration="1000">
                            <Form />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Homescreen
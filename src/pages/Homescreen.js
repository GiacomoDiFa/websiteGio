import React from 'react'
import Card from '../components/Card'
import Cardimage from '../components/Cardimage'
import profilephoto from '../assets/giorgia.jpg'
import pdffile from '../assets/Curriculum.pdf'
import Form from '../components/Form'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import trattamento from '../lotties/trattamento.json'
import evaluation from '../lotties/evaluation.json'
import mind from '../lotties/mind.json'
import voice from '../lotties/voice.json'
import family from '../lotties/family.json'
import deglutizione from '../lotties/deglutizione.json'
// ..
AOS.init()

function Homescreen() {
  return (
    <>
      <div id="home" className="section">
        <div
          className="container pt-5"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="row no-gutters vh-250">
            <div className="col-lg-6 col-12 px-0 pb-5">
              <div className="container h-75 d-flex flex-column justify-content-center align-items-center mt-5">
                <h3 className="fontgloock">Dottoressa</h3>
                <h1 className="fontminerve">Giorgia Traversi</h1>
                <h3 className="fontgloock">Logopedista</h3>
                <a href={pdffile} target="_blank">
                  <button className="btn btn-lg btn-primary float-lg-end float-xs-start">
                    Curriculum
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 h-100 px-0">
              <div className="container">
                <img src={profilephoto} className="img-fluid" alt="Prova" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="container"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      ></div>

      <div className="section vh-200">
        <div
          className="container mb-5 mb-sm-3 mt-5"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div
            className="row no-gutters"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div
              className="col-lg-6 col-12"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <h1 className="fontminerve">I miei servizi</h1>
            </div>
            <div
              className="col-lg-6 col-12 pt-3 pt-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            ></div>
          </div>
        </div>
        <div
          className="container h-50 mt-5"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="row no-gutters h-100">
            <div className="col-sm-6 col-12 mb-3 mb-sm-3">
              <Card
                testo1={'Valutazione'}
                testo2={
                  'Valutazione dei disturbi di linguaggio in età evolutiva e in età adulta (patologie acquisite)<br/>Valutazione degli apprendimenti in età evolutiva<br/>Valutazione delle patologie della voce<br/> Valutazione della disfagia'
                }
                animazione={evaluation}
              />
            </div>
            <div className="col-sm-6 col-12 mb-3 mb-sm-3">
              <Card
                testo1={'Riabilitazione del linguaggio'}
                testo2={
                  'Riabilitazione del linguaggio in età evolutiva e in età adulta (patologie acquisite)<br/>Stimolazione del linguaggio in produzione e in comprensione a livello:<br/>Fonetico/fonologico<br/>Semantico-lessicale<br/>Morfosintattico<br/>Narrativo<br/>'
                }
                animazione={trattamento}
              />
            </div>
            <div className="col-sm-6 col-12 mb-3 mb-sm-3">
              <Card
                testo1={'Riabilitazione cognitiva'}
                testo2={
                  'Stimolazione delle funzioni cognitive tra cui:<br/>Memoria<br/>Attenzione<br/>Problem Solving<br/>Flessibilità cognitiva<br/>'
                }
                animazione={mind}
              />
            </div>
            <div className="col-sm-6 col-12 mb-3 mb-sm-3">
              <Card
                testo1={'Riabilitazione delle patologie della voce'}
                testo2={
                  'Trattamento e miglioramento delle condizioni vocali compromesse da vari disturbi o lesioni.<br/><br/><br/><br/>'
                }
                animazione={voice}
              />
            </div>
            <div className="col-sm-6 col-12 mb-3 mb-sm-3">
              <Card
                testo1={'Riabilitazione dei disturbi alimentari'}
                testo2={
                  "Riabilitazione dell'atto deglutitorio<br/>Raggiungimento della dinamica deglutitoria funzionale con reintegrazione dell'alimentazione<br/>Riabilitazione dei disturbi del feeding<br/><br/><br/>"
                }
                animazione={deglutizione}
              />
            </div>
            <div className="col-sm-6 col-12 mb-3 mb-sm-3">
              <Card
                testo1={'Counseling'}
                testo2={
                  'Consulenza e supporto per pazienti e famiglie<br/><br/><br/><br/>'
                }
                animazione={family}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="section vh-100">
        <div
          className="container pt-5"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="row">
            <h1 className="fontminerve">I miei contatti</h1>
          </div>
        </div>
        <div
          className="container"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="row">
            <div
              className="col-lg-6 col-12"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="mb-0 mt-3">I miei studi:</p>
              <p className="fs-2 pt-0 mt-0">
                Studio Privato Fratte Di Sassofeltrio (RN) <br></br> Clinica
                Santo Stefano - Macerata Feltria (PU)
              </p>
              <hr></hr>
              <p className="mb-0">Ricevo anche:</p>
              <p className="fs-2">On-line</p>
              <hr></hr>
              <p className="mb-0">Il mio indirizzo email:</p>
              <p className="fs-2">giorgiatraversi@icloud.com</p>
              <hr></hr>
              <p className="mb-0">La mia PEC:</p>
              <p className="fs-2">giorgia.traversi@pec.tsrm-pstrp.org</p>
              <hr></hr>
            </div>
            <div
              className="col-lg-6 col-12"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homescreen

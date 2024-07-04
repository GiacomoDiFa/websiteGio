import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

function Form() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_dg4zggz', 'template_oyz67kl', form.current, {
        publicKey: 'JMzt-osgXiUlBc7Tx',
      })
      .then(
        () => {
          Swal.fire(
            'Email inviata con successo',
            'Giorgia ti risponderà non appena avrà visualizzato il messaggio',
            'success'
          )
        },
        (error) => {
          Swal.fire('Oops', 'Qualcosa è andato storto, riprova!', 'error')
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3 mt-3 shadow">
          <input
            type="email"
            className="form-control"
            name="from_name"
            placeholder="Chi sono"
          />
        </div>

        <div className="mb-3 mt-3 shadow">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="L'oggetto del messaggio?"
          />
        </div>

        <div className="mb-3 shadow">
          <textarea
            className="form-control"
            name="message"
            rows="10"
            placeholder="Cosa vuoi dirmi?"
          ></textarea>
        </div>

        <div className="container">
          <div className="mb-3">
            <button
              id="buttonmail"
              className="btn btn-primary"
              onSubmit={sendEmail}
            >
              Inviami un'email!
            </button>
            {/* <input type="submit" value="Send" />*/}
          </div>
        </div>
      </form>
    </>
  )
}

export default Form

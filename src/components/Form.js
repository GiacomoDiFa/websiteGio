import React from 'react'

function Form() {
    return (
        <>

            <div class="mb-3 mt-3 shadow">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="L'oggetto del messaggio?" />
            </div>


            <div class="mb-3 shadow">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Cosa vuoi dirmi?'></textarea>
            </div>
            <div className='container'>
                <div className='mb-3'>

                    <button id='buttonmail' className='btn btn-primary'>Inviami un'email!</button>
                </div>
            </div>
        </>
    )
}

export default Form
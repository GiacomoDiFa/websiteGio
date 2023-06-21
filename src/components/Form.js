import React from 'react';

function Form() {
    return (
        <>
            <div className="mb-3 mt-3 shadow">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="L'oggetto del messaggio?" />
            </div>

            <div className="mb-3 shadow">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Cosa vuoi dirmi?"></textarea>
            </div>

            <div className="container">
                <div className="mb-3">
                    <button id="buttonmail" className="btn btn-primary btn-block btn-lg">Inviami un'email!</button>
                </div>
            </div>
        </>
    );
}

export default Form;

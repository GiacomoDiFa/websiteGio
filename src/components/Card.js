import React from 'react'
import Lottie from 'react-lottie'

function Card({ testo1, testo2, animazione }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animazione,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="card h-100 shadow">
      <div className="card-body">
        <h5 className="card-title text-start fw-bold">{testo1}</h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: testo2 }}
        ></p>
        <div>
          <Lottie options={defaultOptions} height={300} width={300}></Lottie>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import profilephoto from '../assets/giorgia.jpg'

function Cardimage() {
    return (
        <div class="card-image card h-75 shadow hover-overlay hover-zoom hover-shadow ripple">
            <img src={profilephoto} class="card-img" alt="..." />
            <div className='card-image-body'>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Cardimage
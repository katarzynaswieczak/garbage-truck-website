import React from 'react';
import first from "../images/dario-mueller-ssLnO4DgrOE-unsplash.jpg";
import '../stylesheet/Pin.css';

function Pin() {
    return (
        <div className="wrapper">
        <div className="container">
        <img src={first} alt="first" className="image_pin" />
        </div>
           
        </div>
    )
}

export default Pin


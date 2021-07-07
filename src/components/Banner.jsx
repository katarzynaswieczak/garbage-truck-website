import React from 'react';
import HomeBanner from "../images/banner.png";
import "../stylesheet/Banner.css";


const Banner = () => {
    return (
        <div className="Banner_container">
            <div className="Banner">
                <h2>Uwaga!</h2>
                <h1>Śmieciarka jedzie</h1>
                </div>
                <div className="btn_add">
       <div className="add">
       <a href="/add" className="add_add"><img src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"/></a>
       </div>
       </div>
            </div>
  
            

    )
}

export default Banner;
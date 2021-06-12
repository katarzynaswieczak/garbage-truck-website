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
            <div className="Categories_available">
                <div className="Category_title">
                    <h2>All Categories</h2>
                </div>
                <div className="Actual_category">
                    <h4 className="Categories_inStock">Cars</h4>
                    <h4 className="Categories_inStock">Mobiles</h4>
                    <h4 className="Categories_inStock">Gaming</h4>
                </div>
            </div>
        </div>
    )
}

export default Banner;
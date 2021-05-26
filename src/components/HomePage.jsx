import React from 'react';
import Header from "./Header";
import Banner from "./Banner";
import FeedItem from "./FeedItem";



const HomePage = () => {
    return (
        <div className="HomePage_container">
        <Header />
        <Banner />
        <FeedItem />
      
        </div>
    )
}

export default HomePage
import React from 'react';
import Banner from '../Bannar/Banner';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Slider></Slider>
        </div>
    );
};

export default Home;
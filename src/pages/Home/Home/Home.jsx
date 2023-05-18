import React from 'react';
import Banner from '../Bannar/Banner';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import TabCategory from '../TabCategory/TabCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabCategory></TabCategory>
            <Slider></Slider>
        </div>
    );
};

export default Home;
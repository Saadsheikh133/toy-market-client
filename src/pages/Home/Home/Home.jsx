import React from 'react';
import Banner from '../Bannar/Banner';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import TabCategory from '../TabCategory/TabCategory';
import SingleCard from '../singleCard/SingleCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabCategory></TabCategory>
            <Slider></Slider>
            <SingleCard></SingleCard>
        </div>
    );
};

export default Home;
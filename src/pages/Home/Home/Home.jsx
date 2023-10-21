import React from 'react';
import Banner from '../Bannar/Banner';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import TabCategory from '../TabCategory/TabCategory';
import SingleCard from '../singleCard/SingleCard';
import useTitle from '../../../hooks/useTitle';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabCategory></TabCategory>
            <OurServices></OurServices>
            <Slider></Slider>
            <SingleCard></SingleCard>
        </div>
    );
};

export default Home;
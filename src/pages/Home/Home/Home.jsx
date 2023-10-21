import React from 'react';
import Banner from '../Bannar/Banner';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import TabCategory from '../TabCategory/TabCategory';
import SingleCard from '../singleCard/SingleCard';
import useTitle from '../../../hooks/useTitle';
import OurServices from '../OurServices/OurServices';
import LatestUpdate from '../LatestUpdate/LatestUpdate';
import Contact from '../Contact/Contact';
import AddReview from '../AddReview/AddReview';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabCategory></TabCategory>
            <AddReview></AddReview>
            <OurServices></OurServices>
            <LatestUpdate></LatestUpdate>
            <Slider></Slider>
            <SingleCard></SingleCard>
            <Contact></Contact>
        </div>
    );
};

export default Home;
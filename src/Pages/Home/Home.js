import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Intro from './Intro';
import Review from './Reviews';
import Tools from './Tools';
import Objectives from './Objectives';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Intro></Intro>

            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            
            <Objectives></Objectives>
            <Footer></Footer>
        </div>
    );
};

export default Home;
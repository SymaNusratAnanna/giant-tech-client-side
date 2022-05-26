import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Intro from './Intro';


import Objectives from './Objectives';
import HomeTools from './HomeTools';

import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Intro></Intro>

            <HomeTools></HomeTools>
            <BusinessSummery></BusinessSummery>
            
            <Reviews></Reviews>
            
            <Objectives></Objectives>
            <Footer></Footer>
        </div>
    );
};

export default Home;
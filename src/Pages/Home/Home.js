import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Intro from './Intro';
import Review from './Reviews';
import Tools from './Tools';
import customer from '../../assets/icons/family.png'

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>

            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            
            <Intro></Intro>
            <Footer></Footer>
        </div>
    );
};

export default Home;
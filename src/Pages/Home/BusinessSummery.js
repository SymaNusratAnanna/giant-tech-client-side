import React from 'react';
import Business from './Business'
import customer from '../../assets/icons/family.png';
import revenue from '../../assets/icons/growth.png';
import reviews from '../../assets/icons/review.png';
import tools from '../../assets/icons/toolbox.png';


const BusinessSummery = () => {
    return (
       <>
       <h2>bgnss</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            
            <Business img={customer}></Business>
            <Business img={revenue}></Business>
            <Business img={reviews}></Business>
            <Business img={tools}></Business>
        </div>
       </>
    );
};

export default BusinessSummery;
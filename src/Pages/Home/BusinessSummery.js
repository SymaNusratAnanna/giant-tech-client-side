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
            
          <div>  <Business img={customer}></Business>
          <h2 className='text-5xl font-bold'>65</h2></div>
           <div> <Business img={revenue}></Business>
           <h2 className='text-5xl font-bold'>450+</h2></div>
            <div><Business img={reviews}></Business>
            <h2 className='text-5xl font-bold'>300+</h2></div>
           <div> <Business img={tools}></Business>
           <h2 className='text-5xl font-bold'> 490+</h2></div>
        </div>
       </>
    );
};

export default BusinessSummery;
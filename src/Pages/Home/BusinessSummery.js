import React from 'react';
import Business from './Business'
import customer from '../../assets/icons/family.png'

const BusinessSummery = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <h2>bgnss</h2>
            <Business img={customer}></Business>
        </div>
    );
};

export default BusinessSummery;
import React from 'react';
import Reviews from './Reviews';

const Reveiw = ({review}) => {
    return (
        
      <div>
        <h4 className='text-xl'>{review?.name}</h4>
        
        <p>{review?.description}</p>
        <p>{review?.rating}</p>
      </div>
    
  



    );
};

export default Reveiw;
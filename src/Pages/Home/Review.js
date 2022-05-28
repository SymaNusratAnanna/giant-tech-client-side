import React from 'react';
import Reviews from './Reviews';

const Reveiw = ({review}) => {
    return (
      <>  
      
        
        
       
      

<div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
  
<h4 className='text-xl '> <span className='text-xl font-bold text-primary'>Name:</span>   {review?.name}</h4>
<p>    {review?.description}</p>
<p className='text-xl font-bold text-secondary'>Rating Out of 5: {review?.rating}</p>
  
</div>
</div>
    
  </>



    );
};

export default Reveiw;
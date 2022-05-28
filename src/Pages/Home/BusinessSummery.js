import React from 'react';

import customer from '../../assets/icons/family.png';
import revenue from '../../assets/icons/growth.png';
import reviews from '../../assets/icons/review.png';
import tools from '../../assets/icons/toolbox.png';


const BusinessSummery = () => {
    return (
       <>
       <h2 className='text-3xl font-bold text-center'>MILLION BUSINESS TRUST US</h2>
         <p className='text-2xl font-bold text-center'>ALAWAYS THERE FOR GIVE USERS THE BEST</p>
       
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 px-10 '>
            
         
            <div class="card w-56 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={customer} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        
          <h2 className='text-3xl font-bold'> 100+</h2>
          <p className='font-bold'>Customers Served</p>
          <div class="card-actions">
            
          </div>
        </div>
      </div>
      <div class="card w-56 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={revenue} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 className='text-3xl font-bold'> 120M+</h2>
          <p className='font-bold'>Annual Revenue</p>
          <div class="card-actions">
            
          </div>
        </div>
      </div> <div class="card w-56 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={reviews } class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 className='text-3xl font-bold'> 35K+</h2>
          <p className='font-bold'>Reviews</p>
          <div class="card-actions">
            
          </div>
          </div>
      </div> <div class="card w-56 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={tools } class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 className='text-3xl font-bold'> 50+</h2>
          <p className='font-bold'>Tools</p>
          <div class="card-actions">
            <div>
          </div>
        </div>
      </div>
        </div>
        </div>
       </>
    );
};

export default BusinessSummery;
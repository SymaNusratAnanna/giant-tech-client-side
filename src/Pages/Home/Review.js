import React from 'react';
import Reviews from './Reviews';

const Reveiw = ({review}) => {
    return (
        <div class="card lg:max-w bg-base-100 shadow-xl px-5">
  <div class="card-body px-5">
    <p> ....................</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review.img}/>
  </div>
</div>
      <div>
        <h4 className='text-xl'>{review.name}</h4>
        <p>{review.location}</p>
      </div>
    </div>
  </div>

</div>

    );
};

export default Reveiw;
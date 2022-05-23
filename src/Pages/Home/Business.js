import React from 'react';

const Business = ({img}) => {
    return (
        <div class="card w-56 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 ></h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    );
};

export default Business;
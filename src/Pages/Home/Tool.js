import React from 'react';

const Tool = ({tool}) => {
    const {name,img, description, mediumOrderquantity, availablequantity, price} = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className='text-2xl font-bold'>{name}</h2>
          <p> Description:{description}</p>
          <p> Medium-Order-Quantity:{mediumOrderquantity}</p>
          <p> Available Quantity:{availablequantity}</p>
          <p> Price:{price}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;
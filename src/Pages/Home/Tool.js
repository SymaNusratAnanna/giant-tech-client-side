import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name,img, description, minimum_order_quantity, available_quantity, price}= tool;

    const navigate = useNavigate();
    const navigateToToolsDetails = id =>{
      navigate(`/tool/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className='text-2xl font-bold'>{name}</h2>
          <p> Description:{description}</p>
          <p> Minimum-Order-Quantity:{minimum_order_quantity}</p>
          <p> Available Quantity:{available_quantity}</p>
          <p> Price:{price}</p>
          <div class="card-actions">
            <button onClick={()=> navigateToToolsDetails(_id)} class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;
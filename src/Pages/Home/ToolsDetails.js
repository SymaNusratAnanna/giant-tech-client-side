import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ToolsDetails = () => {
    const {toolId} = useParams();
    const [tool, setTool]= useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/tool/${toolId}`;
        
        fetch(url)
        .then(res=> res.json())
        .then(data=> setTool(data));
    },[])
    return (
        <>
        <div className='py-10 px-20 p-5'>
        <h2 className='text-3xl font-bold'>Welcome to purchase from <span className='text-primary text-2xl font-bold'>Giant Tech</span></h2>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={tool.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className='text-2xl font-bold'>{tool.name}</h2>
          <p> Description:{tool.description}</p>
          <p> Minimum-Order-Quantity:{tool.minimum_order_quantity}</p>
          <p> Available Quantity:{tool.available_quantity}</p>
          <p> Price:{tool.price}</p>
          <div class="card-actions">
            <button  class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
      </>
    );
};

export default ToolsDetails;
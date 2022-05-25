import React from 'react';
import useTools from '../../../hooks/useTools';

const ManageTools = () => {
    const [tools,setTools] = useTools();

    const handleDelete = id =>{

        const proceed = window.confirm('Are you sure?');
        if(proceed){

            const url =`http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                const remaining=tools.filter(tool => tool._id !== id);
                setTools(remaining);
            })
            
        }
    }
    return (
  <>
   <h2 className='mx-auto text-center text-3xl font-bold'>Manage your services</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12'>
               
                {
                    tools.map(tool => <div key={tool._id}>
                         
       
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
          <button  onClick={()=> handleDelete(tool._id)}  class="btn btn-primary">Delete</button>
          {/* <button onClick={()=> navigateToBuyProduct()} class="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
        
      
      </div>
                        

                      

                        </div>)
                }
        </div>
        </>
    );
};

export default ManageTools;

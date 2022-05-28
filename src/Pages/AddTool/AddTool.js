import React from 'react';
import { useForm } from "react-hook-form";

const AddTool = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const url = 'https://immense-sierra-48732.herokuapp.com/tool';
        fetch(url, {method: 'POST',
        headers: {
                   'content-type': 'application/json'
                   },
        body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result => {
            console.log(result);
        })
      
       
    
    }
    

    return (
        <div className='w-80 mx-auto  text-black'>
            <h2 className='text-3xl font-bold' >Add Product</h2>
            <form className=' flex flex-col py-10 '  onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2'placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2'placeholder='Description' {...register("description")} />
      <input className='mb-2'placeholder='Minimum-order-quantity' type="number" {...register("price")} />
      <input className='mb-2'placeholder='Available-quantity' type="number" {...register("price")} />
      <input className='mb-2'placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2'placeholder='Photo URL' type="text" {...register("img")} />
      <input type="submit" className="btn btn-active"  value="Add Product"    />
    </form>
        </div>
    );
};

export default AddTool;

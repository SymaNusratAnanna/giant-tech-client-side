import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Orders = () => {
    const {toolId}=useParams();
    const [user]=useAuthState(auth)
    console.log(user.displayName)
    const [toolsDetails, setToolsDetails] = useState({});
    const [orderQuantity,setOrderQuantity]=useState(null)
    const [totalPrice,setTotalPrice]=useState(null)
    const [error,setError]=useState('')

    const {_id, name,img, description, minimum_order_quantity, available_quantity, price}= toolsDetails;
    useEffect(()=>{
        const url=`https://immense-sierra-48732.herokuapp.com/tool/${toolId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setToolsDetails(data))
    },[toolId])

    const handleminOrder = e=>{
      console.log(price)
      const minQuantity = e.target.value;
      if(minQuantity>=minimum_order_quantity && minQuantity<=available_quantity){
          setOrderQuantity(minQuantity);
          const totalAmount = minQuantity*price;
          setTotalPrice(totalAmount)
          setError('')
      }else{
          setError('Please add minimum or available quantity')
      }
  }
    const handleOrder=e=>{
      e.preventDefault()
      const address = e.target.address.value;
      const phone = e.target.phone.value;

      const order = {
          email: user.email,
          name: user.name,
          productName: name,
          orderQuantity: orderQuantity,
          totalAmount: totalPrice,
          
          address,
          phone,
          img: img
      }
      console.log(order)
        fetch('https://immense-sierra-48732.herokuapp.com/order',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data =>{
          if(data.success){
            toast('Order Pleaced')
               e.target.reset()
               setTotalPrice(null)
          }
          else{
            toast.error('something has worng plase try again')
          }

        });

    }

    return (
        <section>
            <h2 className='text-center text-primary font-bold text-3xl mb-12 mt-12 underline'>Your Order</h2>
            <div className="flex flex-col w-full lg:flex-row mb-14">
           
  <div className="grid flex-grow card rounded-box place-items-center">
  <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className='text-2xl font-bold'>{name}</h2>
          <p > <span className='text-xl font-bold'>Description:</span>{description}</p>
          <p> <span className='text-xl font-bold'> Minimum-Order-Quantity:</span>{minimum_order_quantity}</p>
          <p> <span className='text-xl font-bold'> Available Quantity:</span>{available_quantity}</p>
          <p ><span className='text-xl font-bold'> Price:</span>{price}</p>
          
        </div>
      </div>
  </div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow card rounded-box place-items-center">
      
      <form onSubmit={handleOrder} className='flex flex-col'>
      <h2 className='text-center font-bold text-2xl mb-12'>Purchase Now</h2>
      <input type="text"  name='name' placeholder="Name" className="mb-4  input input-bordered w-full max-w-xs" value={user?.displayName ||''} readOnly/>
        <input type="email"  name='emial' placeholder="Email" className="mb-4  input input-bordered w-full max-w-xs" value={user?.email ||''} readOnly />
        <input type="text"  name='address' placeholder="Your Address" className=" mb-4 input input-bordered w-full max-w-xs" required />
        <input type="number"  name='phone' placeholder="Phone" className=" mb-4 input input-bordered w-full max-w-xs" required/>
        <label className='text-[12px] font-bold mb-2'>Minimum Order</label>
        <label className="label">
        {error && <span className="label-text-alt text-red-500">{error}</span>}
        </label>
        <input onChange={ handleminOrder} placeholder={minimum_order_quantity} type="number"  name='order' className=" mb-4 input input-bordered w-full max-w-xs" required />
        <label className='text-[12px] font-bold mb-2'>Total Amount</label>
        <input disabled  type="number"  name='amount' className=" mb-4 input input-bordered w-full max-w-xs" value={totalPrice} required />
        <button disabled={error} className='btn btn-outline btn-success mt-4' >Order Now</button>
      </form>
  </div> 
</div>
        </section>
    );
};

export default Orders;
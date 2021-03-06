import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';


import { useParams } from 'react-router-dom';
import Loading from '../Home/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L44PMLKWhP0CeKXwmx0fSJSDquXLy1lzeQvHWbEFHpfHMQcEe9VvNvdgh40ejcOHHvBFGClh6dEexiCJzTY5dys003llnM84W');

const Payment = () => {
    const{id} = useParams();
    const url = `https://immense-sierra-48732.herokuapp.com/order/${id}`;

const {data: order, isLoading } = useQuery(['order', id], ()=> fetch(url,{ method: 'GET',
        headers: {

            'content-type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    
    
    if(isLoading){
        return <Loading></Loading>
    }
    
    
    return (
        <div>
    
  <div class="card w-50  max-w-md bg-base-100 shadow-xl my-12">
  <div class="card-body">
  <p className='text-xl text-success font-bold'>Hello {order.user}</p>
    <h2 class="card-title"> Please Pay for {order.productName}</h2>
    
    <p>Please pay : ${order.totalAmount}</p>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div class="card-body">

      <Elements stripe={stripePromise}>
    <CheckoutForm order={order} />
  </Elements>
       
        
       
      </div>
    
 
</div>
        </div>
    );
};

export default Payment;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth);
    useEffect(()=>{

        if(user){
            fetch(`https://immense-sierra-48732.herokuapp.com/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data => setOrders(data));
        }

    },[user])
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>My orders</h2><div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product-Name</th>
        <th>Quantity</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Payment</th>
    

      </tr>
    </thead>
    <tbody>
        {
            orders.map( (a,index)=><tr>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>{a.productName}</td>
                <td>{a.orderQuantity}</td>
                
                <td>{a.address}</td>
                <td>{a.phone}</td>
                <td>{(a.totalAmount && !a.paid)&& <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Payment</button></Link>}</td>
                <td>{(a.totalAmount && a.paid)&& <span className='text-success'>paid</span>}</td>
              </tr> )
        }
      {/* <!-- row 1 --> */}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;
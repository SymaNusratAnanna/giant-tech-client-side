import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth);
    useEffect(()=>{

        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data => setOrders(data));
        }

    },[user])
    return (
        <div>
            <h2>My orders: {orders.length}</h2><div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product-Name</th>
        <th>Quantity</th>
        <th>Total-Amount</th>
        <th>Address</th>
        <th>Phone</th>
    

      </tr>
    </thead>
    <tbody>
        {
            orders.map( (a,index)=><tr>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>{a.productName}</td>
                <td>{a.orderQuantity}</td>
                <td>{a.totalAmount}</td>
                <td>{a.address}</td>
                <td>{a.phone}</td>
                
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
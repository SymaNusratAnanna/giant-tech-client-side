import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () =>{

        fetch(`https://immense-sierra-48732.herokuapp.com/user/admin/${email}`,{
            method: 'PUT'
        })

        .then(res=> res.json())
        .then(data=>{
            refetch();
            toast.success(`Successfully made an Admin`);
        })

    }
    return (
        
             <tr>
             <th>1</th>
        <td>{email}</td>
        <td>{role  !== 'admin' &&<button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}</td>
        <td><button class="btn btn-xs">Remove user</button></td>
        
      </tr>
            
        
    );
};

export default UserRow;
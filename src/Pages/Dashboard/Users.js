import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users',()=> fetch('https://immense-sierra-48732.herokuapp.com/user').then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    
    
    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>All Users</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
       <th>1</th>
        <th>Name</th>
        <th>Role</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
    
     {
         users.map((user)=><UserRow key={user._id}
         user={user}
         refetch={refetch}></UserRow>)
     }
     
    </tbody>
  </table>
</div>
</div>
    );
};

export default Users;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col ">
      <h2 className='text-5xl font-bold text-center text-primary'> Welcome to Dashboard</h2>
      <Outlet></Outlet>
    {/* page content here */}
  
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
    {/* side contenet here */}
      { user &&  !admin && <><li><Link to="/dashboard">My Orders</Link></li>
      <li><Link to="/dashboard/addreview">Add a Review</Link></li>

      </>}
      <li><Link to="/dashboard/myprofile">My Profile</Link></li> 

      { admin && <>
                        <li><Link to="/dashboard/users">Make Admin</Link></li>
                        {/* <li><Link to="/dashboard/addreview">Add a Review</Link></li> */}
                       <li> <Link to ="/addtool">Add Product</Link></li>
                  
                       
         <li><Link to ="/managetools">Manage product</Link></li>
                    </>}
                 
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
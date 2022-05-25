import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
      <h2 className='text-5xl font-bold'> Welcom to Dashboard</h2>
      <Outlet></Outlet>
    {/* page content here */}
  
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    {/* side contenet here */}
      <li><Link to="/dashboard">Sidebar Item 1</Link></li>
      <li><Link to="/dashboard/addreview">Sidebar Item 1</Link></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
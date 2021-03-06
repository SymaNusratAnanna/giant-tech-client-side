import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logout =() =>{
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

    const menuItems = <div>
      <li><Link to =""><img height={30} src={logo} alt="" />
        </Link></li>
     <li><Link to ="/">Home</Link></li>
        
        <li><Link to ="/blogs">Blogs</Link></li>
        <li><Link to ="/tools">Tools</Link></li>
      
       
        <li><Link to ="/myportfolio">MyPortfolio</Link></li>
       
    </div>
    
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Giant Tech</a>
    <Link to =""><img height={30} src={logo} alt="" />
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">

    <li></li>
    
    <li><Link to ="/">Home</Link></li>
        
        <li><Link to ="/blogs">Blogs</Link></li>
        <li><Link to ="/tools">Tools</Link></li>
        
       
        <li><Link to ="/myportfolio">MyPortfolio</Link></li>
        <li>
      {
        user&& <>
        
         <Link to ="/dashboard">Dashboard</Link>
        
         
        </>

      }
    </li>
        
    </ul>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal p-0">
   
  <li>{user ? <button class="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to ="/login">Login</Link>}</li>
  </ul>
  <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"></label>
  </div>
</div> 
        </div>
    );
};

export default Navbar;
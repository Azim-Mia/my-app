import React from 'react';
import { NavLink } from "react-router-dom";
import './navigation.css'
function Navber(){
  return <div>
  <h1>Page Routing</h1>
  <nav >
  <NavLink to="/home" className="nav-link">home</NavLink>
   <NavLink to="/blogs" className="nav-link">blogs</NavLink>
 <NavLink to="/profile" className="nav-link">profile</NavLink>
</nav>
  </div>
}
export default Navber;
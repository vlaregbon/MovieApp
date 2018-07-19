import React from "react";

import { NavLink } from "react-router-dom";



const Navbar = () => (

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

   <NavLink className="navbar-brand" to="/">Life Works</NavLink>


   <div className="collapse navbar-collapse" id="navbarNav">

     <ul className="navbar-nav">

       <li className="nav-item">

         <NavLink className="nav-link" to="/">Home </NavLink>

       </li>

       <li className="nav-item">

         <NavLink className="nav-link" to="/saved">Actor</NavLink>

       </li>
       <li className="nav-item">

         <NavLink className="nav-link" to="/saved">Actress</NavLink>

       </li>
       <li className="nav-item">

         <NavLink className="nav-link" to="/saved">MovieDB</NavLink>

       </li>
       <li className="nav-item">

         <NavLink className="nav-link" to="/saved">Director</NavLink>

       </li>
       <li className="nav-item">

         <NavLink className="nav-link" to="/saved">Movie Search</NavLink>

       </li>

     </ul>

   </div>

 </nav>

)



export default Navbar;
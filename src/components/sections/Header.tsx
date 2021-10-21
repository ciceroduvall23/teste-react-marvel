import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import Navbar from '../pages/Navbar'
import Dashboard  from '../pages/Dashboard';

import Button from '../UI/Button';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';



function Header(){
  return(
    <nav className="navbar-is-spaced-has-shadow">
         <div className="gradient"></div>
    </nav>
   
  );
  }


export default Header;

/* className="buttons"       <div className="menu-Navbar">
       <Navbar  />
         </div>*/
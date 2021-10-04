import React from 'react';
import About from '../About/About';
import Home from '../Home/Home';
import Services from '../Services/Services';
import './Header.css';

const Header = () => {
   return (
      <div className="d-flex ms-3">

         <About></About>
         <Services></Services>
         <Home></Home>
      </div>
   );
};

export default Header;
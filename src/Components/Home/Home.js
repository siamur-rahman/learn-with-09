import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

import './Home.css';

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Services></Services>
         <Footer></Footer>

      </div>
   );
};

export default Home;
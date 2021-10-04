import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import './Services.css';

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {

      fetch('services.json')
         .then((res) => res.json())
         .then((data) => setServices(data.slice(0, 4)))
   }, []);
   console.log(services.slice(0, 4));

   return (
      <div className="service-container">
         <h1><b>Our Courses</b></h1>
         <div className="services">
            <div className="row">
               {services.map(service => <div

                  key={service.id}

                  className="col-md-6">
                  <div className="cart d-flex justify-content-center align-items-center flex-row w-100 ">
                     <div>
                        <div className="w-100">
                           <img className="mb-4" src={service.picture} alt="" />
                        </div>
                        <div className="w-100 ">
                           <div className="w-100">
                              <h3>{service.name}</h3>
                              <p>Price: $ {service.price}</p>
                              <button className="btn btn-success">Details</button>
                           </div>
                        </div>
                     </div>

                  </div>

               </div>)}
            </div>
         </div>
      </div>

   );
};

export default Services;
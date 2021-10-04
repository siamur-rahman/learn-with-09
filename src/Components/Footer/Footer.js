import React from "react";
import "./Footer.css";


const Footer = () => {
   return (
      <div>
         <div className="footer-container">
            <div className="container">
               <div className="row">
                  <div className="col-md-5">
                     <div className="left-container text-start">
                        <h1>Learn with <span className="name">LEARN BD</span></h1>
                        <p className="mt-4 ">
                           <small>
                              *These statements have not been evaluated by the Food and
                              Drug Administration. These products are not intended to
                              diagnose.
                           </small>
                        </p>
                        <p className="mt-5">
                           <small>LEARN BD © . All rights reserved.</small>
                        </p>
                     </div>
                  </div>

                  <div className="col-md-5">
                     <div className="right-footer-container">
                        <h3>Sign up for the newsletter</h3>
                        <input
                           className="footer-input"
                           type="text"
                           placeholder="Enter Email"
                        />
                        <div className="phone d-flex align-items-center justify-content-center mt-4">
                           <div>
                              <h5>+008 15 80 05 55 95</h5>
                           </div>
                        </div>
                        <div className="map d-flex align-items-center justify-content-center">
                           <div>
                              <p>
                                 160 Broadway, New York, NY 10038,
                                 <br /> 102 1st Avenue, New York, NY 100
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;

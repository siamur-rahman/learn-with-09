import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Header.css";

const Header = () => {
   return (
      <div className="header-container ">
         <div>
            <div className="row d-flex header align-items-center justify-content-center">
               <div className="fixed"> <MenuBar></MenuBar></div>
               <div className="col-md-8">
                  <h1 className="title">
                     Learn With <br /> <span className="name">LEARN BD</span>
                  </h1>
                  <p className="text-white text-center mt-3 px-4">
                     Our free learn BD for Campus Student plan helps you build skills to add to your resume with unlimited Guided Projects and 1 free course per year
                  </p>

               </div>
               <div className="col-md-6"></div>
            </div>
         </div>
      </div>
   );
};

export default Header;

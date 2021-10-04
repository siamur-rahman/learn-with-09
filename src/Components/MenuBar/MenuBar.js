
import { Link } from "react-router-dom";
import "./MenuBar.css";




const MenuBar = () => {

   return (
      <div className="MenuBar-container">
         <div className="container">
            <div className="row">
               <div className="col-md-2">
                  <div className="logo-img">
                     <img className="w-75" src="" alt="" />
                  </div>
               </div>
               <div className="col-md-10">
                  <div className="menu-container ">
                     <ul className="d-flex align-items-start justify-content-start">
                        <Link to="/home" className="items">
                           <li>Home</li>
                        </Link>
                        <Link to="/services" className="items">
                           <li>Services</li>
                        </Link>
                        <Link to="/students" className="items">
                           <li>For Students</li>
                        </Link>
                        <Link to="aboutUs" className="items">
                           <li>About us</li>
                        </Link>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MenuBar;

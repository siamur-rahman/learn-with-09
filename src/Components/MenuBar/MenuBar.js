
import "./MenuBar.css";

// import { Link as a } from "react-router-dom";


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
                     <ul className="d-flex align-items-end justify-content-end">
                        <a href="/home" className="items">
                           <li>Home</li>
                        </a>
                        <a href="/sports" className="items">
                           <li>Services</li>
                        </a>
                        <a href="/about" className="items">
                           <li>For Students</li>
                        </a>
                        <a href="contact" className="items">
                           <li>About us</li>
                        </a>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MenuBar;

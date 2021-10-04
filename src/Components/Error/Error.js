import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Error.css';

const Error = () => {
   return (
      <div className=" error">
         <div className=" ">
            <MenuBar></MenuBar>
            <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
         </div>
      </div>
   );
};

export default Error;
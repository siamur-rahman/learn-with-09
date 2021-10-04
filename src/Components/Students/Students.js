import React from 'react';

import Header from '../Header/Header';
import './Students.css';

const Students = () => {
   return (
      <div className="students">
         <Header></Header>
         <div className="  d-flex
                     justify-content-center  align-items-center flex-row ">
            <div className="p-5"><h1> University and college students,
               learn job-ready skills for free with learn bd for Campus</h1>
               <p><small>Our free Coursera for Campus Student plan helps you build skills to add to your resume with unlimited Guided Projects and 1 free course per year</small></p>

               <p>Enter your school email to get started.</p>
               <input type="text" />
               <button className="btn btn-primary">Start</button>

               <p className="mt-5"><b>Ensure the address is correct before submitting. You will be required to verify your address before joining the program.</b></p>
            </div>
            <div>
               <img className="img" src="https://www.dreamstudiesabroad.com/images/articles/study-europe.jpg" alt="" />
            </div>
         </div>


      </div>
   );
};

export default Students;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Complains() {
  const navigate = useNavigate(); // Hook to navigate

  const handleFormNavigation = () => {
    navigate('/form'); // Navigate to the form page
  };

  const handleAdminNavigation = () => {
    navigate('/form'); // Navigate to the form page
  };

  return (
    <div>
      <div className="gap-10">
        <ul className="text-3xl ml-10 gap-10 font-semibold text-black flex justify-center bg-[#edede9] p-3 mr-4">
          <h1 className="text-4xl font-bold ml-">Customer Comments</h1>
          <button onClick={handleAdminNavigation} className="hover:underline cursor-pointer">Admins</button>
          <NavLink to="/">
            <li className="hover:underline cursor-pointer">Users</li>
          </NavLink>
    
        </ul>
        <div className="bg-[#b0c4b1] gap-10 p-10 w-screen h-[500px] flex justify-center">
          <div>
            <h1 className="text-3xl text-center mt-20">
              To write about your Complaints, Click the button below
            </h1>
            <button
              onClick={handleFormNavigation}
              className="border border-orange-400 p-2 bg-white mt-6 ml-32"
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complains;

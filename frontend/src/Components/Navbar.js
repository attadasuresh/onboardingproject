import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-700 p-4 rounded-lg mb-8">
        <div className="flex justify-between items-center">
          {/* Left Side Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/EmployeeProfile" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                Employee Register
              </Link>
            </li>
            <li>
              <Link to="/Policies" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                Policies & Benefits
              </Link>
            </li>
            <li>
              <Link to="/Training" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                Training
              </Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="flex space-x-4">
            <Link to="/Employeelogin" className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded shadow-md">
              Employee Login
            </Link>
            <Link to="/Hrlogin" className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded shadow-md">
              HR Login
            </Link>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Cloud Notes</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-white hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/home" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/editor" className="text-white hover:underline">
              Create Note
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

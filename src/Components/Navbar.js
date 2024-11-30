import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <h2 className="text-center text-2xl font-bold my-4">Cloud Notes</h2>
      <nav className="flex flex-col space-y-4 px-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white p-3 rounded shadow"
              : "hover:bg-blue-400 hover:text-white p-3 rounded"
          }
        >
          All Notes
        </NavLink>
        <NavLink
          to="/editor"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white p-3 rounded shadow"
              : "hover:bg-blue-400 hover:text-white p-3 rounded"
          }
        >
          New Note
        </NavLink>
        <NavLink
          to="/new-folder"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white p-3 rounded shadow"
              : "hover:bg-blue-400 hover:text-white p-3 rounded"
          }
        >
          New Folder
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-screen w-64 bg-blue-900 text-white flex flex-col">
      <h1 className="text-center text-2xl font-bold my-4">Cloud Notes</h1>
      <nav className="flex flex-col space-y-4 px-4">
        {/* All Notes */}
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-700 text-white p-3 rounded shadow"
              : "hover:bg-blue-600 hover:text-white p-3 rounded"
          }
        >
          All Notes
        </NavLink>

        {/* New Note */}
        <NavLink
          to="/editor"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-700 text-white p-3 rounded shadow"
              : "hover:bg-blue-600 hover:text-white p-3 rounded"
          }
        >
          New Note
        </NavLink>

        {/* New Folder */}
        <NavLink
          to="/new-folder"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-700 text-white p-3 rounded shadow"
              : "hover:bg-blue-600 hover:text-white p-3 rounded"
          }
        >
          New Folder
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

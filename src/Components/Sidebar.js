import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaEdit, FaBars, FaFolder } from "react-icons/fa"; // Add icons for better visuals

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
      style={{
        height: "100vh",
        width: isExpanded ? "200px" : "60px",
        transition: "width 0.3s ease",
        backgroundColor: "#003366",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <FaBars />
      </button>

      {/* Navigation Links */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: isExpanded ? "flex-start" : "center",
          padding: "10px",
        }}
      >
        <NavLink
          to="/home"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <FaHome />
          {isExpanded && <span>Home</span>}
        </NavLink>

        <NavLink
          to="/editor"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <FaEdit />
          {isExpanded && <span>Edit Note</span>}
        </NavLink>

        <NavLink
          to="/new-folder"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          <FaFolder />
          {isExpanded && <span>New Folder</span>}
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;

import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { Outlet, useLocation } from "react-router-dom"; // Outlet renders child routes, useLocation tracks the current route

function MainLayout() {
  const location = useLocation();

  // Hide the Navbar on the Login Page
  const hideNavbar = location.pathname === "/login";

  return (
    <div className="app-container">
      {!hideNavbar && <Navbar />} {/* Only show Navbar if not on login */}
      <div className={`content ${hideNavbar ? "login-page" : ""}`}>
        <Outlet /> {/* Render child routes here */}
      </div>
    </div>
  );
}

export default MainLayout;

import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar on the side */}
      <div style={{ marginLeft: "60px", flexGrow: 1, padding: "20px" }}>
        <Outlet /> {/* Render child routes */}
      </div>
    </div>
  );
}

export default MainLayout;

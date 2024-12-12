import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout({ notes, setNotes, subjects }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = (noteTitle, subject) => {
    const newNote = { id: Date.now(), title: noteTitle, subject };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Sidebar */}
      {!isLoginPage && <Sidebar totalNotes={notes.length} />}

      {/* Content Area */}
      <div
        style={{
          marginLeft: "250px", // Space for the sidebar
          flexGrow: 1,
          position: "relative",
          padding: "20px",
        }}
      >
        {/* "+ New" Button */}
        {!isLoginPage && (
          <button
            style={{
              position: "fixed", // Fixed position
              top: "20px", // 20px from the top of the viewport
              right: "20px", // 20px from the right of the viewport
              backgroundColor: "#0059b3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              zIndex: 1000, // Ensure it stays above other elements
            }}
            onClick={() => setIsModalOpen(true)}
          >
            + New
          </button>
        )}

        {/* Modal */}
        <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  subjects={subjects} // Pass the subjects array
  onAddNote={handleAddNote}
/>


        {/* Render Page Content */}
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

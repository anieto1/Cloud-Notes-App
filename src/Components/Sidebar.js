import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaSearch } from "react-icons/fa";

function Sidebar({ totalNotes }) {
  const [subjects, setSubjects] = useState([]); // List of subjects
  const [newSubject, setNewSubject] = useState(""); // Temporary state for new subject input

  const handleAddSubject = () => {
    if (newSubject.trim() !== "") {
      setSubjects([...subjects, newSubject.trim()]); // Add new subject
      setNewSubject(""); // Clear the input
    }
  };

  return (
    <div
      className="sidebar"
      style={{
        height: "100vh",
        width: "250px", // Permanently expanded width
        backgroundColor: "#003366",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        padding: "10px",
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0059b3",
          borderRadius: "5px",
          padding: "5px",
          marginBottom: "20px",
        }}
      >
        <FaSearch style={{ marginRight: "10px" }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            color: "white",
            flexGrow: 1,
          }}
        />
      </div>

      {/* All Notes Button */}
      <NavLink
        to="/home"
        style={{
          color: "white",
          textDecoration: "none",
          margin: "10px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Push counter to the right
          padding: "10px",
          borderRadius: "5px",
        }}
        className={({ isActive }) =>
          isActive ? "active-link" : "inactive-link"
        }
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaHome />
          <span>All Notes</span>
        </div>
        <span
          style={{
            backgroundColor: "#0059b3",
            color: "#fff",
            borderRadius: "12px",
            padding: "5px 10px",
            fontSize: "14px",
          }}
        >
          {totalNotes || 0}
        </span>
      </NavLink>

      {/* Subjects Section */}
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 10px",
          }}
        >
          <FaPlus
            onClick={handleAddSubject}
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Add Subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#0059b3",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              flexGrow: 1,
            }}
          />
        </div>

        {/* List of Subjects */}
        <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
          {subjects.map((subject, index) => (
            <NavLink
              to={`/subjects/${subject}`}
              key={index}
              style={{
                color: "white",
                textDecoration: "none",
                margin: "5px 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              <span>{subject}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NoteEditor({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id));

  const [content, setContent] = useState(note?.content || "");
  const [activeTool, setActiveTool] = useState("typing");

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // Initialize canvas on mount
  useEffect(() => {
    if (canvasRef.current) {
      console.log("Canvas reference found:", canvasRef.current);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);
        ctx.lineCap = "round";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        contextRef.current = ctx;
        console.log("Canvas initialized successfully.");
      } else {
        console.error("Failed to initialize canvas context.");
      }
    } else {
      console.error("Canvas reference is null at initialization.");
    }
  }, []); // Run only once when component mounts

  // Tool selection
  const handleToolChange = (tool) => {
    if (!contextRef.current) {
      console.error("Canvas context is not initialized.");
      return;
    }

    setActiveTool(tool);

    if (tool === "highlighting") {
      contextRef.current.strokeStyle = "rgba(255, 255, 0, 0.3)";
      contextRef.current.lineWidth = 20;
    } else if (tool === "handwriting") {
      contextRef.current.strokeStyle = "black";
      contextRef.current.lineWidth = 2;
    }
  };

  // Mouse handlers for drawing
  const handleMouseDown = (e) => {
    if (activeTool === "handwriting" || activeTool === "highlighting") {
      const ctx = contextRef.current;
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
  };

  const handleMouseMove = (e) => {
    if ((activeTool === "handwriting" || activeTool === "highlighting") && e.buttons === 1) {
      const ctx = contextRef.current;
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const handleMouseUp = () => {
    if (activeTool === "handwriting" || activeTool === "highlighting") {
      const ctx = contextRef.current;
      ctx.closePath();
    }
  };

  if (!note) return <p>Note not found!</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#ccc",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      {/* Toolbar */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          display: "flex",
          gap: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          padding: "10px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => handleToolChange("handwriting")}
          style={{
            backgroundColor: activeTool === "handwriting" ? "#0073e6" : "#ccc",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Handwriting
        </button>
        <button
          onClick={() => handleToolChange("highlighting")}
          style={{
            backgroundColor: activeTool === "highlighting" ? "#0073e6" : "#ccc",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Highlight
        </button>
        <button
          onClick={() => handleToolChange("typing")}
          style={{
            backgroundColor: activeTool === "typing" ? "#0073e6" : "#ccc",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Typing
        </button>
      </div>

      {/* Note Canvas */}
      <div
        style={{
          width: "8.5in",
          height: "11in",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            cursor: activeTool === "highlighting" ? "crosshair" : "default",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
}

export default NoteEditor;

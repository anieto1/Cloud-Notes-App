import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from 'react-dom/client'
import App from "./App";
import { NotesProvider } from "./context/NotesContext";

// Create a root and render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


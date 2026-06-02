import { useState } from "react";
import "./DarkModeToggle.css";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;

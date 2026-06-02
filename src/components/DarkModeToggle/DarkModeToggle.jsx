import { useState } from "react";
import "./DarkModeToggle.css";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      id="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
      className={darkMode ? "dark" : "light"}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;

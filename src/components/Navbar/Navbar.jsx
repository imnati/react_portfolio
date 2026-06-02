import "./Navbar.css";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          Natnael <span>Akalewold</span>
        </h1>
      </div>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;

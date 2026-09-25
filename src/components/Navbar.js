import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/Fitness club.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("user");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("subscription");
    setOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Left: Logo + Brand + Toggle */}
      <div className="navbar-left">
        <div className="brand">
          <img src={Logo} alt="Fitness Club Logo" className="logo" />
          <span className="brand-name">Fitness Club</span>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Center: Main Links */}
      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
        <Link to="/exercise" onClick={toggleMenu}>Exercise</Link>
        {isAuthenticated && (
          <>
            <Link to="/diet-plans" onClick={toggleMenu}>Diet Plans</Link>
            <Link to="/subscription" onClick={toggleMenu}>Join Us</Link>
          </>
        )}
      </div>

      {/* Right: Contact + Logout/Login */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <Link to="/contact-us" className="contact-link" onClick={toggleMenu}>
          Contact Us
        </Link>
        {isAuthenticated ? (
          <button className="auth-btn" onClick={handleClickOpen}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="auth-btn login-btn" onClick={toggleMenu}>
            Login
          </Link>
        )}
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to log out?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout} color="secondary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;

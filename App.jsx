import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <a href = "/">
          <img
            src="https://imgur.com/vtXOIv7.png"
            alt="Logo da Valt"
            style={{
              width: '80px',
              height: '80px',
              marginRight: '10px',
              marginLeft: '-20px',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          />
          </a>
          <img
            src="https://imgur.com/1lBFTf6.png"
            alt="Logo da Valt"
            style={{
              width: '50px',
              height: '50px',
              marginRight: '10px',
              marginLeft: '-40px',
              marginBottom: '-10px',
            }}
          />
          <div style={{ marginLeft: 'auto' }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#e5d8c3' : 'white',
                marginRight: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? '#e5d8c3' : 'white',
                marginRight: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
              })}
            >
              About
              </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? '#e5d8c3' : 'white',
                marginRight: '10px',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '30px',
              })}
            >
                ✰
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.jsx" 
import Navbar from "./components/Home/Navbar.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contactus/Contact.jsx";
import Team from "./components/Team/Team.jsx";

function App() {
  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Feature from "./components/Feature.jsx";
import { CardOne } from "./components/CardOne.jsx";
import { FooterOne } from "./components/FooterOne.jsx";
import SlickImages from "./components/SlickImages.jsx";
import AboutSection from "./components/AboutSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <SlickImages />
      <AboutSection />
      <Feature />
      <CardOne />
      <FooterOne />
    </div>
  );
}

export default App;

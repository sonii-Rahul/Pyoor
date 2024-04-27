import React from 'react'
import Navbar from "./Navbar.jsx";
import Feature from "./Feature.jsx";
import { CardOne } from "./CardOne.jsx";
import { FooterOne } from "./FooterOne.jsx";
import SlickImages from "./SlickImages.jsx";
import AboutSection from "./AboutSection.jsx";
import { CtaThree } from "./CtaThree.jsx";

function Home() {
  return (
    
    <>
    <Navbar />
     <CtaThree/>
      <AboutSection />
      <Feature />
      <CardOne />
      <FooterOne /> 
    </>
  )
}

export default Home
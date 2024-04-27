import React from 'react'
import Navbar from '../Home/Navbar'
import Slickimages from "../Home/SlickImages.jsx"
import { HeroTwo } from './HeroTwo.jsx'
import OurMission from './OurMission.jsx'
import OurStory from './OurStory.jsx'
import {FooterOne} from "../Home/FooterOne.jsx"
import Slick from './Slick.jsx'

function About() {
  return (
   <>
   <Navbar/>
  <Slick/>
   <OurMission/>
   <OurStory/>

   <HeroTwo/>
   <FooterOne/>

  
   </>
  )
}

export default About
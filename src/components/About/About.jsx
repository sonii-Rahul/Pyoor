import React from 'react'
import Navbar from '../Home/Navbar'
import Slickimages from "../Home/SlickImages.jsx"
import { HeroTwo } from './HeroTwo.jsx'
import OurMission from './OurMission.jsx'
import OurStory from './OurStory.jsx'

function About() {
  return (
   <>
   <Navbar/>
   <Slickimages/>
   <OurMission/>
   <OurStory/>

   <HeroTwo/>
   </>
  )
}

export default About
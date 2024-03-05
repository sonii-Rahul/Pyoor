import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import SectionOne from './components/SectionOne.jsx'
import Feature from './components/Feature.jsx'
import { CardOne } from './components/CardOne.jsx'
import { FooterOne } from './components/FooterOne.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='scroll-smooth'>
    <Navbar/>
    <SectionOne/>
    <Feature/>
    <CardOne/>
    <FooterOne/>
 
    
  

    
    </div>
  )
}

export default App

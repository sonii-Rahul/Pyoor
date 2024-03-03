import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import SectionOne from './components/SectionOne.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <SectionOne/>
 
    
  

    
    </>
  )
}

export default App

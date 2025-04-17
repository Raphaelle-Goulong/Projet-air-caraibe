import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header';
import Hero from '../src/components/Header/Hero/Hero';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero />
    </>
  )
}

export default App

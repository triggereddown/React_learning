import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{background: "grey", color:"White"}}>
        Constant top bar
      </div>
    <BrowserRouter>
    <Routes>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route path = "/" element = {<Landing/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App

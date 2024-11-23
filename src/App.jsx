import { useState } from 'react'
import './App.css'
import { BrowserRouter, redirect, Route, Routes, useHref, useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      {/* OLD WAY OF WINDOWS UPDATE */}
      {/* <div >
        <button onClick={()=>{
          window.location.href="/";
        }}>Landing Page</button>
         <button onClick={()=>{
    window.location.href="/dashboard";     
        }}> Dshboard</button>
      </div> */}
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route path = "/" element = {<Landing/>}/>
    </Routes>

    </BrowserRouter>
    </div>
  )
}


function Appbar(){
  const navigate=useNavigate();

  return (
    <div>
      {/* This method removes not required reload on eevery button click */}
      <div>
        <button onClick={()=>{ 
          navigate("/");
        }}>
          Landiing Page
        </button>

        <button onClick={ () =>{
          navigate("/dashboard");
        }}>
          Dashboard Page
        </button>
      </div>
    </div>
  )
}




export default App

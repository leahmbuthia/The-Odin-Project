import { useState,useEffect } from 'react'
import './App.css'

function App() {
const [data, setData]= useState(null);

useEffect(() =>{
  fetch ="https://api.github.com/users/moonhighway";
} )

  return (
    <>
    <h1>Hello World World </h1>
    </>
  )
}

export default App

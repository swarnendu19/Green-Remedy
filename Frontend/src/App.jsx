import { lazy } from 'react'
import './App.css'

// Importing the pages

const Tusli = lazy(()=> import("./pages/Tulsi"))

function App() {
 
  return (
    <>
       <div>
         <Tusli/>
       </div>
    </>
  )
}

export default App

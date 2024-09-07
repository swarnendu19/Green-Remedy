import { lazy } from 'react'
import './App.css'


// Importing the pages

const Tusli = lazy(()=> import("./pages/Tulsi"))
const Home =lazy(()=> import("./pages/home"))
function App() {
 
  return (
    <>
       <div>
        
         <Home/>
       </div>
    </>
  )
}

export default App

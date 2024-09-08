import { lazy } from 'react'
import './App.css'
import ThreeJs from './pages/ThreeJs'
const Tulsi = lazy(() => import("./pages/Tulsi"))
 
function App() {

  return (
    <>
      <div>
        {/* <Tulsi /> */}
        {/* <Home />
        <About/> */}
        <ThreeJs/>
      </div>
    </>
  )
}

export default App

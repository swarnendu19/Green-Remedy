import { lazy } from 'react'
import './App.css'
const Tulsi = lazy(() => import("./pages/Tulsi"))
 
function App() {

  return (
    <>
      <div>
        <Tulsi />
        {/* <Home />
        <About/> */}
        {/* <ThreeJs/> */}
      </div>
    </>
  )
}

export default App

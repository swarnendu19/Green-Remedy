import { lazy } from 'react'
import './App.css'
import About from './components/About'
const Tulsi = lazy(() => import("./pages/Tulsi"))
const Home = lazy(() => import("./pages/Home"))

import ThreeJs from './pages/ThreeJs'

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

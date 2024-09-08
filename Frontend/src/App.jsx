import { lazy } from 'react'
import './App.css'


const Home = lazy(() => import("./pages/home"))

function App() {

  return (
    <>
      <div>
        {/* <Tulsi /> */}
        <Home />
      </div>
    </>
  )
}

export default App

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingAni from './components/LoadingAni'; 
import Login from './components/Login';

const Home = lazy(() => import('./pages/Home'));
const Tulsi = lazy(() => import('./pages/Tulsi'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingAni />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tulsi" element={<Tulsi />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


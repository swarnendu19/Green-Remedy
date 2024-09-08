import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Tulsi = lazy(() => import('./pages/Tulsi'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/tulsi" element={<Tulsi />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

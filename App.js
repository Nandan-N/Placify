import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
// Import the Home component
import Homejobs from './HomeJobs'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render the Home component on the root path */}
        <Route path="/jobs" element = {<Homejobs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

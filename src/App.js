import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';



const App = () => {
  return (
          <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
  );
}

export default App;
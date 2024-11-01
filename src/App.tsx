// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Add other routes here as needed */}
      </Routes>

    </Router>
  );
}

export default App;

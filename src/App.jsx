import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Subscription from './pages/Subscription';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Navbar overlaying content on Home page, relative on others */}
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

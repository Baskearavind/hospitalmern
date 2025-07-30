import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import About from './components/About';
import Home from './pages/Home';
import Services from './components/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile';
import AppointmentBooking from './pages/AppointmentBooking';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="min-h-screen p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<PatientProfile />} />
            <Route path="/appointments" element={<AppointmentBooking />} />
          </Routes>
        </main>
        <Slideshow/>
        <About/>
        <Services/>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

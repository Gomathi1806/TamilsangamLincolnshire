import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TamilSchool from './pages/TamilSchool';
import Saivaperavai from './pages/Saivaperavai';
import GalleryPage from './pages/GalleryPage';
import Finance from './pages/Finance';
import AboutUs from './pages/AboutUs';
import { 
  Calendar, 
  TermDates, 
  PastPapers, 
  SchoolGallery, 
  PoojaCalendar, 
  MandramGallery 
} from './pages/NewSections';
import Admin from './pages/Admin';
import Team from './pages/Team';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

// Helper component to handle scrolling to #hash links
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function AppContent() {
  useScrollReveal();

  return (
    <div className="App">
      <ScrollToHash />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tamil-school" element={<TamilSchool />} />
        <Route path="/school/term-dates" element={<TermDates />} />
        <Route path="/school/past-papers" element={<PastPapers />} />
        <Route path="/school/gallery" element={<SchoolGallery />} />
        <Route path="/saivaperavai" element={<Saivaperavai />} />
        <Route path="/mandram/pooja-calendar" element={<PoojaCalendar />} />
        <Route path="/mandram/gallery" element={<MandramGallery />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer style={{ backgroundColor: 'var(--text-primary)', color: 'white', padding: '80px 0 30px' }}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Tamil Sangam Lincolnshire</h3>
              <p style={{ opacity: 0.7, marginTop: '20px' }}>Celebrating and preserving Tamil traditions throughout Lincolnshire.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.7 }}>
                <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link to="/tamil-school" style={{ color: 'inherit', textDecoration: 'none' }}>Tamil School</Link></li>
                <li><Link to="/saivaperavai" style={{ color: 'inherit', textDecoration: 'none' }}>Saiva Mandram</Link></li>
                <li><Link to="/calendar" style={{ color: 'inherit', textDecoration: 'none' }}>Calendar</Link></li>
                <li><Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></li>
                <li><Link to="/admin" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.5 }}>Admin Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <a href="https://www.facebook.com/people/Tamil-Sangam-Lincolnshire/61555333632487/" style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}>FB</a>
                <a href="mailto:Tamilassociationlincolnshire@gmail.com" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.9rem' }}>Tamilassociationlincolnshire@gmail.com</a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Community</h4>
              <p style={{ opacity: 0.7 }}>Proudly serving Lincolnshire.</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
            &copy; 2026 Tamil Sangam Lincolnshire. All rights reserved. Registered Charity. Powered by newzie.tech@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

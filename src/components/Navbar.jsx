import React, { useState, useEffect } from 'react';
import logo from '../assets/logo_raw.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed-top ${isScrolled ? 'glass-nav' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '10px 0' : '20px 0',
      transition: 'var(--transition)',
      backgroundColor: isScrolled ? 'var(--glass)' : 'transparent',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: isScrolled ? '50px' : '65px',
            height: isScrolled ? '50px' : '65px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: 'white',
            border: `2px solid var(--secondary)`,
            transition: 'var(--transition)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={logo} 
              alt="Grantham Tamil Sangam" 
              style={{ width: '120%', height: '120%', objectFit: 'cover' }} 
            />
          </div>
          <div>
            <h1 style={{ 
              fontSize: isScrolled ? '1.1rem' : '1.3rem', 
              color: isScrolled ? 'var(--primary)' : 'white', 
              transition: 'var(--transition)' 
            }}>Tamil Sangam Lincolnshire</h1>
            <p className="tamil-font" style={{ 
              fontSize: isScrolled ? '0.75rem' : '0.85rem', 
              color: isScrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)',
              transition: 'var(--transition)'
            }}>கிரந்தம் தமிழ்ச் சங்கம்</p>
          </div>
        </div>
        
        <ul style={{ 
          display: 'flex', 
          gap: '25px', 
          fontWeight: '700',
          color: '#ff8c00' /* Vibrant Orange for visibility */
        }}>
          <li><a href="#home" className="text-shadow menu-item">Home</a></li>
          <li><a href="#about" className="text-shadow menu-item">About</a></li>
          <li><a href="#classes" className="text-shadow menu-item">Classes</a></li>
          <li><a href="#gallery" className="text-shadow menu-item">Gallery</a></li>
          <li><a href="#contact" className="text-shadow menu-item">Contact</a></li>
        </ul>

        <button className={`btn ${isScrolled ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '8px 20px' }}>
          Enrol Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

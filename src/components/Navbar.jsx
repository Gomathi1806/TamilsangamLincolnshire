import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_raw.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isTamilSchool = location.pathname === '/tamil-school';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    padding: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
    listStyle: 'none',
    margin: 0,
    zIndex: 1001
  };

  const dropdownItemStyle = {
    color: 'var(--text-primary)',
    padding: '10px 20px',
    display: 'block',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'background-color 0.2s'
  };

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
      <div className="container nav-container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          <div style={{
            width: isScrolled ? '80px' : '120px',
            height: isScrolled ? '80px' : '120px',
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
              color: '#ff9800', /* Vibrant orange */
              transition: 'var(--transition)',
              margin: 0
            }}>Tamil Sangam Lincolnshire</h1>
            <p className="tamil-font" style={{ 
              fontSize: isScrolled ? '0.75rem' : '0.85rem', 
              color: isScrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)',
              transition: 'var(--transition)',
              margin: 0
            }}>தமிழ்ச்சங்கம் லிங்கோன்செயர்</p>
          </div>
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: isScrolled ? 'var(--primary)' : '#ff9800' }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} style={{ 
          color: isScrolled ? 'var(--primary)' : '#ff9800', /* Vibrant orange when not scrolled */
        }}>
          <li><Link to="/" className="text-shadow menu-item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="text-shadow menu-item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/team" className="text-shadow menu-item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link></li>
          
          {/* Tamil School Menu */}
          <li 
            onMouseEnter={() => setDropdownOpen('school')} 
            onMouseLeave={() => setDropdownOpen(false)} 
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <span className="text-shadow menu-item" style={{ display: 'inline-block', padding: '10px 0' }}>Tamil School ▾</span>
            {dropdownOpen === 'school' && (
              <ul style={dropdownStyle}>
                <li><Link to="/tamil-school" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>Overview</Link></li>
                <li><Link to="/tamil-school#term-dates" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>Term Dates</Link></li>
                <li><Link to="/tamil-school#past-papers" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>Past Exam Papers</Link></li>
                <li><Link to="/school/gallery" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>School Gallery</Link></li>
              </ul>
            )}
          </li>

          {/* Saiva Mandram Menu */}
          <li 
            onMouseEnter={() => setDropdownOpen('mandram')} 
            onMouseLeave={() => setDropdownOpen(false)} 
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <span className="text-shadow menu-item" style={{ display: 'inline-block', padding: '10px 0' }}>Saiva Mandram ▾</span>
            {dropdownOpen === 'mandram' && (
              <ul style={dropdownStyle}>
                <li><Link to="/saivaperavai" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>Overview</Link></li>
                <li><Link to="/mandram/pooja-calendar" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>Pooja Calendar</Link></li>
                <li><Link to="/mandram/gallery" style={dropdownItemStyle} onClick={() => setIsMobileMenuOpen(false)}>Mandram Gallery</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/calendar" className="text-shadow menu-item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Calendar</Link></li>
          <li><Link to="/gallery" className="text-shadow menu-item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
          
          <div className="enrol-btn-container">
            <Link 
              to="/tamil-school#registration" 
              className={`btn ${isScrolled ? 'btn-primary' : 'btn-secondary'}`} 
              style={{ padding: '8px 20px', textDecoration: 'none' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enrol Now
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

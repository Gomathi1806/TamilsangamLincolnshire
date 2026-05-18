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

  const handleDropdownToggle = (menuName) => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(dropdownOpen === menuName ? false : menuName);
    }
  };

  return (
    <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-brand-link">
          <div className={`nav-logo-container ${isScrolled ? 'scrolled' : ''}`}>
            <img 
              src={logo} 
              alt="Grantham Tamil Sangam" 
              className="nav-logo-img" 
            />
          </div>
          <div className="nav-brand-text">
            <h1 className={`nav-title ${isScrolled ? 'scrolled' : ''}`}>Tamil Sangam Lincolnshire</h1>
            <p className={`nav-subtitle tamil-font ${isScrolled ? 'scrolled' : ''}`}>தமிழ்ச்சங்கம் லிங்கோன்செயர்</p>
          </div>
        </Link>
        
        <button 
          className={`mobile-menu-btn ${isScrolled ? 'scrolled' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" className="text-shadow menu-item" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="text-shadow menu-item" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/team" className="text-shadow menu-item" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link></li>
          
          {/* Tamil School Menu */}
          <li 
            onMouseEnter={() => setDropdownOpen('school')} 
            onMouseLeave={() => setDropdownOpen(false)} 
            onClick={() => handleDropdownToggle('school')}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <span className="text-shadow menu-item" style={{ display: 'inline-block', padding: '10px 0' }}>Tamil School ▾</span>
            {dropdownOpen === 'school' && (
              <ul className="nav-dropdown">
                <li><Link to="/tamil-school" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link></li>
                <li><Link to="/tamil-school#term-dates" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Term Dates</Link></li>
                <li><Link to="/tamil-school#past-papers" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Past Exam Papers</Link></li>
                <li><Link to="/school/gallery" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>School Gallery</Link></li>
              </ul>
            )}
          </li>

          {/* Saiva Mandram Menu */}
          <li 
            onMouseEnter={() => setDropdownOpen('mandram')} 
            onMouseLeave={() => setDropdownOpen(false)} 
            onClick={() => handleDropdownToggle('mandram')}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <span className="text-shadow menu-item" style={{ display: 'inline-block', padding: '10px 0' }}>Saiva Mandram ▾</span>
            {dropdownOpen === 'mandram' && (
              <ul className="nav-dropdown">
                <li><Link to="/saivaperavai" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link></li>
                <li><Link to="/mandram/pooja-calendar" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Pooja Calendar</Link></li>
                <li><Link to="/mandram/gallery" className="nav-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Mandram Gallery</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/calendar" className="text-shadow menu-item" onClick={() => setIsMobileMenuOpen(false)}>Calendar</Link></li>
          <li><Link to="/gallery" className="text-shadow menu-item" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
          
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

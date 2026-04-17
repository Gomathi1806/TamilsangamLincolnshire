import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" style={{
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: 0,
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}>
        <img 
          src={heroImg} 
          alt="Tamil School" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(348, 83%, 35%, 0.8) 0%, rgba(0,0,0,0.4) 100%)'
        }}></div>
      </div>

      <div className="container animate-fade-in" style={{ color: 'white', zIndex: 1 }}>
        <h1 className="text-shadow" style={{ 
          fontSize: '4.5rem', 
          maxWidth: '800px', 
          marginBottom: '20px',
          textShadow: '2px 2px 15px rgba(0,0,0,0.5)'
        }}>
          Nurturing Tamil <br />
          <span style={{ color: 'var(--secondary)' }}>Culture & Heritage</span>
        </h1>
        <p className="tamil-font" style={{ 
          fontSize: '1.8rem', 
          maxWidth: '700px', 
          marginBottom: '40px',
          opacity: 1,
          fontWeight: '500',
          lineHeight: '1.4'
        }}>
          கிரந்தம் தமிழ்ச் சங்கத்தில் இணைந்து, தேடல், கற்றல் மற்றும் சமூகப் பயணத்தைத் தொடங்குங்கள்.
        </p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="btn btn-secondary" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>
            Enrol Now
          </button>
          <button className="btn" style={{ 
            backgroundColor: '#ff8c00', /* Highlighted Orange */
            color: 'white',
            border: '2px solid #ff8c00',
            padding: '15px 35px', 
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '0 0 20px rgba(255, 140, 0, 0.4)'
          }}>
            Explore Classes
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        color: 'white'
      }}>
        <span>↓</span>
      </div>
    </section>
  );
};

export default Hero;

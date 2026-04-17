import React from 'react';

const Announcement = () => {
  return (
    <div className="container animate-fade-in" style={{ marginTop: '40px', marginBottom: '-40px', position: 'relative', zIndex: 10 }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--secondary) 0%, #ffcc00 100%)',
        padding: '30px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        border: '4px solid white',
        color: 'var(--text-primary)'
      }}>
        <div style={{ fontSize: '4rem' }}>🏆</div>
        <div style={{ flexGrow: 1 }}>
          <span style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '0.8rem', 
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Upcoming Event</span>
          <h2 style={{ fontSize: '2rem', marginTop: '10px' }}>Tamil Sports Meet 2026</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Join us for a day of fun, sports, and community spirit at Ropsley Village!</p>
        </div>
        <div style={{ textAlign: 'right', borderLeft: '2px solid rgba(0,0,0,0.1)', paddingLeft: '30px' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>11 July</div>
          <div style={{ fontSize: '1.1rem' }}>Saturday, 2026</div>
          <button className="btn btn-primary" style={{ marginTop: '15px' }}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

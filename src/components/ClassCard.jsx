import React from 'react';

const ClassCard = ({ title, tamilTitle, desc, ages, duration }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: 'var(--radius-lg)',
      padding: '30px',
      boxShadow: 'var(--shadow-md)',
      transition: 'var(--transition)',
      border: '1px solid var(--bg-secondary)',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }} className="class-card">
      <div>
        <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '5px' }}>{title}</h3>
        <p className="tamil-font" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{tamilTitle}</p>
      </div>
      
      <p style={{ color: 'var(--text-primary)', flexGrow: 1 }}>{desc}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '15px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <span><strong>Ages:</strong> {ages}</span>
        <span><strong>Duration:</strong> {duration}</span>
      </div>
      
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Learn More
      </button>

      <style>{`
        .class-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ClassCard;

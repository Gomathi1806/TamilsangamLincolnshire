import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Finance = () => {
  useScrollReveal();

  return (
    <div className="finance-page" style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container reveal">
          <h1 style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '20px' }}>
            Finance & Reports
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            Transparency and accountability are core to our organization. Here you will find our annual financial reports and summaries.
          </p>
        </div>
      </section>

      <section className="reveal" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            padding: '60px',
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            maxWidth: '800px',
            margin: '0 auto',
            borderTop: '4px solid var(--primary)'
          }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Coming Soon</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Financial reports for the current year are being prepared and will be available for download here shortly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance;

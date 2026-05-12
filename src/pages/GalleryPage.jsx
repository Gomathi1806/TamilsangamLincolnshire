import React from 'react';
import Gallery from '../components/Gallery';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GalleryPage = () => {
  useScrollReveal();

  return (
    <div className="gallery-page" style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        padding: '60px 0 20px',
        textAlign: 'center'
      }}>
        <div className="container reveal">
          <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '10px' }}>
            Event Gallery
          </h1>
          <p className="tamil-font" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
            புகைப்படத் தொகுப்பு
          </p>
        </div>
      </section>
      <Gallery />
    </div>
  );
};

export default GalleryPage;

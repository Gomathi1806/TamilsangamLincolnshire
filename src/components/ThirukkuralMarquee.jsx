import React, { useState, useEffect, useRef } from 'react';
import kuralsData from '../assets/thirukkural.json';

const ThirukkuralMarquee = () => {
  const [offset, setOffset] = useState(0);
  const requestRef = useRef();
  const containerRef = useRef();
  const textRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // Join all kurals into a single string for scrolling
  const allKuralsText = kuralsData.kural.map(k => `${k.Number}. ${k.Line1} ${k.Line2}`).join(' \u00A0 \u00A0 ❀ \u00A0 \u00A0 ');

  const speed = 3.0; // Fast and obvious

  useEffect(() => {
    const savedOffset = sessionStorage.getItem('kuralMarqueeOffset');
    if (savedOffset) {
      setOffset(parseFloat(savedOffset));
    }

    const animate = () => {
      if (!isHovered) {
        setOffset(prev => {
          const newOffset = prev - speed;
          if (textRef.current && Math.abs(newOffset) > textRef.current.offsetWidth) {
            return 0;
          }
          return newOffset;
        });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  useEffect(() => {
    return () => {
      sessionStorage.setItem('kuralMarqueeOffset', offset.toString());
    };
  }, [offset]);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: '#1b5e20', // Deep Green
        color: 'white', 
        padding: '15px 0', 
        overflow: 'hidden', 
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 15px rgba(0,0,0,0.2)',
        borderBottom: '2px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 900 // Below Navbar but above page content
      }}
    >
      <div 
        ref={textRef}
        style={{ 
          display: 'inline-block', 
          transform: `translateX(${offset}px)`,
          paddingLeft: '50px' // Start closer to the edge
        }}
      >
        <span className="tamil-font" style={{ 
          fontSize: '1.4rem', 
          fontWeight: '500',
          letterSpacing: '0.03em',
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        }}>
          {allKuralsText}
        </span>
      </div>
    </div>
  );
};

export default ThirukkuralMarquee;

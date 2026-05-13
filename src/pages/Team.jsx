import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Team = () => {
  useScrollReveal();

  // We use string paths from the 'public' folder so the build doesn't crash if files are missing
    const team = [
      { name: 'Mr. Sivanadeyan Ahilan', role: 'Founder & Coordinator', tamilRole: 'நிறுவனர் மற்றும் ஒருங்கிணைப்பாளர்', image: '/team/ahilan.jpg' },
      { name: 'Mr. Sanjeevan Somasundram', role: 'Founder', tamilRole: 'நிறுவனர்', image: '/team/sanjeevan.jpg' },
      { name: 'Mrs. Kalyani Thevarajah', role: 'Founder', tamilRole: 'நிறுவனர்', image: '/team/kalyani.jpg' },
      { name: 'Mrs. Thanusha Ravichandran', role: 'Events Manager & Tamil Teacher', tamilRole: 'நிகழ்வு மேலாளர் மற்றும் தமிழ் ஆசிரியர்', image: '/team/thanusha.jpg' },
      { name: 'Shrimathi Mehala Barathan', role: 'Baratham Teacher', tamilRole: 'பரதநாட்டிய ஆசிரியர்', image: '/team/mehala.jpg' },
      { name: 'Mrs. Aranee Sanjeevan', role: 'Tamil Teacher', tamilRole: 'தமிழ் ஆசிரியர்', image: '/team/aranee.jpg' },
      { name: 'Mrs. Sivaranjani Sasiinthiran', role: 'Tamil Teacher', tamilRole: 'தமிழ் ஆசிரியர்', image: '/team/sivaranjani.jpg' },
      { name: 'Mrs. Niruja Emil', role: 'Tamil Teacher', tamilRole: 'தமிழ் ஆசிரியர்', image: '/team/niruja.jpg' },
      { name: 'Mrs. Prashshika Kugappirian', role: 'Tamil Teacher', tamilRole: 'தமிழ் ஆசிரியர்', image: '/team/prashshika.jpg' },
      { name: 'Mrs. Tharani Thasaruban', role: 'Tamil Teacher', tamilRole: 'தமிழ் ஆசிரியர்', image: '/team/tharani.jpg' },
      { name: 'Miss. Sujani Sivasuthan', role: 'Vocal Teacher', tamilRole: 'வாய்ப்பாட்டு ஆசிரியர்', image: '/team/sujani.jpg' },
    ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, #8B0000 100%)', 
        padding: '80px 0', 
        textAlign: 'center',
        color: 'white',
        marginBottom: '60px'
      }}>
        <div className="container reveal">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '15px' }}>Our Dedicated Team</h1>
          <p className="tamil-font" style={{ fontSize: '1.5rem', opacity: 0.9 }}>எமது அர்ப்பணிப்புள்ள குழு</p>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '20px auto', borderRadius: '2px' }} />
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' }}>
            Meet the passionate individuals who work tirelessly to preserve our heritage and empower the next generation.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px',
          justifyContent: 'center'
        }}>
          {team.map((member, index) => (
            <div key={index} className="reveal" style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            >
              <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Photo+Coming+Soon'; 
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
                }} />
              </div>
              <div style={{ padding: '30px 20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '8px', fontWeight: 700 }}>{member.name}</h3>
                <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '5px', fontSize: '1rem' }}>{member.role}</p>
                <p className="tamil-font" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>{member.tamilRole}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;

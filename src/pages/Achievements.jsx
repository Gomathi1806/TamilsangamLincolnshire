import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/** Runtime base URL for assets */
const assetBase = `${import.meta.env.BASE_URL}achievements/`;

const Achievements = () => {
  useScrollReveal();

  const achievementsList = [
    {
      id: 1,
      title: 'Official Charity Registration',
      tamilTitle: 'அங்கீகரிக்கப்பட்ட தொண்டு நிறுவனம்',
      date: '2025 - 2026',
      description: 'Tamil Sangam Lincolnshire has officially registered as a UK Charity. This milestone establishes our commitment to transparency, governance, and scaling our community programs for years to come.',
      image: `${assetBase}charity_cert.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80', // Governance concept
      tag: 'Governance'
    },
    {
      id: 2,
      title: 'Annual Tamil Sports Meet',
      tamilTitle: 'ஆண்டு தமிழ் விளையாட்டு விழா',
      date: 'Summer 2025',
      description: 'Organized our annual community sports festival, bringing together over 200 participants to engage in traditional Tamil sports and classic athletic tracks, promoting physical fitness and community bonding.',
      image: `${assetBase}sports_meet.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80', // Sports/Community concept
      tag: 'Sports'
    },
    {
      id: 3,
      title: 'Grand Cultural Festivals (Pongal & New Year)',
      tamilTitle: 'மாபெரும் கலாசார விழாக்கள்',
      date: 'January 2026',
      description: 'Celebrated Pongal and Tamil New Year festivals with grand public showcases of traditional music, debates, and outstanding Bharatanatyam performances by our talented youth.',
      image: `${assetBase}culture_fest.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', // Cultural stage concept
      tag: 'Culture'
    },
    {
      id: 4,
      title: 'Tamil School Enrollment & Milestones',
      tamilTitle: 'தமிழ்ப்பள்ளி கல்வி சாதனைகள்',
      date: 'Ongoing',
      description: 'Our Tamil School achieved record-breaking enrollment of over 50 students, preserving and teaching the Tamil language, literature, and history through structured curriculum and formal exams.',
      image: `${assetBase}school_success.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80', // Education/Classroom concept
      tag: 'Education'
    }
  ];

  const videosList = [
    {
      id: 1,
      title: 'Annual Cultural Festival Highlights 2026',
      tamilTitle: 'கலாசார விழா சிறப்புகள் 2026',
      videoUrl: `${assetBase}culture_highlights.mp4`,
      poster: `${assetBase}culture_highlights_poster.jpg`,
      fallbackPoster: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=1200&q=80', // Premium video preview image
      description: 'A beautiful visual montage showcasing our traditional dances, musical recitals, and pongal boiling celebrations.'
    },
    {
      id: 2,
      title: 'Tamil School Annual Day Showcase',
      tamilTitle: 'தமிழ்ப்பள்ளி ஆண்டு விழா',
      videoUrl: `${assetBase}school_showcase.mp4`,
      poster: `${assetBase}school_showcase_poster.jpg`,
      fallbackPoster: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80', // Classroom showcase image
      description: 'Highlights from our young students reciting Thirukkural, performing short Tamil plays, and receiving academic awards.'
    }
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
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '15px' }}>Our Achievements</h1>
          <p className="tamil-font" style={{ fontSize: '1.5rem', opacity: 0.9 }}>எமது சாதனைகள்</p>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '20px auto', borderRadius: '2px' }} />
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' }}>
            Celebrating our milestones in preserving heritage, nurturing education, fostering unity, and establishing community support throughout Lincolnshire.
          </p>
        </div>
      </section>

      {/* Achievements Cards Grid */}
      <section className="container" style={{ paddingBottom: '60px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px',
          justifyContent: 'center'
        }}>
          {achievementsList.map((ach) => (
            <div key={ach.id} className="reveal" style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
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
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  zIndex: 2,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}>{ach.tag}</span>
                <img 
                  src={ach.image} 
                  alt={ach.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = ach.fallbackImage; 
                  }}
                />
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>{ach.date}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '8px', fontWeight: 700 }}>{ach.title}</h3>
                <h4 className="tamil-font" style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>{ach.tamilTitle}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video & Media Section */}
      <section style={{ backgroundColor: 'white', padding: '80px 0 100px' }}>
        <div className="container">
          <div className="section-title reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2>Video Highlights & Documentaries</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>காணொளி தொகுப்புகள்</p>
            <div style={{ width: '50px', height: '3px', background: 'var(--secondary)', margin: '15px auto' }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
            gap: '40px',
            justifyContent: 'center'
          }}>
            {videosList.map((vid) => (
              <div key={vid.id} className="reveal" style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ position: 'relative', backgroundColor: '#000', height: '280px' }}>
                  <video 
                    controls 
                    preload="none" 
                    poster={vid.poster}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.poster = vid.fallbackPoster;
                    }}
                  >
                    <source src={vid.videoUrl} type="video/mp4" />
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-kids-playing-in-a-park-12260-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '6px', fontWeight: 700 }}>{vid.title}</h3>
                  <h4 className="tamil-font" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>{vid.tamilTitle}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{vid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;

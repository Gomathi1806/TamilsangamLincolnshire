import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'SPORTS', 'PONGAL', 'FESTIVALS'];

  const images = [
    { category: 'PONGAL', url: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/656853571_122259899528177787_4458516498866930092_n.jpg', caption: 'Pongal Ritual 2026' },
    { category: 'PONGAL', url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/656325412_122259776156177787_5147466301134840125_n.jpg', caption: 'Traditional Performance' },
    { category: 'PONGAL', url: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/656471859_122260126718177787_2238751648571973060_n.jpg', caption: 'Community Feast' },
    { category: 'PONGAL', url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/670448800_122262633644177787_8528298545096862947_n.jpg', caption: 'Group Celebration' },
    
    { category: 'SPORTS', url: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/666002996_122261742950177787_2715356495108364658_n.jpg', caption: 'Tamil Sports Meet 2026 Poster' },
    { category: 'SPORTS', url: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/637709415_122256108218177787_6631604518013460789_n.jpg', caption: 'Youth Sports Activity' },
    { category: 'SPORTS', url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/636992323_122256108032177787_5203436795976302537_n.jpg', caption: 'Active Participants' },
    
    { category: 'FESTIVALS', url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/651042941_122258944352177787_12303477904547572_n.jpg', caption: "Mother's Day 2026" },
    { category: 'FESTIVALS', url: 'https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/649297935_122258110928177787_331202673069334328_n.jpg', caption: "Women's Day 2026" },
    { category: 'FESTIVALS', url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/638767882_122256106790177787_1293944955748915961_n.jpg', caption: 'Cultural Session' }
  ];

  const filteredImages = activeCategory === 'ALL' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="reveal" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p className="tamil-font" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>புகைப்படத் தொகுப்பு</p>
          <p>Explore our vibrant events and cultural celebrations through these captured moments.</p>
        </div>

        {/* Category Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          marginBottom: '50px',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="btn"
              style={{
                backgroundColor: activeCategory === cat ? 'var(--primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--text-primary)',
                border: `2px solid ${activeCategory === cat ? 'var(--primary)' : '#eee'}`,
                padding: '10px 25px',
                borderRadius: '30px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px',
          minHeight: '400px'
        }}>
          {filteredImages.map((img, index) => (
            <div 
              key={`${activeCategory}-${index}`} 
              style={{
                position: 'relative',
                height: '300px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
                animation: 'fadeInUp 0.5s ease forwards'
              }} 
              className="gallery-item"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)' }} 
              />
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                backgroundColor: 'rgba(255, 140, 0, 0.9)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                zIndex: 2
              }}>
                {img.category}
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                color: 'white',
                padding: '25px',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                zIndex: 3
              }} className="gallery-caption">
                <div>
                  <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '5px' }}>{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gallery-item:hover img {
          transform: scale(1.1) rotate(1deg);
        }
        .gallery-item:hover .gallery-caption {
          opacity: 1;
        }
        .gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .gallery-item:hover::after {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;

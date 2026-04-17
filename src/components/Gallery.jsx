import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/636745188_122256107858177787_6167188308458373918_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=BSL61h729TkQ7kNvwH_TQV7&_nc_oc=AdpCLgghCx0BE2IaMdwzTiCk0JHb2mz7Agee6KCggmMSLVwHHR_VFkal8VgZmFaYiuE&_nc_zt=23&_nc_ht=scontent.fman2-1.fna&_nc_gid=_024M_D9fFsGH50PH_MDiA&_nc_ss=7a389&oh=00_Af1Vs18-q6s1BGabPXY32f6SySUXSatYsOhYTo3fcsCHPg&oe=69E8125F', caption: 'Stirring the Pongal Pot' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/636295749_122256107720177787_8952118292877117605_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=r1nWp6nWCTsQ7kNvwGyeKHr&_nc_oc=AdqVvpp3iRMBClCn15QsyqAY9Wo7snlWSFZlFOMB7DceA6Md7-OI6rSu9-bZYqcvB2Y&_nc_zt=23&_nc_ht=scontent.fman2-2.fna&_nc_gid=_024M_D9fFsGH50PH_MDiA&_nc_ss=7a389&oh=00_Af2SVxHAK_MKc4Lzpn5oq5M5_GJ1zBqKpP-61r6SQ99C_Q&oe=69E8155A', caption: 'Traditional Food Service' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/636911038_122256103088177787_7000786849444337240_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=VAt51y0rwJcQ7kNvwERBsM9&_nc_oc=AdrW1BZEqlSQmQNoc-rfCl7ZZPs3om1Hgxl_1fd746-mK3PZdMLm1Ma7iVCzi5__xlU&_nc_zt=23&_nc_ht=scontent.fman2-1.fna&_nc_gid=UIuOaZIlWebbfkq0265SFw&_nc_ss=7a389&oh=00_Af1HwhAbqNDjPWvtpwAE9uWTz7v9zou_t8_XDBlArnE58w&oe=69E7F9E0', caption: 'Community Kitchen Group' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/656325412_122259776156177787_5147466301134840125_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s552x414_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=QE867hbKlzsQ7kNvwGHuCp9&_nc_oc=Adr-WR1KBylF-zSdkcf3QG2SYUnMJy3zjna__lhX4D7AUAqeAgQk2xsslpPk_8UOwHk&_nc_zt=23&_nc_ht=scontent.fman2-1.fna&_nc_gid=ziG4HbpB7vk8BEBkSqpgbw&_nc_ss=7a389&oh=00_Af3ulY69qIafndQfAzpizJWZOauoTZSWuQ0uSahUuN39FA&oe=69E7FBC3', caption: 'Traditional Dance Performance' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/635715104_122256108176177787_4936305965561655921_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=m7zM01GzokYQ7kNvwFrFD8Q&_nc_oc=AdoPo3BBnSCe08bE5oNfnB2lmGaj-xFtVPHYSnperQSSRK3MOEfUfyPPj8pfCJM18ZA&_nc_zt=23&_nc_ht=scontent.fman2-2.fna&_nc_gid=SFsNUh1z-Hz2ky5tAhjUgg&_nc_ss=7a389&oh=00_Af1wHKEGPBzBxpLH-gKJYiStcLlEY5skcMfxbg_xjj5_ug&oe=69E80521', caption: 'Youth Learning Sessions' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/639753731_122256103352177787_4640352363397207487_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=otNRjLgp6kcQ7kNvwFmKFIH&_nc_oc=Adqr7jDlWEanFBt9d0mjd9O1qSXtCXTTGCeYMbvw1f8QO4t8JpfXtwq9DZf8jWtKRKA&_nc_zt=23&_nc_ht=scontent.fman2-1.fna&_nc_gid=8j4y_d1UO1z1fBSzUaIQaw&_nc_ss=7a389&oh=00_Af281UIUj0obqwZySFyTQdK4SDfFYUB7OFiKnh2KVdgeMg&oe=69E7F7ED', caption: 'Pongal Ritual Altar' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/656471859_122260126718177787_2238751648571973060_n.jpg', caption: 'Community Gathering' },
    { url: 'https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/638495820_122256107798177787_6399216823192149432_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=V-0p706R6qwQ7kNvwGfHozP&_nc_oc=AdoC2vfW6d6OCWNW-xGDThIcK1D_KvjqpneHqMA1SYmu6RvQj70Rwiy7jI11367_8zo&_nc_zt=23&_nc_ht=scontent.fman2-2.fna&_nc_gid=un5OhKNd1rPDTbVo7rsleQ&_nc_ss=7a389&oh=00_Af3sCXaQocgDhFZc4dPxro_ii_2kDf3Zk8MxphUBbqjbPA&oe=69E7FBE7', caption: 'Student Workshop' }
  ];

  return (
    <section id="gallery" className="reveal" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Pongal Rituals 2026</h2>
          <p className="tamil-font" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>பொங்கல் விழா 2026</p>
          <p>Memories from our vibrant Pongal celebrations in Lincolnshire.</p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px',
          minHeight: '400px',
          marginTop: '40px'
        }}>
          {images.map((img, index) => (
            <div 
              key={index} 
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

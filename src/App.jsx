import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ClassCard from './components/ClassCard';
import Announcement from './components/Announcement';
import Gallery from './components/Gallery';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  const classes = [
    { title: 'Tamil Language', tamilTitle: 'தமிழ் மொழி', desc: 'Comprehensive Tamil classes from Level 1 to GCSE, focusing on reading, writing, and fluent speaking.', ages: '5-18 Years', duration: '3 Hours' },
    { title: 'Bharathanatyam', tamilTitle: 'பரதநாட்டியம்', desc: 'Traditional South Indian classical dance lessons, covering basic steps (Adavus) to advanced performances.', ages: '6+ Years', duration: '2 Hours' },
    { title: 'Vocal Music', tamilTitle: 'வாய்ப்பாட்டு', desc: 'Carnatic vocal music training including Sarali Varisai, Alankaram, and traditional Kirthanais.', ages: 'All Ages', duration: '1 Hour' },
    { title: 'Fine Arts', tamilTitle: 'நுண்கலைகள்', desc: 'Traditional Tamil arts and crafts workshops to boost creativity and cultural connection.', ages: '7+ Years', duration: '2 Hours' },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Announcement />
      <Stats />
      
      {/* About Section */}
      <section id="about" className="reveal" style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }}>Tamil Sangam Lincolnshire</h2>
            <p className="tamil-font" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
              கிரந்தம் தமிழ்ச் சங்கத்தின் நோக்கம்: தமிழ் மொழி மற்றும் கலாச்சாரத்தைப் பாதுகாப்பது, வளர்ப்பது மற்றும் எமது சமூகத்தை ஒன்றிணைப்பதாகும்.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Tamil Sangam Lincolnshire is a vibrant community organization serving Grantham and the surrounding areas. 
              We are dedicated to preserving the rich heritage of Tamil language, arts, and traditions.
            </p>
            <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
              Our organization brings together families through educational programs, cultural festivals, and community sports events.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn btn-primary">Our Mission</button>
              <button className="btn" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>Join Us</button>
            </div>
          </div>
          <div style={{
            height: '450px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            backgroundImage: 'url("https://scontent.flhr10-2.fna.fbcdn.net/v/t39.30808-6/450410667_122119131650333632_1438914631383794178_n.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'var(--shadow-lg)',
            border: '8px solid white'
          }}></div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="reveal" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Academy Programs</h2>
            <p className="tamil-font" style={{ fontSize: '1.3rem', marginBottom: '10px' }}>எங்கள் கல்வித் திட்டங்கள்</p>
            <p>Specialized training in language and traditional arts for the next generation.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {classes.map((c, i) => (
              <ClassCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="contact" className="reveal" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>தொடர்புக்கு</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '50px',
            backgroundColor: 'white',
            padding: '50px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Get in Touch</h3>
              <p style={{ marginBottom: '30px' }}>Have questions about our classes or events? Reach out to our team.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📧</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Email</div>
                    <div style={{ opacity: 0.7 }}>info@tamilsangamlincolnshire.co.uk</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Location</div>
                    <div style={{ opacity: 0.7 }}>Grantham & Sleaford, Lincolnshire</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📱</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Facebook</div>
                    <a href="https://www.facebook.com/people/Tamil-Sangam-Lincolnshire/61555333632487/" style={{ color: 'var(--primary)' }}>Tamil Sangam Lincolnshire</a>
                  </div>
                </div>
              </div>
            </div>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }} />
              <textarea placeholder="Your Message" rows="4" style={{ padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd' }}></textarea>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--text-primary)', color: 'white', padding: '80px 0 30px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px' }}>
            <div>
              <h3>Tamil Sangam Lincolnshire</h3>
              <p style={{ opacity: 0.7, marginTop: '20px' }}>Celebrating and preserving Tamil traditions throughout Lincolnshire.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.7 }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#classes">Classes</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://www.facebook.com/people/Tamil-Sangam-Lincolnshire/61555333632487/" style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>FB</a>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Community</h4>
              <p style={{ opacity: 0.7 }}>Proudly serving Grantham, Sleaford, and surrounding areas.</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
            &copy; 2026 Tamil Sangam Lincolnshire. All rights reserved. Registered Charity.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

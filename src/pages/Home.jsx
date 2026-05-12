import React from 'react';
import newSportsPoster from '../assets/new_sports_meet_2026.jpg';
import mullivaikkalPoster from '../assets/mullivaikkal_2026.jpg';
import charityPoster from '../assets/charity_2026.jpg';
import careerPoster from '../assets/career_guidance_2026.jpg';
import heroLanding from '../assets/hero_landing.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const Home = () => {
  useScrollReveal();

  return (
    <div className="home-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section for Community */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        paddingBottom: '80px'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}>
          <img 
            src={heroLanding} 
            alt="Lincolnshire Tamil Sangam" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Subtle overlay for text contrast - matches Tamil School style */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)',
          }}></div>
        </div>

        <div className="container reveal" style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tamil-school" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>Our Tamil School</Link>
            <Link to="/about" className="btn" style={{ 
              backgroundColor: '#ff8c00', 
              color: 'white', 
              border: '2px solid #ff8c00', 
              fontSize: '1.1rem', 
              padding: '15px 35px',
              boxShadow: '0 0 20px rgba(255, 140, 0, 0.4)'
            }}>About Us</Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="reveal" style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }}>Our Mission</h2>
          <p className="tamil-font" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            தமிழ் மொழி மற்றும் கலாச்சாரத்தைப் பாதுகாப்பது, வளர்ப்பது மற்றும் எமது சமூகத்தை ஒன்றிணைப்பதாகும்.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Our mission is to foster a strong sense of community among Tamils in Lincolnshire, while sharing our rich cultural heritage with the wider local community. We strive to provide a platform for cultural exchange, education, and mutual support.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="reveal" id="upcoming-events" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>Upcoming Events</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>வரவிருக்கும் நிகழ்வுகள்</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>

            {/* Sports Day Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                height: '340px',
                backgroundImage: `url(${newSportsPoster})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f8f8f8',
              }} />
              <div style={{ padding: '28px' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>Upcoming</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '12px' }}>Tamil Sports Meet 2026</h3>
                <p style={{ marginBottom: '16px', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Join us for our annual community sports meet! A day filled with fun, friendly competition, and community spirit. Events are organized for all age groups.
                </p>
                <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  <strong>📅 Date:</strong> 11th July 2026<br/>
                  <strong>📍 Location:</strong> Ropsley Village
                </p>
                <Link to="/tamil-school#registration" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textAlign: 'center', textDecoration: 'none' }}>Register Now</Link>
              </div>
            </div>

            {/* Mullivaikkal Remembrance Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                height: '340px',
                backgroundImage: `url(${mullivaikkalPoster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
              }} />
              <div style={{ padding: '28px' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#8B0000',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>Remembrance</span>
                <h3 className="tamil-font" style={{ fontSize: '1.4rem', color: '#8B0000', marginBottom: '12px' }}>முள்ளிவாய்க்கால் நினைவு நாள் — 17 ஆண்டுகள்</h3>
                <p className="tamil-font" style={{ marginBottom: '16px', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  நாங்கள் ஈழ இனப் படுகொலையை நினைவு படுத்துவது அழுவதற்கு அல்ல... எம் தமிழினம் வீறு கொண்டு எழுவதற்கு.
                </p>
                <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  <strong>📅 Date:</strong> 15 May 2026<br/>
                  <strong>⏰ Time:</strong> 7:00 PM onwards<br/>
                  <strong>📍 Location:</strong> Harrowby Lane Methodist Church
                </p>
                <a
                  href="https://www.facebook.com/people/Tamil-Sangam-Lincolnshire/61555333632487/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ width: '100%', justifyContent: 'center', display: 'block', textAlign: 'center', textDecoration: 'none', backgroundColor: '#8B0000', color: 'white', border: 'none' }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Charity Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                height: '340px',
                backgroundImage: `url(${charityPoster})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f8f8f8',
              }} />
              <div style={{ padding: '28px' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>Charity</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '12px' }}>Charity Collection Drive</h3>
                <p style={{ marginBottom: '16px', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Join us in making a difference! We are collecting gently used dresses, shoes, educational materials, and household linens for those in need.
                </p>
                <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  <strong>📅 Date:</strong> 29th May 2026<br/>
                  <strong>📍 Location:</strong> Tamil Kalvikkoodam Lincolnshire
                </p>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textAlign: 'center', textDecoration: 'none' }}>Contact Us</a>
              </div>
            </div>

            {/* Career Guidance Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                height: '340px',
                backgroundImage: `url(${careerPoster})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f8f8f8',
              }} />
              <div style={{ padding: '28px' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#ff8c00',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>Guidance</span>
                <h3 style={{ fontSize: '1.4rem', color: '#ff8c00', marginBottom: '12px' }}>Community Empowerment Seminar Series</h3>
                <p style={{ marginBottom: '16px', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  A free seminar series focused on educational support, career guidance, digital knowledge, and community well-being.
                </p>
                <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  <strong>📅 Date:</strong> Starting this September<br/>
                  <strong>👥 Audience:</strong> Students & Professionals
                </p>
                <a href="#contact" className="btn" style={{ 
                  backgroundColor: '#ff8c00', 
                  color: 'white', 
                  border: 'none',
                  width: '100%', 
                  justifyContent: 'center', 
                  display: 'block', 
                  textAlign: 'center', 
                  textDecoration: 'none' 
                }}>Learn More</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="events" className="reveal" style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Past Events</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>கடந்த கால நிகழ்வுகள்</p>
            <p>A glimpse into our previous successful community gatherings.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Pongal Vizha 2025</h3>
              <p style={{ marginBottom: '15px', fontSize: '1.1rem' }}>A grand celebration of the Tamil harvest festival with traditional food, cultural performances, and games.</p>
              <div style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>January 2025 • Grantham</div>
            </div>
            
            <div style={{ padding: '30px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--secondary)' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Tamil New Year 2025</h3>
              <p style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Ringing in the Chithirai Puthandu with vibrant music, dance, and a spectacular feast for the community.</p>
              <div style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>April 2025 • Sleaford</div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="reveal" style={{ backgroundColor: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>தொடர்புக்கு</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '50px',
            backgroundColor: 'var(--bg-secondary)',
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
                    <div style={{ opacity: 0.7 }}>admin@tamilsangamlincolnshire.co.uk</div>
                    <div style={{ opacity: 0.7 }}>Tamilassociationlincolnshire@gmail.com</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Location</div>
                    <div style={{ opacity: 0.7 }}>Lincolnshire</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📱</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Facebook</div>
                    <a href="https://www.facebook.com/people/Tamil-Sangam-Lincolnshire/61555333632487/" style={{ color: 'var(--primary)' }} target="_blank" rel="noreferrer">Tamil Sangam Lincolnshire</a>
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
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ClassCard from '../components/ClassCard';
import Announcement from '../components/Announcement';
import ThirukkuralMarquee from '../components/ThirukkuralMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TamilSchool = () => {
  useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw51pQ2WLN6p1G3ZmuVjOLAivR6hNxXu-yYFUmjIAiJ3HYDshiiIUmvNUSZ8ZFnESNkbw/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setLoading(false);
      setStatus({ type: 'success', message: 'Thank you! Your registration has been submitted successfully. We will contact you soon.' });
      setFormData({ name: '', email: '', phone: '', comments: '' });
    } catch (error) {
      setLoading(false);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
    }
  };

  const classes = [
    { title: 'Tamil Language', tamilTitle: 'தமிழ் மொழி', desc: 'Comprehensive Tamil classes from Level 1 to GCSE, focusing on reading, writing, and fluent speaking.', ages: '5-18 Years', duration: '1 Hour' },
    { title: 'Bharathanatyam', tamilTitle: 'பரதநாட்டியம்', desc: 'Traditional South Indian classical dance lessons, covering basic steps (Adavus) to advanced performances.', ages: '6+ Years', duration: '1 Hour' },
    { title: 'Vocal Music', tamilTitle: 'வாய்ப்பாட்டு', desc: 'Carnatic vocal music training including Sarali Varisai, Alankaram, and traditional Kirthanais.', ages: 'All Ages', duration: '1 Hour' },
    { title: 'Fine Arts', tamilTitle: 'நுண்கலைகள்', desc: 'Traditional Tamil arts and crafts workshops to boost creativity and cultural connection.', ages: '7+ Years', duration: '1 Hour' },
  ];

  return (
    <div className="tamil-school-page" style={{ paddingTop: '80px' }}>
      <ThirukkuralMarquee />
      <Hero />
      <Announcement />
      <Stats />

      {/* Upcoming Exam Section */}
      <section className="reveal" style={{ padding: '60px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center',
            border: '2px solid var(--primary)'
          }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}>Upcoming Tamil Exam</h2>
            <p className="tamil-font" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              வரவிருக்கும் தமிழ் தேர்வு
            </p>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', padding: '15px', backgroundColor: 'white', display: 'inline-block', borderRadius: 'var(--radius-sm)' }}>
              Date: 06.06.2026
            </div>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              All students are requested to prepare for the upcoming annual Tamil examination. Good luck with your preparations!
            </p>
          </div>
        </div>
      </section>

      {/* Term Dates Section */}
      <section id="term-dates" className="reveal" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>Academic Term Dates</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>கல்வி கால அட்டவணை</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: 'var(--radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center'
          }}>
            <img 
              src="/assets/annual_calendar_2025_2026.jpg" 
              alt="Annual Calendar 2025/2026" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-sm)' }} 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x1600?text=Annual+Calendar+2025-2026+Coming+Soon'; }}
            />
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="reveal" style={{ backgroundColor: 'white', padding: '100px 0' }}>
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

      {/* Past Papers Section */}
      <section id="past-papers" className="reveal" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>Past Exam Papers</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>கடந்த கால வினாத்தாள்கள்</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* 2024-2025 */}
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--primary)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>2024 - 2025</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="https://icedt.education/அரையாண்டுத்தேர்வு-2024-2025/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <span className="tamil-font">அரையாண்டுத்தேர்வு (Half Yearly)</span>
                </a>
                <a href="https://icedt.education/இறுதியாண்டுத்தேர்வு-2024-2025/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <span className="tamil-font">இறுதியாண்டுத்தேர்வு (Annual)</span>
                </a>
              </div>
            </div>

            {/* 2023-2024 */}
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--secondary)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>2023 - 2024</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="https://icedt.education/அரையாண்டுத்தேர்வு-2023-2024/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <span className="tamil-font">அரையாண்டுத்தேர்வு (Half Yearly)</span>
                </a>
                <a href="https://icedt.education/இறுதியாண்டுத்தேர்வு-2023-2024/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <span className="tamil-font">இறுதியாண்டுத்தேர்வு (Annual)</span>
                </a>
              </div>
            </div>

            {/* 2022-2023 */}
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', borderTop: '5px solid #666' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>2022 - 2023</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="https://icedt.education/அரையாண்டுத்தேர்வு-2022-2023/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <span className="tamil-font">அரையாண்டுத்தேர்வு (Half Yearly)</span>
                </a>
                <a href="https://icedt.education/இறுதியாண்டுத்தேர்வு-2022-2023/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <span className="tamil-font">இறுதியாண்டுத்தேர்வு (Annual)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration" className="reveal" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>Student Registration</h2>
            <p className="tamil-font" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>மாணவர் சேர்க்கை படிவம்</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            borderTop: '8px solid var(--primary)'
          }}>
            {status.message && (
              <div style={{
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '25px',
                backgroundColor: status.type === 'success' ? '#d4edda' : status.type === 'warning' ? '#fff3cd' : '#f8d7da',
                color: status.type === 'success' ? '#155724' : status.type === 'warning' ? '#856404' : '#721c24',
                border: `1px solid ${status.type === 'success' ? '#c3e6cb' : status.type === 'warning' ? '#ffeeba' : '#f5c6cb'}`
              }}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your contact number"
                  style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Comments / Message</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any additional information or questions?"
                  style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }}
                ></textarea>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '18px', fontSize: '1.2rem', justifyContent: 'center', opacity: loading ? 0.7 : 1, borderRadius: '12px' }}
                >
                  {loading ? 'Sending...' : 'Submit Registration'}
                </button>
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  Questions? Email us at <a href="mailto:Tamilassociationlincolnshire@gmail.com" style={{ color: 'var(--primary)', fontWeight: '600' }}>Tamilassociationlincolnshire@gmail.com</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamilSchool;

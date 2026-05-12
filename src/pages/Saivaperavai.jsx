import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import mandramHero from '../assets/mandram_hero.jpg';

const Saivaperavai = () => {
  useScrollReveal();

  return (
    <div className="saivaperavai-page" style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden',
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
            src={mandramHero} 
            alt="Saiva Mandram Lincolnshire" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Subtle overlay for text contrast - matches Tamil School style */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)',
          }}></div>
        </div>

        <div className="container reveal" style={{ position: 'relative', zIndex: 2 }}>
          {/* Hero text removed as requested */}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="reveal" style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
          <h2 className="tamil-font" style={{ color: 'var(--primary)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '16px', fontWeight: 700 }}>
            ஸ்ரீ இராஜ ராஜேஸ்வரி அம்மன் ஆலயம் – லிங்கோன்செயர்
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--secondary)', margin: '0 auto 36px', borderRadius: '2px' }} />
          <h3 className="tamil-font" style={{ color: 'var(--secondary)', fontSize: '1.4rem', marginBottom: '20px', fontWeight: 600 }}>வரவேற்பு</h3>
          <p className="tamil-font" style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            அருள் மிகு ஸ்ரீ இராஜ ராஜேஸ்வரி அம்மன் ஆலயம், லிங்கோன்செயர் ஆன்மீக அமைதி, பக்தி மற்றும் தமிழர் பாரம்பரியத்தின் ஒளிக்கோபுரமாக விளங்குகிறது.
          </p>
          <p className="tamil-font" style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-secondary)' }}>
            அம்மனின் அருளால் பக்தர்களின் வாழ்க்கையில் அமைதி, வளம் மற்றும் நலன் பெருகும் என்ற நம்பிக்கையுடன், ஆலயத்தில் சிறப்பு பூஜைகள் மற்றும் ஆன்மீக நிகழ்ச்சிகள் நடைபெற்று வருகின்றன.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="reveal" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <h2 className="tamil-font" style={{ textAlign: 'center', color: 'var(--primary)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '48px', fontWeight: 700 }}>
            எங்கள் ஆலயத்தின் சிறப்பு
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🙏', text: 'மாதாந்திர சிறப்பு பூஜைகள்' },
              { icon: '✨', text: 'அம்மன் அபிஷேகம் மற்றும் அலங்காரம்' },
              { icon: '🕯️', text: 'வெள்ளிக்கிழமை சிறப்பு தீபாராதனை' },
              { icon: '🎊', text: 'நவராத்திரி மகோற்சவம்' },
              { icon: '🪔', text: 'தமிழ் புத்தாண்டு மற்றும் தீபாவளி விழாக்கள்' },
              { icon: '📚', text: 'குழந்தைகளுக்கான தமிழ் மற்றும் ஆன்மீக வகுப்புகள்' },
              { icon: '🎭', text: 'சமூக மற்றும் கலாசார நிகழ்ச்சிகள்' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              >
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
                <p className="tamil-font" style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.5' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blessings Section */}
      <section className="reveal" style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <h2 className="tamil-font" style={{ textAlign: 'center', color: 'var(--primary)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '16px', fontWeight: 700 }}>
            அம்மன் அருள்
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 36px', borderRadius: '2px' }} />
          <p className="tamil-font" style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            ஸ்ரீ இராஜ ராஜேஸ்வரி அம்மன் சக்தியின் முழுமையான வடிவமாக கருதப்படுகிறார். அம்மனை வழிபடுவதன் மூலம் பல அருள்கள் கிடைக்கும் என்று பக்தர்கள் நம்புகின்றனர்.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🧘', label: 'மன அமைதி' },
              { icon: '👨‍👩‍👧‍👦', label: 'குடும்ப ஒற்றுமை' },
              { icon: '💚', label: 'ஆரோக்கியம்' },
              { icon: '🎓', label: 'கல்வி மற்றும் தொழில் முன்னேற்றம்' },
              { icon: '🌟', label: 'ஆன்மீக வளர்ச்சி' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 16px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(var(--primary-rgb, 180,120,60), 0.15)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
                <p className="tamil-font" style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.5' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puja Timings & Special Days */}
      <section className="reveal" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Puja Timings */}
          <div style={{ background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', padding: '40px 32px', boxShadow: 'var(--shadow-md)' }}>
            <h3 className="tamil-font" style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>பூஜை நேரங்கள்</h3>
            <div style={{ width: '50px', height: '3px', background: 'var(--secondary)', margin: '0 auto 24px', borderRadius: '2px' }} />
            <p className="tamil-font" style={{ fontSize: '1rem', lineHeight: '2', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              தற்போது ஆலயத்தில் மாதாந்திர பூஜைகள் நடைபெற்று வருகின்றன.
            </p>
            <p className="tamil-font" style={{ fontSize: '1rem', lineHeight: '2', color: 'var(--text-secondary)' }}>
              எதிர்காலத்தில் அனைத்து பக்தர்களின் நலனிற்காக தினசரி பூஜைகள் நடத்த திட்டமிடப்பட்டுள்ளது.
            </p>
          </div>
          {/* Special Days */}
          <div style={{ background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', padding: '40px 32px', boxShadow: 'var(--shadow-md)' }}>
            <h3 className="tamil-font" style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>சிறப்பு நாட்கள்</h3>
            <div style={{ width: '50px', height: '3px', background: 'var(--secondary)', margin: '0 auto 24px', borderRadius: '2px' }} />
            <ul className="tamil-font" style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem', lineHeight: '2.2', color: 'var(--text-secondary)' }}>
              {['🌙 வெள்ளிக்கிழமை', '🌕 பௌர்ணமி', '🌑 அமாவாசை', '🎉 நவராத்திரி விழாக்கள்'].map((day, i) => (
                <li key={i} style={{ borderBottom: '1px solid rgba(128,128,128,0.15)', padding: '8px 0', fontWeight: 600 }}>{day}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="reveal" style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <h2 className="tamil-font" style={{ textAlign: 'center', color: 'var(--primary)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '48px', fontWeight: 700 }}>
            வரவிருக்கும் நிகழ்ச்சிகள்
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-md)', borderLeft: '5px solid var(--secondary)' }}>
              <h3 className="tamil-font" style={{ color: 'var(--primary)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>🎊 நவராத்திரி விழா</h3>
              <p className="tamil-font" style={{ margin: 0, fontSize: '1rem', lineHeight: '2', color: 'var(--text-secondary)' }}>
                ஒன்பது நாட்கள் அம்மனுக்கு சிறப்பு அபிஷேகம், அலங்காரம் மற்றும் கலாசார நிகழ்ச்சிகள் நடைபெறும்.
              </p>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-md)', borderLeft: '5px solid var(--primary)' }}>
              <h3 className="tamil-font" style={{ color: 'var(--primary)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>🍱 அன்னதானம்</h3>
              <p className="tamil-font" style={{ margin: 0, fontSize: '1rem', lineHeight: '2', color: 'var(--text-secondary)' }}>
                மாதந்தோறும் பக்தர்களுக்கு அன்னதானம் வழங்கப்படுகிறது.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="reveal" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="tamil-font" style={{ color: 'var(--primary)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '16px', fontWeight: 700 }}>
            எங்கள் நோக்கம்
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 36px', borderRadius: '2px' }} />
          <p className="tamil-font" style={{ fontSize: '1.15rem', lineHeight: '2.2', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            தமிழர் ஆன்மீக பாரம்பரியத்தை அடுத்த தலைமுறைக்கு கொண்டு செல்லவும், பக்தர்களை ஒரே குடும்பமாக இணைக்கவும் எங்கள் ஆலயம் அர்ப்பணிப்புடன் செயல்படுகிறது.
          </p>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 48px',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <p className="tamil-font" style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: '2', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              "அம்மன் திருவருள் அனைவர் வாழ்விலும் நிலைக்கட்டும்" 🙏
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="reveal" style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 className="tamil-font" style={{ color: 'var(--primary)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '16px', fontWeight: 700 }}>
            எங்களை தொடர்புகொள்ள
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 36px', borderRadius: '2px' }} />
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: '40px 32px', boxShadow: 'var(--shadow-md)' }}>
            <p className="tamil-font" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
              ஸ்ரீ இராஜ ராஜேஸ்வரி அம்மன் ஆலயம்
            </p>
            <p className="tamil-font" style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '2' }}>
              லிங்கோன்செயர், யுனைடெட் கிங்டம்
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Saivaperavai;

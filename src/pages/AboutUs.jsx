import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark, #8B0000) 60%, var(--secondary) 100%)',
        padding: '80px 0 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,140,0,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="tamil-font" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '12px', letterSpacing: '0.05em' }}>
            தமிழ்ச்சங்கம் லிங்கோன்செயர்
          </p>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'white',
            fontWeight: 800,
            margin: '0 0 16px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            About Us
          </h1>
          <div style={{
            width: '60px', height: '4px',
            background: 'var(--secondary)',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </div>
      </div>

      <div className="container" style={{ maxWidth: '860px', padding: '70px 20px 100px' }}>

        {/* Welcome Section */}
        <section style={sectionStyle}>
          <div style={decorLineStyle} />
          <h2 className="tamil-font" style={headingStyle}>
            தமிழ்ச்சங்கம் லிங்கோன்செயர் உங்களை வரவேற்கிறது
          </h2>
          <p className="tamil-font" style={paraStyle}>
            லிங்கோன்செயரில் வாழும் தமிழர்களை ஒன்றிணைக்கும் நோக்கத்துடன் தமிழ்ச்சங்கம் லிங்கோன்செயர் உருவாக்கப்பட்டது. தமிழ் மொழி, கலாசாரம், பாரம்பரியம் மற்றும் தமிழர் பண்பாட்டை பாதுகாத்து அடுத்த தலைமுறைக்கு கொண்டு செல்லும் பணியில் எங்கள் சங்கம் அர்ப்பணிப்புடன் செயல்பட்டு வருகிறது.
          </p>
          <p className="tamil-font" style={paraStyle}>
            தமிழர்களுக்குள் ஒற்றுமை, நட்பு மற்றும் சமூக இணைப்பை வலுப்படுத்தும் ஒரு குடும்ப சூழலை உருவாக்குவதே எங்கள் முக்கிய குறிக்கோள்.
          </p>
        </section>

        {/* Our Vision */}
        <section style={{ ...sectionStyle, backgroundColor: 'var(--bg-secondary, #fdf6ee)', borderRadius: '16px', padding: '40px 40px 36px' }}>
          <div style={decorLineStyle} />
          <h2 className="tamil-font" style={headingStyle}>எங்கள் நோக்கம்</h2>
          <ul style={{ padding: 0, margin: '10px 0 0', listStyle: 'none' }}>
            {[
              'லிங்கோன்செயரில் வாழும் தமிழர்களை ஒன்றிணைத்தல்',
              'தமிழ் மொழி, கலாசாரம் மற்றும் பாரம்பரியத்தை பாதுகாத்து வளர்த்தல்',
              'இளம் தலைமுறைக்கு தமிழ் மரபு மற்றும் பண்பாட்டை அறிமுகப்படுத்தல்',
              'தமிழர் சமூக ஒற்றுமை மற்றும் உறவை மேம்படுத்தல்',
              'கலாசார, கல்வி மற்றும் சமூக நிகழ்ச்சிகளை ஏற்பாடு செய்தல்',
            ].map((item, idx) => (
              <li key={idx} className="tamil-font" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '10px 0',
                borderBottom: idx < 4 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                lineHeight: 1.7,
              }}>
                <span style={{
                  minWidth: '28px', height: '28px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginTop: '2px',
                  flexShrink: 0,
                }}>{idx + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Activities */}
        <section style={sectionStyle}>
          <div style={decorLineStyle} />
          <h2 className="tamil-font" style={headingStyle}>எங்கள் செயல்பாடுகள்</h2>
          <p className="tamil-font" style={{ ...paraStyle, marginBottom: '24px' }}>
            எங்கள் சங்கம் வருடம் முழுவதும் பல்வேறு நிகழ்ச்சிகள் மற்றும் செயல்பாடுகளை நடத்துகிறது:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🎉', text: 'தமிழ் திருநாள்கள் மற்றும் பாரம்பரிய கொண்டாட்டங்கள்' },
              { icon: '🎭', text: 'கலாசார நிகழ்ச்சிகள் மற்றும் குடும்ப சந்திப்புகள்' },
              { icon: '📚', text: 'தமிழ் மொழி மற்றும் கல்வி சார்ந்த செயல்பாடுகள்' },
              { icon: '👦', text: 'குழந்தைகள் மற்றும் இளைஞர்களுக்கான நிகழ்ச்சிகள்' },
              { icon: '🤝', text: 'சமூக நல மற்றும் தொண்டு நடவடிக்கைகள்' },
              { icon: '🏆', text: 'விளையாட்டு மற்றும் பொழுதுபோக்கு நிகழ்ச்சிகள்' },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; }}
              >
                <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{item.icon}</span>
                <p className="tamil-font" style={{ margin: 0, fontSize: '0.97rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Highlight */}
        <section style={{
          ...sectionStyle,
          background: 'linear-gradient(135deg, var(--primary) 0%, #a00000 100%)',
          borderRadius: '16px',
          padding: '44px 40px',
          color: 'white',
        }}>
          <div style={{ ...decorLineStyle, backgroundColor: 'var(--secondary)' }} />
          <h2 className="tamil-font" style={{ ...headingStyle, color: 'white' }}>எங்கள் சமூகத்தின் சிறப்பு</h2>
          <p className="tamil-font" style={{ ...paraStyle, color: 'rgba(255,255,255,0.88)' }}>
            தமிழ்ச்சங்கம் லிங்கோன்செயர் தமிழர்களை ஒன்றிணைத்து, ஒருவருக்கொருவர் ஆதரவாக இருக்கும் வலுவான சமூகத்தை உருவாக்கும் நோக்கத்துடன் செயல்படுகிறது. இங்கு ஒவ்வொருவரும் ஒரு குடும்ப உறுப்பினராக மதிக்கப்படுகிறார்கள்.
          </p>
        </section>

        {/* Join Us */}
        <section style={{ ...sectionStyle, textAlign: 'center', paddingTop: '20px' }}>
          <div style={{ ...decorLineStyle, margin: '0 auto 24px' }} />
          <h2 className="tamil-font" style={{ ...headingStyle, textAlign: 'center' }}>எங்களுடன் இணைந்திடுங்கள்</h2>
          <p className="tamil-font" style={{ ...paraStyle, maxWidth: '660px', margin: '0 auto 32px' }}>
            ஒற்றுமையான தமிழர் சமூகத்தை உருவாக்கவும், நம் பாரம்பரியத்தை பாதுகாக்கவும், அடுத்த தலைமுறைக்கு தமிழர் அடையாளத்தை பெருமையுடன் கொண்டு செல்லவும் எங்களுடன் இணைந்திடுங்கள்.
          </p>
          <a
            href="https://docs.google.com/forms/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '14px 36px', fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            Enrol Now
          </a>

          <div style={{
            marginTop: '50px',
            padding: '20px',
            borderTop: '2px solid var(--secondary)',
            borderBottom: '2px solid var(--secondary)',
          }}>
            <p className="tamil-font" style={{
              margin: 0,
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--primary)',
              letterSpacing: '0.02em',
            }}>
              தமிழ்ச்சங்கம் லிங்கோன்செயர் — தமிழர்களை இணைப்போம், தமிழை வளர்ப்போம்.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

const sectionStyle = {
  marginBottom: '52px',
};

const decorLineStyle = {
  width: '48px',
  height: '4px',
  backgroundColor: 'var(--primary)',
  borderRadius: '2px',
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: 'clamp(1.25rem, 3vw, 1.65rem)',
  color: 'var(--primary)',
  fontWeight: 700,
  marginBottom: '16px',
  lineHeight: 1.4,
};

const paraStyle = {
  fontSize: '1.05rem',
  lineHeight: 1.85,
  color: 'var(--text-secondary, #555)',
  margin: '0 0 14px',
};

export default AboutUs;

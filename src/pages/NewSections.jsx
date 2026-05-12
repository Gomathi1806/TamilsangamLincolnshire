import React from 'react';

const PlaceholderPage = ({ title, subtitle }) => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px' }}>{title}</h1>
        {subtitle && <p className="tamil-font" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>{subtitle}</p>}
        <div style={{ padding: '60px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px' }}>
          <p style={{ fontSize: '1.2rem' }}>This section is currently under development. Please check back soon for updates!</p>
        </div>
      </div>
    </div>
  );
};

export const Calendar = () => {
  const months = [
    { name: "September", tamil: "புரட்டாசி", events: ["5th School Starts / 5ம் திகதி பள்ளி ஆரம்பம்", "12th Parents Teachers Meeting / 12ம் திகதி பெற்றோர்-ஆசிரியர் கூட்டம்"], icon: "🎒" },
    { name: "October", tamil: "ஐப்பசி", events: ["3rd Vaani Vizha / 3ம் திகதி வாணி விழா", "26th Bharatham/Vocal Exam / 26ம் திகதி பரதநாட்டியம்/வாய்ப்பாட்டு தேர்வு"], icon: "🎻" },
    { name: "November", tamil: "கார்த்திகை", events: ["21st Annual Day / 21ம் திகதி ஆண்டு விழா", "28th Heroes Day / 28ம் திகதி மாவீரர் நாள்"], icon: "🏆" },
    { name: "December", tamil: "மார்கழி", events: ["19th School Last Day / 19ம் திகதி பள்ளி இறுதிநாள்", "27th Christmas Party / 27ம் திகதி நத்தார் பண்டிகை"], icon: "🎄" },
    { name: "January", tamil: "தை", events: ["9th School Starts / 9ம் திகதி பள்ளி ஆரம்பம்", "31st Pongal Festival / 31ம் திகதி பொங்கல் விழா"], icon: "🌾" },
    { name: "February", tamil: "மாசி", events: ["Mid Year Exam - Tamil / அரையாண்டுத் தேர்வு - தமிழ்", "Parents Teachers Meeting / பெற்றோர்-ஆசிரியர் கூட்டம்"], icon: "📝" },
    { name: "March", tamil: "பங்குனி", events: ["Chidambara Ganitham Exam / சிதம்பர கணிதத் தேர்வு"], icon: "🧮" },
    { name: "April", tamil: "சித்திரை", events: ["3rd School Last Day / 3ம் திகதி பள்ளி இறுதிநாள்", "24th School Starts / 24ம் திகதி பள்ளி ஆரம்பம்"], icon: "🆕" },
    { name: "May", tamil: "வைகாசி", events: ["15th Mullivaikkal / 15ம் திகதி முள்ளிவாய்க்கால்"], icon: "🕯️" },
    { name: "June", tamil: "ஆனி", events: ["Year End Exam - Tamil / ஆண்டுத் தேர்வு - தமிழ்", "Tamil House Sports Meet / தமிழ் இல்ல விளையாட்டுப் போட்டி"], icon: "🏃" },
    { name: "July", tamil: "ஆடி", events: ["10th School Last Day / 10ம் திகதி பள்ளி இறுதிநாள்", "10th Parents Teachers Meeting / 10ம் திகதி பெற்றோர்-ஆசிரியர் கூட்டம்"], icon: "🏖️" },
    { name: "August", tamil: "ஆவணி", events: ["Summer Get-together / கோடை கால ஒன்றுக்கூடல்"], icon: "🍉" },
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#f9f9f9', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>Annual Calendar 2025/2026</h1>
          <h2 className="tamil-font" style={{ fontSize: '2rem', color: 'var(--secondary)' }}>ஆண்டு விவரக்குறிப்பு 2025/2026</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '20px auto' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '25px' 
        }}>
          {months.map((m, i) => (
            <div key={i} style={{ 
              backgroundColor: 'white', 
              borderRadius: '15px', 
              padding: '25px', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              borderTop: `5px solid ${i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}`,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.2rem' }}>{m.name}</h3>
                  <p className="tamil-font" style={{ margin: 0, color: 'var(--secondary)', fontWeight: 'bold' }}>{m.tamil}</p>
                </div>
                <span style={{ fontSize: '2rem' }}>{m.icon}</span>
              </div>
              <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {m.events.map((e, idx) => (
                  <li key={idx} style={{ marginBottom: '8px', fontSize: '0.95rem' }}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '50px', textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          <p>Dates may vary due to circumstances and other influences; we will notify you accordingly.</p>
        </div>
      </div>
    </div>
  );
};
export const TermDates = () => <PlaceholderPage title="School Term Dates" subtitle="பள்ளி தவணை தேதிகள்" />;
export const PastPapers = () => <PlaceholderPage title="Past Exam Papers" subtitle="முந்தைய தேர்வுத் தாள்கள்" />;
export const SchoolGallery = () => <PlaceholderPage title="School Gallery" subtitle="பள்ளி புகைப்பட தொகுப்பு" />;
export const PoojaCalendar = () => {
  const poojaDates = [
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "29 ஜூன் 2026 (திங்கட்கிழமை)", heldOn: "03 ஜூலை 2026 (வெள்ளிக்கிழமை)" },
    { event: "ஆடி 1ஆம் வெள்ளி பூஜை", actualDate: "17 ஜூலை 2026 (வெள்ளிக்கிழமை)", heldOn: "17 ஜூலை 2026 (வெள்ளிக்கிழமை)" },
    { event: "ஆடி 2ஆம் வெள்ளி பூஜை", actualDate: "24 ஜூலை 2026 (வெள்ளிக்கிழமை)", heldOn: "24 ஜூலை 2026 (வெள்ளிக்கிழமை)" },
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "29 ஜூலை 2026 (புதன்கிழமை)", heldOn: "31 ஜூலை 2026 (வெள்ளிக்கிழமை)" },
    { event: "ஆடி 3ஆம் வெள்ளி பூஜை", actualDate: "31 ஜூலை 2026 (வெள்ளிக்கிழமை)", heldOn: "31 ஜூலை 2026 (வெள்ளிக்கிழமை)" },
    { event: "ஆடி 4ஆம் வெள்ளி பூஜை", actualDate: "07 ஆகஸ்ட் 2026 (வெள்ளிக்கிழமை)", heldOn: "07 ஆகஸ்ட் 2026 (வெள்ளிக்கிழமை)" },
    { event: "ஆடி 5ஆம் வெள்ளி பூஜை", actualDate: "14 ஆகஸ்ட் 2026 (வெள்ளிக்கிழமை)", heldOn: "14 ஆகஸ்ட் 2026 (வெள்ளிக்கிழமை)" },
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "28 ஆகஸ்ட் 2026 (வெள்ளிக்கிழமை)", heldOn: "28 ஆகஸ்ட் 2026 (வெள்ளிக்கிழமை)" },
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "26 செப்டம்பர் 2026 (சனிக்கிழமை)", heldOn: "02 அக்டோபர் 2026 (வெள்ளிக்கிழமை)" },
    { event: "நவராத்திரி (9 நாட்கள்)", actualDate: "11 முதல் 20 அக்டோபர் 2026 வரை", heldOn: "16 அக்டோபர் 2026 (வெள்ளிக்கிழமை)" },
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "25-26 அக்டோபர் 2026 (ஞாயிறு-திங்கள்)", heldOn: "30 அக்டோபர் 2026 (வெள்ளிக்கிழமை)" },
    { event: "கார்த்திகை தீபம்", actualDate: "23 நவம்பர் 2026 (திங்கட்கிழமை)", heldOn: "27 நவம்பர் 2026 (வெள்ளிக்கிழமை)" },
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "24 நவம்பர் 2026 (செவ்வாய்க்கிழமை)", heldOn: "27 நவம்பர் 2026 (வெள்ளிக்கிழமை)" },
    { event: "பௌர்ணமி விளக்கு பூஜை", actualDate: "23-24 டிசம்பர் 2026 (புதன்-வியாழன்)", heldOn: "25 டிசம்பர் 2026 (வெள்ளிக்கிழமை)" },
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="tamil-font" style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '15px' }}>சைவ மன்றம் லிங்கோன்செயர்</h1>
          <p className="tamil-font" style={{ fontSize: '1.4rem', color: 'var(--secondary)', fontWeight: 'bold' }}>முக்கிய அம்மன் பூஜைகள் 2026</p>
          <div style={{ width: '80px', height: '4px', background: 'var(--secondary)', margin: '20px auto', borderRadius: '2px' }} />
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            பூஜை ஜூன் 2026 முதல் தொடங்குகிறது (சாதாரண மாதாந்திர பூஜைகளுடன்).
          </p>
          <h2 className="tamil-font" style={{ marginTop: '30px', color: 'var(--primary)' }}>ஸ்ரீ இராஜ ராஜேஸ்வரி அம்மன்</h2>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
          overflow: 'hidden',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <th className="tamil-font" style={{ padding: '20px', fontSize: '1.1rem' }}>உண்மையான பூஜை & திகதி</th>
                <th className="tamil-font" style={{ padding: '20px', fontSize: '1.1rem' }}>பூஜை நடைபெறும் நாள்</th>
              </tr>
            </thead>
            <tbody>
              {poojaDates.map((p, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#fcf8f3', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px' }}>
                    <div className="tamil-font" style={{ fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px' }}>{p.event}</div>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>{p.actualDate}</div>
                  </td>
                  <td className="tamil-font" style={{ padding: '20px', color: 'var(--text-primary)', fontWeight: '600' }}>
                    {p.heldOn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p className="tamil-font" style={{ fontSize: '1.5rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
            "அம்மன் அருள் கிடைக்கட்டும்..." 🙏
          </p>
        </div>
      </div>
    </div>
  );
};
export const MandramGallery = () => <PlaceholderPage title="Mandram Gallery" subtitle="மன்ற புகைப்பட தொகுப்பு" />;

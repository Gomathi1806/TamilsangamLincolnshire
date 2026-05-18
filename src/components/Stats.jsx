import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Students', value: '47+', icon: '🎓' },
    { label: 'Years', value: '4+', icon: '🏛️' },
    { label: 'Volunteers', value: '25+', icon: '🤝' },
    { label: 'Classes', value: '12', icon: '📚' },
  ];

  return (
    <section className="reveal" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '60px 0' }}>
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.icon}</div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{stat.value}</div>
            <div style={{ fontSize: '1.2rem', opacity: 0.8 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

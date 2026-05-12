import React, { useState } from 'react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('gallery');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple default password
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ paddingTop: '150px', minHeight: '80vh', display: 'flex', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '40px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: 'fit-content' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '30px' }}>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} 
              />
            </div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: '#f8f9fa', paddingBottom: '50px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: 'var(--primary)' }}>Admin Dashboard</h1>
          <button onClick={() => setIsLoggedIn(false)} className="btn" style={{ backgroundColor: '#6c757d', color: 'white' }}>Logout</button>
        </div>

        <div style={{ display: 'flex', gap: '2px', marginBottom: '30px', borderBottom: '1px solid #ddd' }}>
          <button 
            onClick={() => setActiveTab('gallery')}
            style={{ padding: '12px 25px', border: 'none', background: activeTab === 'gallery' ? 'white' : 'transparent', borderBottom: activeTab === 'gallery' ? '3px solid var(--primary)' : 'none', fontWeight: '600', cursor: 'pointer' }}
          >
            Upload Event Pictures
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            style={{ padding: '12px 25px', border: 'none', background: activeTab === 'content' ? 'white' : 'transparent', borderBottom: activeTab === 'content' ? '3px solid var(--primary)' : 'none', fontWeight: '600', cursor: 'pointer' }}
          >
            Manage Content
          </button>
        </div>

        {activeTab === 'gallery' ? (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '20px' }}>Add New Event Pictures</h3>
            <div style={{ border: '2px dashed #ddd', padding: '40px', textAlign: 'center', borderRadius: '8px', marginBottom: '30px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📸</div>
              <p style={{ color: '#666', marginBottom: '20px' }}>Drag and drop images here or click to select</p>
              <input type="file" multiple style={{ display: 'none' }} id="fileUpload" />
              <label htmlFor="fileUpload" className="btn btn-secondary" style={{ cursor: 'pointer' }}>Select Images</label>
            </div>
            
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Event Name</label>
              <input type="text" placeholder="e.g. Pongal Celebration 2026" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
            </div>
            <button className="btn btn-primary">Upload to Gallery</button>
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '20px' }}>Update Announcements</h3>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Latest Announcement (Tamil)</label>
              <textarea rows="3" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} placeholder="Enter tamil content..."></textarea>
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Latest Announcement (English)</label>
              <textarea rows="3" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} placeholder="Enter english content..."></textarea>
            </div>
            <button className="btn btn-primary">Update Website Content</button>
          </div>
        )}

        <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
          <h4 style={{ color: '#495057', marginBottom: '10px' }}>Note for Developer</h4>
          <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
            To make these uploads live, you can connect this dashboard to <strong>Cloudinary API</strong> (for images) and <strong>Firebase Realtime Database</strong> (for content). 
            Currently, this is a UI-only dashboard for administrative management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

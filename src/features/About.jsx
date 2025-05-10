import React from 'react';

function About() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '700',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem'
      }}>
        About Our Project
      </h1>
      
      <div style={{ 
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Our Story</h2>
        <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          This project was built as part of the FSAD course requirements at KL University. 
          It was developed by our team of three members and evaluated during the hackathon 
          review that took place on May 10th and 11th, 2025.
        </p>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          Our goal was to create a practical payment solution that demonstrates our understanding 
          of full-stack application development principles.
        </p>
      </div>

      <div style={{ 
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Meet the Team</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {/* Team Member 1 */}
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(102, 126, 234, 0.05)',
            borderRadius: '12px'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              KK
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>Keerti Krishna</h3>
            <p style={{ color: '#667eea', marginBottom: '0.5rem' }}>Team Member</p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Contributed to frontend and backend development and UI design.
            </p>
          </div>

          {/* Team Member 2 */}
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(102, 126, 234, 0.05)',
            borderRadius: '12px'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              SS
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>Krishna Datta</h3>
            <p style={{ color: '#667eea', marginBottom: '0.5rem' }}>Team Member</p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Worked on  API integration.
            </p>
          </div>

          {/* Team Member 3 */}
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(102, 126, 234, 0.05)',
            borderRadius: '12px'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              EB
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>Eluru Balaji</h3>
            <p style={{ color: '#667eea', marginBottom: '0.5rem' }}>Team Member</p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Focused on database processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
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
        About Divipay
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
          Founded in 2023, Divipay began as a simple solution to a common problem - splitting bills among friends. 
          What started as a weekend project quickly grew into a full-fledged payment platform trusted by thousands.
        </p>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          Today, we're on a mission to make peer-to-peer payments as simple as sending a text message.
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
              JD
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>John Doe</h3>
            <p style={{ color: '#667eea', marginBottom: '0.5rem' }}>Founder & CEO</p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Passionate about simplifying financial transactions for everyone.
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
              AS
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>Alice Smith</h3>
            <p style={{ color: '#667eea', marginBottom: '0.5rem' }}>Lead Developer</p>
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
              Building secure and scalable payment solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
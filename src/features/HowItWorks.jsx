import React from 'react';
import { FiUser, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

function HowItWorks() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '700',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        How Divipay Works
      </h1>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Step 1 */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          alignItems: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FiUser style={{ color: '#667eea', fontSize: '1.25rem' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>1. Create an Account</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Sign up in less than a minute with your email or phone number.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          alignItems: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FiDollarSign style={{ color: '#667eea', fontSize: '1.25rem' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>2. Add Payment Method</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Connect your bank account, credit card, or digital wallet securely.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          alignItems: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FiCheckCircle style={{ color: '#667eea', fontSize: '1.25rem' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>3. Start Transacting</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Send or request money instantly with just a few taps.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Ready to Get Started?</h2>
        <p style={{ color: '#4a5568', marginBottom: '1.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Join thousands of happy users who are enjoying seamless payments with Divipay.
        </p>
        <a href="/register" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
          display: 'inline-block',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)'
          }
        }}>
          Sign Up Free
        </a>
      </div>
    </div>
  );
}

export default HowItWorks;
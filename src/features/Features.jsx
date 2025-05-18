import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
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
        Our Powerful Features
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Feature 1 */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>💸</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Easy Payments</h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            Send and receive money with just a few clicks. Our platform makes transactions smooth and hassle-free.
          </p>
        </div>

        {/* Feature 2 */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>👥</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Group Splits</h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            Split bills with friends easily. Create groups, add expenses, and let us handle the calculations.
          </p>
        </div>

        {/* Feature 3 */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(102, 126, 234, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Expense Tracking</h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            Visualize your spending with beautiful charts and get insights into your financial habits.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link to="/login" style={{
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
          Get Started Now
        </Link>
      </div>
    </div>
  );
}

export default Features;
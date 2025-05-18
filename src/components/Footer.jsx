import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%)',
      color: 'white',
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(102, 126, 234, 0.1)',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(118, 75, 162, 0.1)',
        zIndex: 1
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Brand info */}
        <div>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            DiviPay
          </div>
          <p style={{
            opacity: 0.8,
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            The smart way to manage your shared expenses.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
              <div 
                key={index}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                <i className={`fab fa-${social}`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Quick Links
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem'
          }}>
            {['Home', 'Features', 'Pricing', 'About Us', 'Contact'].map((name, index) => (
              <li key={index}>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'default'
                }}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Contact Info
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <i className="fas fa-user"></i>
              <span>Keerti Krishna Sreenivas S</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <i className="fas fa-phone-alt"></i>
              <span>+91 **********</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <i className="fas fa-map-marker-alt"></i>
              <span>AP, India</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <i className="fas fa-envelope"></i>
              <span>2300031039@kluniversity.in</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Newsletter
          </h3>
          <p style={{
            opacity: 0.8,
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            Subscribe for updates.
          </p>
          <div style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            <input 
              type="text" 
              placeholder="Your email" 
              style={{
                flex: 1,
                padding: '0.8rem 1rem',
                borderRadius: '50px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white'
              }}
              readOnly
            />
            <div 
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: '600'
              }}
            >
              Subscribe
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        opacity: 0.7,
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} DiviPay. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
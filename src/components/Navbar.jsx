import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiInfo, FiSettings, FiLogIn, FiUsers, FiPieChart, FiDollarSign, FiLogOut } from 'react-icons/fi';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const guestNavItems = [
    { path: '/', name: 'Home', icon: <FiHome /> },
    { path: '/features', name: 'Features', icon: <FiSettings /> },
    { path: '/how-it-works', name: 'How It Works', icon: <FiInfo /> },
    { path: '/login', name: 'Sign In', icon: <FiLogIn /> }
  ];

  const authNavItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <FiPieChart /> },
    { path: '/creategroup', name: 'Groups', icon: <FiUsers /> },
    { path: '/profile', name: 'UserProfile', icon: <FiSettings /> }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  // Hide navbar on these routes
  if (['/', '/login', '/register'].includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 2px 30px rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Logo - Updated to match IndexPage */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{ 
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>💸</span>
          </div>
          <Link to={user ? "/dashboard" : "/"} style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            margin: '0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none'
          }}>
            Divipay
          </Link>
        </div>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1.5rem',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          height: '100%'
        }}>
          {(user ? authNavItems : guestNavItems).map((item) => (
            <li key={item.path} style={{ 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center',
              position: 'relative'
            }}>
              <Link
                to={item.path}
                style={{
                  color: location.pathname === item.path ? '#667eea' : '#4a5568',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '100%',
                  padding: '0 12px',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  ':hover': {
                    color: '#667eea'
                  }
                }}
              >
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: location.pathname === item.path ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}>
                  {item.icon}
                </span>
                {item.name}
                
                {location.pathname === item.path && (
                  <span style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '3px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '3px'
                  }}></span>
                )}
              </Link>
            </li>
          ))}

          {/* Logout Button (only when logged in) */}
          {user && (
            <li style={{ 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center',
              marginLeft: '10px'
            }}>
              <button 
                onClick={handleLogout}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    background: 'rgba(239, 68, 68, 0.2)'
                  }
                }}
              >
                <FiLogOut style={{ fontSize: '1.1rem' }} />
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      
      {/* Spacer for content below fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default Navbar;
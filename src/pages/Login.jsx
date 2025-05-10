import React, { useState } from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState({ email: false, password: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (error) {
      alert("Invalid credentials: " + error.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Stunning Header */}
      <header style={{
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
        padding: '1.5rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
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
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            margin: '0',
            background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Divipay
          </h1>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <Link to="/features" style={{
            textDecoration: 'none',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            Features
          </Link>
          <Link to="/pricing" style={{
            textDecoration: 'none',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            Pricing
          </Link>
          <Link to="/about" style={{
            textDecoration: 'none',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            About
          </Link>
          <Link to="/contact" style={{
            textDecoration: 'none',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            Contact
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: '20px',
        position: 'relative'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.07)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '70%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 1
        }}></div>

        {/* Main login card */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          width: '100%',
          maxWidth: '450px',
          zIndex: 2,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            zIndex: -1
          }}></div>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              marginBottom: '10px',
              color: '#333',
              position: 'relative',
              display: 'inline-block'
            }}>
              Welcome Back
              <span style={{
                position: 'absolute',
                bottom: '-5px',
                left: '0',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(to right, #667eea, #764ba2)',
                borderRadius: '3px'
              }}></span>
            </h1>
            <p style={{
              color: '#555',
              fontSize: '0.95rem',
              marginTop: '15px'
            }}>
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '12px',
                fontSize: '0.9rem',
                color: '#444',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                border: `1px solid ${isFocused.email ? '#667eea' : '#ddd'}`,
                transition: 'all 0.3s ease',
                padding: '0 15px',
                boxShadow: isFocused.email ? '0 0 0 3px rgba(102, 126, 234, 0.2)' : '0 2px 5px rgba(0,0,0,0.05)'
              }}>
                <FiMail style={{
                  color: '#667eea',
                  marginRight: '10px',
                  fontSize: '1.1rem'
                }} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused({ ...isFocused, email: true })}
                  onBlur={() => setIsFocused({ ...isFocused, email: false })}
                  style={{
                    flex: 1,
                    padding: '15px 10px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.95rem',
                    color: '#333',
                    outline: 'none',
                    fontWeight: '500'
                  }}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '12px',
                fontSize: '0.9rem',
                color: '#444',
                fontWeight: '500'
              }}>
                Password
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                border: `1px solid ${isFocused.password ? '#667eea' : '#ddd'}`,
                transition: 'all 0.3s ease',
                padding: '0 15px',
                boxShadow: isFocused.password ? '0 0 0 3px rgba(102, 126, 234, 0.2)' : '0 2px 5px rgba(0,0,0,0.05)'
              }}>
                <FiLock style={{
                  color: '#667eea',
                  marginRight: '10px',
                  fontSize: '1.1rem'
                }} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocused({ ...isFocused, password: true })}
                  onBlur={() => setIsFocused({ ...isFocused, password: false })}
                  style={{
                    flex: 1,
                    padding: '15px 10px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.95rem',
                    color: '#333',
                    outline: 'none',
                    fontWeight: '500'
                  }}
                  required
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              fontSize: '0.85rem'
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                color: '#555',
                cursor: 'pointer',
                userSelect: 'none'
              }}>
                <input
                  type="checkbox"
                  style={{
                    marginRight: '8px',
                    width: '16px',
                    height: '16px',
                    accentColor: '#667eea',
                    cursor: 'pointer'
                  }}
                />
                Remember me
              </label>
              <a
                href="/forgot-password"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(to right, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 7px 20px rgba(102, 126, 234, 0.4)'
                }
              }}
            >
              <FiLogIn style={{ fontSize: '1.1rem' }} />
              Sign In
            </button>
          </form>

          <div style={{
            marginTop: '30px',
            textAlign: 'center',
            color: '#666',
            fontSize: '0.9rem'
          }}>
            Don't have an account?{' '}
            <a
              href="/register"
              style={{
                color: '#667eea',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
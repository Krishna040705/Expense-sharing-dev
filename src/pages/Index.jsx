import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheckCircle, FiDollarSign, FiUsers, FiPieChart, FiBell, FiMail, FiGlobe } from 'react-icons/fi';
import StunningHeader from './StunningHeader';



// Animated SVG Component
const AnimatedWave = () => (
  <svg 
    viewBox="0 0 1440 320" 
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1
    }}
  >
    <path 
      fill="rgba(255, 255, 255, 0.1)" 
      fillOpacity="1" 
      d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    >
      <animate 
        attributeName="d" 
        dur="15s" 
        repeatCount="indefinite" 
        values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,192C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
      />
    </path>
  </svg>
);

// Floating animated circles
const FloatingCircles = () => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            zIndex: 1
          }}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, Math.random() * 0.5 + 0.5, 0],
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
        background: 'rgba(255, 255, 255, 0.15)'
      }}
    >
      <div style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        width: 'fit-content'
      }}>
        {icon}
      </div>
      <h3 style={{ 
        fontSize: '1.3rem', 
        marginBottom: '0.5rem',
        color: 'white'
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: '0.95rem', 
        opacity: 0.8,
        color: 'rgba(255, 255, 255, 0.9)',
        marginTop: 'auto'
      }}>
        {description}
      </p>
    </motion.div>
  );
};

function IndexPage() {
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [mainRef, mainInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Floating animation for the main illustration
  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach(el => {
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 2;
      const y = Math.random() * 20 - 10;
      
      el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      el.style.setProperty('--float-y', `${y}px`);
    });
  }, []);

  return (
    
    
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      textAlign: 'center',
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
                <Link to="/how-it-works" style={{
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>
                  How it Works
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
      {/* Add floating circles */}
      <FloatingCircles />

      {/* Stunning Header */}
      <motion.header 
        ref={headerRef}
        style={{
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
        }}
        initial={{ y: -100 }}
        animate={headerInView ? { y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          whileHover={{ scale: 1.05 }}
        >
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
        </motion.div>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {['Features', 'Pricing', 'About', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link 
                to={`/${item.toLowerCase()}`} 
                style={{
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0.5rem 0'
                }}
              >
                {item}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'white',
                    borderRadius: '2px'
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.header>
      

      {/* Main Content */}
      <motion.div 
        ref={mainRef}
        style={{
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: '2rem 0'
        }}
      >
        {/* Animated background elements */}
        <motion.div 
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div 
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.07)',
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />

        {/* Main content */}
        <motion.div 
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={mainInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="floating-element"
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              zIndex: -1
            }}
          />
          
          <motion.div
            className="floating-element"
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              width: '150px',
              height: '150px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              zIndex: -1
            }}
          />

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            lineHeight: '1.2'
          }}>
            Split Expenses Effortlessly With Friends & Family
          </h1>

          <motion.p 
            style={{
              fontSize: '1.2rem',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              opacity: 0.9,
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            initial={{ opacity: 0 }}
            animate={mainInView ? { opacity: 0.9 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            The smartest way to manage group expenses during college fests, hostel life, or family trips. 
            Divipay makes settling up as easy as sending a message.
          </motion.p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1rem'
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '15px 30px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#764ba2',
                  background: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <span>Get Started for Free</span>
                  <FiArrowRight />
                </button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/demo" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '15px 30px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'white',
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>Watch Video</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" strokeWidth="2"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}
            initial={{ opacity: 0 }}
            animate={mainInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {['No credit card required', 'Instant setup', 'Free forever'].map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                <FiCheckCircle style={{ color: '#4ade80' }} />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          margin: '4rem 0',
          maxWidth: '1000px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '0 2rem'
        }}>
          {[
            { icon: <FiDollarSign size={36} />, title: 'Track Every Rupee', description: 'Monitor all shared expenses in one place with real-time updates' },
            { icon: <FiPieChart size={36} />, title: 'Generate Reports', description: 'Create detailed expense reports for any period with visual charts' },
            { icon: <FiUsers size={36} />, title: 'Perfect for Groups', description: 'Works seamlessly for friends, roommates, couples, or family' },
            { icon: <FiBell size={36} />, title: 'Smart Notifications', description: 'Get alerts when bills are added or payments are due' },
            { icon: <FiMail size={36} />, title: 'Email Reminders', description: 'Automated gentle nudges for pending payments' },
            { icon: <FiGlobe size={36} />, title: 'Access Anywhere', description: 'Cloud sync across all your devices with offline support' }
          ].map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
        

      
        {/* CTA Section */}
        <motion.div 
          style={{
            width: '100%',
            maxWidth: '800px',
            margin: '4rem 0',
            position: 'relative',
            zIndex: 2
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '3rem 2rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ready to Simplify Your Group Expenses?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              opacity: 0.9,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Join thousands of happy users who are managing their shared expenses the smart way.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            >
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '15px 30px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#764ba2',
                  background: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '0 auto',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                }}>
                  <span>Get Started Now - It's Free</span>
                  <FiArrowRight />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

    
  
       
      
                

      {/* Animated wave at bottom */}
      <AnimatedWave />

      {/* Floating animation styles */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(var(--float-y));
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </div>
    
  );
  
}

export default IndexPage;
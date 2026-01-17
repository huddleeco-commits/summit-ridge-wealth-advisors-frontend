import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, Award, ArrowRight, Mountain, ChevronRight } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, ParallaxSection, TiltCard, GlowEffect } from '../effects';

const THEME = {
  colors: { 
    primary: '#1e293b', 
    secondary: '#334155',
    accent: '#d4af37', 
    background: '#ffffff', 
    text: '#1e293b', 
    surface: '#f8fafc',
    navy: '#0f172a',
    charcoal: '#374151'
  },
  fonts: { 
    heading: "'Playfair Display', serif", 
    body: "'Inter', system-ui, sans-serif" 
  },
  spacing: { sectionPadding: '120px' }
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroStyle = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${THEME.colors.navy} 0%, ${THEME.colors.charcoal} 100%)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: window.innerWidth <= 768 ? '60px 16px' : '0 60px'
  };

  const heroOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: 1
  };

  const heroContent = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '40px' : '80px',
    alignItems: 'center'
  };

  const trustIndicators = {
    display: 'flex',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gap: window.innerWidth <= 768 ? '12px' : '24px',
    marginBottom: '32px',
    fontSize: '14px',
    color: THEME.colors.accent,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const statsGrid = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '32px',
    padding: window.innerWidth <= 768 ? '80px 16px' : THEME.spacing.sectionPadding,
    background: THEME.colors.surface,
    textAlign: 'center'
  };

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: window.innerWidth <= 768 ? '24px 16px' : '40px 24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  };

  const servicesSection = {
    padding: window.innerWidth <= 768 ? '80px 16px' : THEME.spacing.sectionPadding,
    background: THEME.colors.background
  };

  const serviceGrid = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const serviceCard = {
    ...glassCard,
    background: 'rgba(15, 23, 42, 0.03)',
    border: '1px solid rgba(15, 23, 42, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const testimonialSection = {
    background: `linear-gradient(135deg, ${THEME.colors.navy} 0%, ${THEME.colors.charcoal} 100%)`,
    padding: window.innerWidth <= 768 ? '80px 16px' : THEME.spacing.sectionPadding,
    position: 'relative'
  };

  const testimonialCard = {
    ...glassCard,
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const ctaSection = {
    padding: window.innerWidth <= 768 ? '80px 16px' : THEME.spacing.sectionPadding,
    background: THEME.colors.surface,
    textAlign: 'center'
  };

  const primaryButton = {
    background: THEME.colors.accent,
    color: THEME.colors.navy,
    padding: '16px 32px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    minHeight: '48px'
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroOverlay}></div>
        <div style={heroContent}>
          <div>
            <div style={trustIndicators}>
              <span>Fiduciary</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span>Fee-Only</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span>Independent</span>
            </div>
            
            <h1 style={{
              fontSize: window.innerWidth <= 768 ? '36px' : '56px',
              fontFamily: THEME.fonts.heading,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: '1.1',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Elevating Your<br />
              <span style={{ color: THEME.colors.accent }}>Financial Future</span>
            </h1>
            
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Boutique wealth management for discerning investors. 
              Former Goldman Sachs partners providing fiduciary guidance 
              for high-net-worth families in Colorado.
            </p>
            
            <GlowEffect color={THEME.colors.accent}>
              <Link to="/contact" style={primaryButton}>
                Schedule Complimentary Consultation
                <ArrowRight size={20} />
              </Link>
            </GlowEffect>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: window.innerWidth <= 768 ? 'center' : 'flex-end'
          }}>
            <TiltCard>
              <div style={{
                ...glassCard,
                textAlign: 'center',
                minWidth: '200px'
              }}>
                <Shield size={32} color={THEME.colors.accent} style={{ marginBottom: '16px' }} />
                <div style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                  $2.3B+
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
                  Assets Under Management
                </div>
              </div>
            </TiltCard>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
            }}>
              <div style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                color: THEME.colors.accent,
                fontWeight: '600'
              }}>
                CFP® Certified
              </div>
              <div style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                color: THEME.colors.accent,
                fontWeight: '600'
              }}>
                CFA® Charterholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={statsGrid}>
          <div>
            <div style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '48px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '8px'
            }}>
              <AnimatedCounter end={2.3} suffix="B+" duration={2000} />
            </div>
            <div style={{ color: THEME.colors.secondary, fontSize: '16px', fontWeight: '500' }}>
              Assets Under Management
            </div>
          </div>
          
          <div>
            <div style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '48px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '8px'
            }}>
              <AnimatedCounter end={847} duration={2500} />
            </div>
            <div style={{ color: THEME.colors.secondary, fontSize: '16px', fontWeight: '500' }}>
              Client Families Served
            </div>
          </div>
          
          <div>
            <div style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '48px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '8px'
            }}>
              <AnimatedCounter end={98.7} suffix="%" duration={3000} />
            </div>
            <div style={{ color: THEME.colors.secondary, fontSize: '16px', fontWeight: '500' }}>
              Client Retention Rate
            </div>
          </div>
          
          <div>
            <div style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '48px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '8px'
            }}>
              <AnimatedCounter end={28} suffix="+" duration={2000} />
            </div>
            <div style={{ color: THEME.colors.secondary, fontSize: '16px', fontWeight: '500' }}>
              Years Combined Experience
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal>
        <section style={servicesSection}>
          <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '42px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '24px'
            }}>
              Comprehensive Wealth Solutions
            </h2>
            <p style={{
              fontSize: '18px',
              color: THEME.colors.secondary,
              lineHeight: '1.6'
            }}>
              From investment management to generational planning, we provide the sophisticated 
              strategies that affluent families require.
            </p>
          </div>
          
          <div style={serviceGrid}>
            <TiltCard>
              <div style={serviceCard}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <TrendingUp size={32} color={THEME.colors.accent} />
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    margin: 0
                  }}>
                    Wealth Management
                  </h3>
                </div>
                <p style={{
                  color: THEME.colors.secondary,
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  Customized investment strategies for $500K+ portfolios. Tax-efficient construction, 
                  alternative investments, and comprehensive risk management.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Learn More <ChevronRight size={16} />
                </div>
              </div>
            </TiltCard>
            
            <TiltCard>
              <div style={serviceCard}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <Users size={32} color={THEME.colors.accent} />
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    margin: 0
                  }}>
                    Family Office Services
                  </h3>
                </div>
                <p style={{
                  color: THEME.colors.secondary,
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  Multi-generational wealth planning for $5M+ families. Family governance, 
                  philanthropic strategy, and concierge financial coordination.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Learn More <ChevronRight size={16} />
                </div>
              </div>
            </TiltCard>
            
            <TiltCard>
              <div style={serviceCard}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <Award size={32} color={THEME.colors.accent} />
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    margin: 0
                  }}>
                    Business Owner Services
                  </h3>
                </div>
                <p style={{
                  color: THEME.colors.secondary,
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  Succession planning, executive benefits optimization, and strategic exit planning 
                  for business owners and entrepreneurs.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Learn More <ChevronRight size={16} />
                </div>
              </div>
            </TiltCard>
            
            <TiltCard>
              <div style={serviceCard}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <Shield size={32} color={THEME.colors.accent} />
                  <h3 style={{
                    fontSize: '24px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    margin: 0
                  }}>
                    Financial Planning
                  </h3>
                </div>
                <p style={{
                  color: THEME.colors.secondary,
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  Comprehensive retirement planning, estate coordination, education funding, 
                  and equity compensation strategies.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Learn More <ChevronRight size={16} />
                </div>
              </div>
            </TiltCard>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonial Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1464822759844-d150065c142f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        height="60vh"
      >
        <section style={testimonialSection}>
          <ScrollReveal>
            <div style={testimonialCard}>
              <blockquote style={{
                fontSize: window.innerWidth <= 768 ? '24px' : '32px',
                fontFamily: THEME.fonts.heading,
                color: '#ffffff',
                fontStyle: 'italic',
                lineHeight: '1.4',
                marginBottom: '32px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                "Summit Ridge transformed our family's approach to wealth. Their sophisticated 
                strategies and unwavering fiduciary commitment give us complete confidence in 
                our financial future."
              </blockquote>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${THEME.colors.accent} 0%, #f59e0b 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: THEME.colors.navy
                }}>
                  R.K.
                </div>
                <div>
                  <div style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}>
                    Tech Executive, Boulder
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px'
                  }}>
                    Client since 2019
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <ScrollReveal>
        <section style={ctaSection}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Mountain size={48} color={THEME.colors.accent} style={{ marginBottom: '24px' }} />
            
            <h2 style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '42px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '24px'
            }}>
              Ready to Elevate Your Wealth Strategy?
            </h2>
            
            <p style={{
              fontSize: '20px',
              color: THEME.colors.secondary,
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Schedule a complimentary consultation with our team. No obligations, 
              just sophisticated financial guidance tailored to your unique situation.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
            }}>
              <GlowEffect color={THEME.colors.accent}>
                <Link to="/contact" style={primaryButton}>
                  Schedule Consultation
                  <ArrowRight size={20} />
                </Link>
              </GlowEffect>
              
              <Link to="/about" style={{
                color: THEME.colors.primary,
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 0',
                minHeight: '48px'
              }}>
                Meet Our Team
                <ChevronRight size={16} />
              </Link>
            </div>
            
            <div style={{
              marginTop: '48px',
              padding: '24px',
              background: 'rgba(15, 23, 42, 0.03)',
              borderRadius: '12px',
              fontSize: '14px',
              color: THEME.colors.secondary
            }}>
              <strong>Office Hours:</strong> Monday-Friday 8am-6pm, Saturday by appointment<br />
              <strong>Location:</strong> Downtown Denver Financial District
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default HomePage;
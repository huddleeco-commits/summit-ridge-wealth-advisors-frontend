import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, Award, Mountain, Building } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, ParallaxSection, TiltCard } from '../effects';

const AboutPage = () => {
  const THEME = {
    colors: { 
      primary: '#0f172a', 
      accent: '#d4af37', 
      background: '#1e293b', 
      text: '#ffffff', 
      surface: '#334155',
      charcoal: '#374151'
    },
    fonts: { 
      heading: "'Playfair Display', serif", 
      body: "'Inter', system-ui, sans-serif" 
    },
    spacing: { sectionPadding: '120px' }
  };

  const foundingStory = [
    {
      year: "2016",
      milestone: "David and Sarah left Goldman Sachs to create something different",
      description: "After witnessing too many conflicts of interest on Wall Street"
    },
    {
      year: "2018",
      milestone: "Reached $100M in assets under management",
      description: "Built entirely through referrals and client satisfaction"
    },
    {
      year: "2021",
      milestone: "Opened Colorado Springs satellite office",
      description: "Expanding to serve families throughout the Rocky Mountain region"
    },
    {
      year: "2024",
      milestone: "Crossed $2.3B in assets under management",
      description: "Now serving 847 families across three generations"
    }
  ];

  const values = [
    {
      title: "Fiduciary First",
      description: "We legally pledge to act in your best interest, always. No commissions, no conflicts, no compromise."
    },
    {
      title: "Generational Thinking",
      description: "Wealth isn't just about the next quarter. We plan for decades, considering how your decisions impact future generations."
    },
    {
      title: "Radical Transparency",
      description: "Every fee disclosed upfront. Every recommendation explained in detail. Your money, your understanding, your control."
    },
    {
      title: "Boutique Excellence",
      description: "We intentionally stay small. Every client gets partner-level attention, not junior analyst treatment."
    }
  ];

  const team = [
    {
      name: "David Chen, CFP®, CFA®",
      title: "Co-Founder & Managing Partner",
      background: "Former Goldman Sachs VP with 15 years in institutional wealth management. Stanford MBA, Wharton undergraduate.",
      specialties: "Alternative investments, tax optimization, business succession planning"
    },
    {
      name: "Sarah Mitchell, CFP®, CFA®",
      title: "Co-Founder & Managing Partner", 
      background: "Former Goldman Sachs Director specializing in UHNW families. Chicago Booth MBA, CPA background.",
      specialties: "Estate planning, family governance, philanthropic strategy"
    }
  ];

  return (
    <div style={{ 
      backgroundColor: THEME.colors.primary,
      color: THEME.colors.text,
      lineHeight: 1.6,
      fontFamily: THEME.fonts.body
    }}>
      {/* Hero Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        height="75vh"
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            maxWidth: '900px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              marginBottom: '30px',
              fontSize: '14px',
              letterSpacing: '2px',
              color: THEME.colors.accent,
              fontWeight: '500'
            }}>
              <span>FIDUCIARY</span>
              <span>•</span>
              <span>FEE-ONLY</span>
              <span>•</span>
              <span>INDEPENDENT</span>
            </div>
            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: window.innerWidth < 768 ? '2.5rem' : '4rem',
              fontWeight: '300',
              marginBottom: '30px',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: 1.2
            }}>
              Our Story
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#e2e8f0',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '300'
            }}>
              Two Goldman Sachs partners who chose principle over profit, 
              creating Colorado's most trusted wealth management firm
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Bar */}
      <ScrollReveal>
        <section style={{
          backgroundColor: THEME.colors.charcoal,
          padding: '60px 20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(4, 1fr)',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: THEME.colors.accent,
                fontFamily: THEME.fonts.heading
              }}>
                $<AnimatedCounter end={2.3} suffix="B" duration={2000} decimals={1} />
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '10px' }}>
                Assets Under Management
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: THEME.colors.accent,
                fontFamily: THEME.fonts.heading
              }}>
                <AnimatedCounter end={847} suffix="" duration={2500} />
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '10px' }}>
                Client Families
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: THEME.colors.accent,
                fontFamily: THEME.fonts.heading
              }}>
                <AnimatedCounter end={98.7} suffix="%" duration={2200} decimals={1} />
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '10px' }}>
                Client Retention Rate
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: THEME.colors.accent,
                fontFamily: THEME.fonts.heading
              }}>
                <AnimatedCounter end={28} suffix="+" duration={1800} />
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '10px' }}>
                Years Combined Experience
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Pull Quote */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          backgroundColor: THEME.colors.primary,
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <blockquote style={{
              fontFamily: THEME.fonts.heading,
              fontSize: window.innerWidth < 768 ? '1.8rem' : '3rem',
              fontWeight: '300',
              lineHeight: 1.3,
              color: '#ffffff',
              fontStyle: 'italic',
              marginBottom: '40px'
            }}>
              "We left Wall Street because we believed wealthy families deserved advisors who weren't just smart, but truly aligned with their interests. No commissions. No conflicts. Just fiduciary care for the people who trust us with their life's work."
            </blockquote>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              marginTop: '50px',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  color: THEME.colors.accent, 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '5px'
                }}>
                  David Chen
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Co-Founder & Managing Partner
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  color: THEME.colors.accent, 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '5px'
                }}>
                  Sarah Mitchell
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Co-Founder & Managing Partner
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Journey Timeline */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          backgroundColor: THEME.colors.background,
          color: THEME.colors.primary
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2.5rem',
                fontWeight: '300',
                marginBottom: '20px'
              }}>
                Our Journey
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Eight years of steady growth, built one client relationship at a time
              </p>
            </div>

            <div style={{
              position: 'relative'
            }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute',
                left: window.innerWidth < 768 ? '20px' : '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: THEME.colors.accent,
                transform: window.innerWidth < 768 ? 'none' : 'translateX(-50%)'
              }} />

              {foundingStory.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '60px',
                  flexDirection: window.innerWidth < 768 ? 'row' : (index % 2 === 0 ? 'row-reverse' : 'row'),
                  gap: '40px'
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: window.innerWidth < 768 ? 'absolute' : 'relative',
                    left: window.innerWidth < 768 ? '11px' : 'auto',
                    width: '20px',
                    height: '20px',
                    backgroundColor: THEME.colors.accent,
                    borderRadius: '50%',
                    zIndex: 2
                  }} />
                  
                  {/* Content */}
                  <div style={{
                    flex: 1,
                    marginLeft: window.innerWidth < 768 ? '50px' : '0',
                    textAlign: window.innerWidth < 768 ? 'left' : (index % 2 === 0 ? 'right' : 'left')
                  }}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      padding: '30px',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      border: '1px solid #e2e8f0'
                    }}>
                      <div style={{
                        color: THEME.colors.accent,
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '10px',
                        fontFamily: THEME.fonts.heading
                      }}>
                        {item.year}
                      </div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        marginBottom: '15px',
                        fontWeight: '600'
                      }}>
                        {item.milestone}
                      </h3>
                      <p style={{
                        color: '#64748b',
                        lineHeight: 1.6
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {window.innerWidth >= 768 && (
                    <div style={{ flex: 1 }} /> // Spacer for desktop layout
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Section */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          backgroundColor: THEME.colors.charcoal
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2.5rem',
                fontWeight: '300',
                marginBottom: '20px',
                color: '#ffffff'
              }}>
                What Drives Us
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Four principles that guide every decision we make
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
              gap: '40px'
            }}>
              {values.map((value, index) => (
                <TiltCard key={index}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '40px',
                    height: '100%'
                  }}>
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.5rem',
                      marginBottom: '20px',
                      color: THEME.colors.accent,
                      fontWeight: '400'
                    }}>
                      {value.title}
                    </h3>
                    <p style={{
                      color: '#e2e8f0',
                      lineHeight: 1.7,
                      fontSize: '1rem'
                    }}>
                      {value.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          backgroundColor: THEME.colors.primary
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2.5rem',
                fontWeight: '300',
                marginBottom: '20px',
                color: '#ffffff'
              }}>
                Leadership Team
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Decades of Wall Street experience, now serving Colorado families
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
              gap: '60px'
            }}>
              {team.map((member, index) => (
                <div key={index} style={{
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: THEME.colors.surface,
                    borderRadius: '50%',
                    margin: '0 auto 30px',
                    backgroundImage: index === 0 
                      ? 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'
                      : 'url(https://images.unsplash.com/photo-1494790108755-2616b612b495?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                  <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    color: THEME.colors.accent,
                    fontWeight: '600'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: '#94a3b8',
                    marginBottom: '20px',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}>
                    {member.title}
                  </p>
                  <p style={{
                    color: '#e2e8f0',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {member.background}
                  </p>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    fontStyle: 'italic'
                  }}>
                    Specializes in: {member.specialties}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding}px 20px`,
          backgroundColor: THEME.colors.charcoal,
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '2.5rem',
              fontWeight: '300',
              marginBottom: '30px',
              color: '#ffffff'
            }}>
              Ready to Experience the Difference?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              marginBottom: '40px',
              lineHeight: 1.6
            }}>
              Join the families who've discovered what wealth management looks like 
              when your advisor's interests are perfectly aligned with yours.
            </p>
            <Link 
              to="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: THEME.colors.accent,
                color: '#000000',
                padding: '18px 40px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#b8860b';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = THEME.colors.accent;
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Schedule a Complimentary Consultation
            </Link>
            <div style={{
              marginTop: '20px',
              fontSize: '0.9rem',
              color: '#64748b'
            }}>
              No pressure, no sales pitch – just a conversation about your goals
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default AboutPage;
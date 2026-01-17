import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';
import { Award, TrendingUp, Shield, Users, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "David Chen",
      title: "Co-Founder & Chief Investment Officer",
      credentials: "CFA®, CFP®",
      experience: "Goldman Sachs (12 years)",
      specialties: ["Alternative Investments", "Portfolio Construction", "Risk Management"],
      education: "MBA Wharton, BS Finance NYU",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "David brings over 15 years of institutional investment experience, having managed multi-billion dollar portfolios at Goldman Sachs. He specializes in alternative investment strategies and sophisticated risk management for ultra-high-net-worth families."
    },
    {
      name: "Sarah Mitchell",
      title: "Co-Founder & Chief Planning Officer",
      credentials: "CFP®, CPA",
      experience: "Goldman Sachs Private Wealth (10 years)",
      specialties: ["Estate Planning", "Tax Strategy", "Generational Wealth"],
      education: "JD/MBA Northwestern, BA Economics Stanford",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Sarah combines her legal, tax, and financial planning expertise to create comprehensive wealth strategies. She has guided over 200 families through complex generational wealth transfers and business succession planning."
    },
    {
      name: "Michael Torres",
      title: "Senior Wealth Advisor",
      credentials: "CFP®, ChFC®",
      experience: "15 years Private Banking",
      specialties: ["Executive Benefits", "Stock Options", "Retirement Planning"],
      education: "MBA UC Denver, BS Finance Colorado State",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Michael specializes in working with corporate executives and business owners, helping them optimize their equity compensation and plan for financial independence."
    },
    {
      name: "Jennifer Wu",
      title: "Portfolio Manager",
      credentials: "CFA®, FRM®",
      experience: "BlackRock (8 years)",
      specialties: ["ESG Investing", "Fixed Income", "International Markets"],
      education: "MS Finance MIT, BA Economics Harvard",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Jennifer leads our ESG and impact investing initiatives while managing fixed income and international equity allocations for our client portfolios."
    },
    {
      name: "Robert Hamilton",
      title: "Director of Family Office Services",
      credentials: "CFP®, CPWA®",
      experience: "UBS Family Office (12 years)",
      specialties: ["Multi-Gen Planning", "Philanthropy", "Family Governance"],
      education: "MBA Kellogg, BA Economics Williams",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Robert works exclusively with our ultra-high-net-worth families, coordinating complex multi-generational strategies and philanthropic initiatives."
    },
    {
      name: "Lisa Chen",
      title: "Client Relations Manager",
      credentials: "CFP®, CRPC®",
      experience: "10 years Wealth Management",
      specialties: ["Client Experience", "Financial Education", "Technology Integration"],
      education: "MBA Colorado, BS Business Administration",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Lisa ensures our clients receive exceptional service while leading our financial education initiatives and client technology platform development."
    }
  ];

  const stats = [
    { number: 2.3, suffix: "B+", label: "Assets Under Management", icon: TrendingUp },
    { number: 847, suffix: "", label: "Client Families", icon: Users },
    { number: 98.7, suffix: "%", label: "Client Retention Rate", icon: Shield },
    { number: 28, suffix: "+", label: "Years Combined Experience", icon: Award }
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 20px'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop") center/cover',
      opacity: 0.1
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 400,
      color: '#ffffff',
      marginBottom: '24px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: 1.6,
      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    trustBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '12px 24px',
      borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: '#D4AF37',
      fontSize: '0.9rem',
      fontWeight: 600,
      marginTop: '20px'
    },
    statsSection: {
      background: '#ffffff',
      padding: '120px 20px',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    statCard: {
      background: 'rgba(15, 23, 42, 0.03)',
      padding: '40px 20px',
      borderRadius: '16px',
      border: '1px solid rgba(15, 23, 42, 0.1)'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#D4AF37',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    statLabel: {
      fontSize: '1rem',
      color: '#64748b',
      fontWeight: 500
    },
    teamSection: {
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      padding: '120px 20px',
      minHeight: '100vh'
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 400,
      color: '#0f172a',
      textAlign: 'center',
      marginBottom: '20px'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto 80px',
      lineHeight: 1.6
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '40px',
      maxWidth: '1400px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '30px'
      }
    },
    teamCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '40px',
      border: '1px solid rgba(15, 23, 42, 0.1)',
      boxShadow: '0 10px 40px rgba(15, 23, 42, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    teamCardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '24px',
      marginBottom: '24px'
    },
    memberImage: {
      width: '100px',
      height: '100px',
      borderRadius: '20px',
      objectFit: 'cover',
      border: '3px solid #D4AF37',
      flexShrink: 0
    },
    memberInfo: {
      flex: 1,
      minWidth: 0
    },
    memberName: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#0f172a',
      marginBottom: '8px',
      lineHeight: 1.2
    },
    memberTitle: {
      fontSize: '1rem',
      color: '#D4AF37',
      fontWeight: 600,
      marginBottom: '8px'
    },
    credentials: {
      fontSize: '0.9rem',
      color: '#64748b',
      fontWeight: 500,
      marginBottom: '4px'
    },
    experience: {
      fontSize: '0.85rem',
      color: '#94a3b8',
      fontStyle: 'italic'
    },
    memberBio: {
      fontSize: '0.95rem',
      color: '#475569',
      lineHeight: 1.6,
      marginBottom: '20px'
    },
    specialtiesTitle: {
      fontSize: '0.9rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    specialtiesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px'
    },
    specialtyTag: {
      background: 'rgba(212, 175, 55, 0.1)',
      color: '#D4AF37',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 500,
      border: '1px solid rgba(212, 175, 55, 0.2)'
    },
    education: {
      fontSize: '0.85rem',
      color: '#64748b',
      fontStyle: 'italic',
      borderTop: '1px solid rgba(15, 23, 42, 0.1)',
      paddingTop: '16px'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '120px 20px',
      textAlign: 'center',
      position: 'relative'
    },
    ctaOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920&h=1080&fit=crop") center/cover',
      opacity: 0.05
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    ctaTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 400,
      color: '#ffffff',
      marginBottom: '24px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaText: {
      fontSize: '1.25rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '40px',
      lineHeight: 1.6,
      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    ctaButton: {
      display: 'inline-block',
      background: '#D4AF37',
      color: '#0f172a',
      padding: '18px 40px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
    }
  };

  // Mobile styles
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    styles.teamGrid.gridTemplateColumns = '1fr';
    styles.teamGrid.gap = '24px';
    styles.teamCard.padding = '24px';
    styles.teamCardHeader.flexDirection = 'column';
    styles.teamCardHeader.textAlign = 'center';
    styles.memberImage.alignSelf = 'center';
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <ScrollReveal>
            <h1 style={styles.heroTitle}>Meet Our Expert Team</h1>
            <p style={styles.heroSubtitle}>
              Former Goldman Sachs partners and seasoned wealth management professionals 
              dedicated to elevating your financial future
            </p>
            <div style={styles.trustBadge}>
              <Shield size={16} style={{ marginRight: '8px' }} />
              Fiduciary • Fee-Only • Independent
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <TiltCard key={index}>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>
                    <stat.icon size={32} />
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2000 + index * 500}
                      decimals={stat.suffix === '%' ? 1 : 0}
                    />
                  </div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <ScrollReveal>
          <h2 style={styles.sectionTitle}>Leadership Team</h2>
          <p style={styles.sectionSubtitle}>
            Our team combines decades of institutional experience with personalized service, 
            ensuring your wealth strategy is both sophisticated and tailored to your unique goals.
          </p>
        </ScrollReveal>

        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <GlowEffect color="#D4AF37">
                <TiltCard>
                  <div style={styles.teamCard}>
                    <div style={styles.teamCardHeader}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        style={styles.memberImage}
                      />
                      <div style={styles.memberInfo}>
                        <h3 style={styles.memberName}>{member.name}</h3>
                        <div style={styles.memberTitle}>{member.title}</div>
                        <div style={styles.credentials}>{member.credentials}</div>
                        <div style={styles.experience}>{member.experience}</div>
                      </div>
                    </div>
                    
                    <p style={styles.memberBio}>{member.bio}</p>
                    
                    <div style={styles.specialtiesTitle}>Specialties</div>
                    <div style={styles.specialtiesList}>
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} style={styles.specialtyTag}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div style={styles.education}>
                      <strong>Education:</strong> {member.education}
                    </div>
                  </div>
                </TiltCard>
              </GlowEffect>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaOverlay}></div>
        <ScrollReveal>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Work Together?</h2>
            <p style={styles.ctaText}>
              Experience the difference that institutional-quality wealth management 
              can make for your financial future. Schedule your complimentary consultation today.
            </p>
            <Link 
              to="/contact" 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
              }}
            >
              Schedule Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default TeamPage;
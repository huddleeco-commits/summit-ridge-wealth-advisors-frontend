import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, Building2, Heart, Award, CheckCircle, ArrowRight, Mountain, Star } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

const ServicesPage = () => {
  const services = [
    {
      title: "Wealth Management",
      subtitle: "$500K+ Portfolios",
      description: "Sophisticated investment strategies tailored for high-net-worth individuals seeking growth and preservation.",
      features: [
        "Customized investment strategies",
        "Tax-efficient portfolio construction", 
        "Alternative investment access",
        "Risk management & asset protection"
      ],
      icon: TrendingUp,
      tier: "premium",
      minimumInvestment: "$500,000"
    },
    {
      title: "Family Office Services",
      subtitle: "$5M+ Portfolios", 
      description: "Comprehensive wealth coordination for ultra-high-net-worth families across generations.",
      features: [
        "Multi-generational wealth planning",
        "Family governance & education",
        "Philanthropic strategy",
        "Concierge financial coordination"
      ],
      icon: Users,
      tier: "ultra",
      minimumInvestment: "$5,000,000"
    },
    {
      title: "Financial Planning",
      subtitle: "Comprehensive Life Planning",
      description: "Strategic planning services to align your financial resources with your life goals.",
      features: [
        "Retirement planning & projections",
        "Estate planning coordination",
        "Education funding strategies",
        "Stock option & equity planning"
      ],
      icon: Shield,
      tier: "standard"
    },
    {
      title: "Business Owner Services", 
      subtitle: "Executive & Entrepreneur Focus",
      description: "Specialized services for business leaders navigating complex financial decisions.",
      features: [
        "Business succession planning",
        "Executive benefits optimization",
        "Cash flow management",
        "Exit strategy development"
      ],
      icon: Building2,
      tier: "business"
    }
  ];

  const credentials = [
    { label: "CFP®", description: "Certified Financial Planner" },
    { label: "CFA®", description: "Chartered Financial Analyst" },
    { label: "SEC", description: "Registered Investment Advisor" },
    { label: "FIDUCIARY", description: "Fee-Only Advisory" }
  ];

  const stats = [
    { number: 2.3, suffix: "B", label: "Assets Under Management", prefix: "$" },
    { number: 847, suffix: "", label: "Client Families Served" },
    { number: 98.7, suffix: "%", label: "Client Retention Rate" },
    { number: 28, suffix: "+", label: "Years Combined Experience" }
  ];

  const testimonials = [
    {
      quote: "Their fiduciary approach and sophisticated investment strategies have consistently outperformed our expectations over the past decade.",
      author: "J.M.",
      title: "Business Owner, Boulder"
    },
    {
      quote: "Summit Ridge transformed our family's approach to generational wealth. Their guidance through our business exit was invaluable.",
      author: "R.K.",
      title: "Tech Executive, Denver"
    }
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
      gap: '60px',
      alignItems: 'center'
    },
    heroText: {
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: window.innerWidth > 768 ? '3.5rem' : '2.5rem',
      fontWeight: '300',
      lineHeight: '1.1',
      marginBottom: '24px',
      color: '#ffffff'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      opacity: 0.9,
      marginBottom: '32px',
      lineHeight: '1.6',
      color: '#e2e8f0'
    },
    trustIndicators: {
      display: 'flex',
      gap: '24px',
      marginBottom: '40px',
      flexWrap: 'wrap'
    },
    trustBadge: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      padding: '8px 16px',
      borderRadius: '24px',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#d4af37',
      border: '1px solid rgba(212,175,55,0.2)'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
      color: '#0f172a',
      padding: '16px 32px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    heroImage: {
      width: '100%',
      height: '400px',
      borderRadius: '12px',
      objectFit: 'cover',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    },
    credentialsBar: {
      background: '#1e293b',
      padding: '40px 0',
      borderTop: '1px solid rgba(212,175,55,0.2)'
    },
    credentialsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      textAlign: 'center'
    },
    credentialItem: {
      color: '#ffffff'
    },
    credentialLabel: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#d4af37',
      marginBottom: '8px'
    },
    servicesSection: {
      padding: '120px 24px',
      background: '#ffffff'
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: window.innerWidth > 768 ? '3rem' : '2.5rem',
      fontWeight: '300',
      textAlign: 'center',
      marginBottom: '60px',
      color: '#0f172a'
    },
    servicesGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(2, 1fr)' : '1fr',
      gap: '32px'
    },
    serviceCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      padding: '40px',
      border: '1px solid rgba(15,23,42,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    premiumCard: {
      gridRow: window.innerWidth > 1024 ? 'span 1' : 'auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#ffffff'
    },
    ultraCard: {
      gridRow: window.innerWidth > 1024 ? 'span 1' : 'auto',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: '#ffffff',
      border: '2px solid #d4af37'
    },
    serviceIcon: {
      width: '48px',
      height: '48px',
      marginBottom: '24px',
      color: '#d4af37'
    },
    serviceTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      marginBottom: '8px',
      fontFamily: "'Playfair Display', serif"
    },
    serviceSubtitle: {
      fontSize: '0.875rem',
      opacity: 0.8,
      marginBottom: '16px',
      fontWeight: '500',
      color: '#d4af37'
    },
    serviceDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '24px',
      opacity: 0.9
    },
    featureList: {
      listStyle: 'none',
      padding: 0
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
      fontSize: '0.95rem'
    },
    statsSection: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '100px 24px',
      color: '#ffffff'
    },
    statsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '48px',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '3.5rem',
      fontWeight: '300',
      fontFamily: "'Playfair Display', serif",
      color: '#d4af37',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '1.1rem',
      opacity: 0.9
    },
    testimonialsSection: {
      padding: '120px 24px',
      background: '#f8fafc'
    },
    testimonialsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
      gap: '48px'
    },
    testimonialCard: {
      background: '#ffffff',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(15,23,42,0.08)',
      border: '1px solid rgba(15,23,42,0.05)'
    },
    quote: {
      fontSize: '1.25rem',
      lineHeight: '1.6',
      fontStyle: 'italic',
      color: '#1e293b',
      marginBottom: '24px'
    },
    author: {
      fontWeight: '600',
      color: '#0f172a'
    },
    authorTitle: {
      fontSize: '0.9rem',
      color: '#64748b',
      marginTop: '4px'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '100px 24px',
      textAlign: 'center',
      color: '#ffffff'
    },
    ctaTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
      fontWeight: '300',
      marginBottom: '24px'
    },
    ctaDescription: {
      fontSize: '1.2rem',
      opacity: 0.9,
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto 40px'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <div style={styles.trustIndicators}>
              <span style={styles.trustBadge}>Fiduciary</span>
              <span style={styles.trustBadge}>Fee-Only</span>
              <span style={styles.trustBadge}>Independent</span>
            </div>
            <h1 style={styles.heroTitle}>
              Comprehensive Financial Services
            </h1>
            <p style={styles.heroSubtitle}>
              Sophisticated wealth management and financial planning services designed for discerning individuals and families who demand excellence.
            </p>
            <GlowEffect color="#d4af37">
              <Link to="/contact" style={styles.ctaButton}>
                Schedule Complimentary Consultation
                <ArrowRight size={20} />
              </Link>
            </GlowEffect>
          </div>
          {window.innerWidth > 768 && (
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Colorado Mountains"
              style={styles.heroImage}
            />
          )}
        </div>
      </section>

      {/* Credentials Bar */}
      <section style={styles.credentialsBar}>
        <div style={styles.credentialsGrid}>
          {credentials.map((cred, index) => (
            <div key={index} style={styles.credentialItem}>
              <div style={styles.credentialLabel}>{cred.label}</div>
              <div>{cred.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section style={styles.servicesSection}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              let cardStyle = { ...styles.serviceCard };
              
              if (service.tier === 'ultra') {
                cardStyle = { ...styles.serviceCard, ...styles.ultraCard };
              } else if (service.tier === 'premium') {
                cardStyle = { ...styles.serviceCard, ...styles.premiumCard };
              }

              return (
                <TiltCard key={index}>
                  <div 
                    style={cardStyle}
                    onMouseEnter={(e) => {
                      if (service.tier === 'standard' || service.tier === 'business') {
                        e.target.style.transform = 'translateY(-8px)';
                        e.target.style.boxShadow = '0 20px 40px rgba(15,23,42,0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (service.tier === 'standard' || service.tier === 'business') {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <IconComponent style={styles.serviceIcon} />
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <div style={styles.serviceSubtitle}>{service.subtitle}</div>
                    <p style={styles.serviceDescription}>{service.description}</p>
                    
                    <ul style={styles.featureList}>
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} style={styles.featureItem}>
                          <CheckCircle size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.minimumInvestment && (
                      <div style={{ 
                        marginTop: '24px', 
                        paddingTop: '24px', 
                        borderTop: '1px solid rgba(212,175,55,0.3)',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        Minimum Investment: {service.minimumInvestment}
                      </div>
                    )}
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index}>
                <div style={styles.statNumber}>
                  {stat.prefix}
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000 + (index * 200)}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section style={styles.testimonialsSection}>
          <h2 style={{ ...styles.sectionTitle, color: '#0f172a' }}>Client Testimonials</h2>
          <div style={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <TiltCard key={index}>
                <div style={styles.testimonialCard}>
                  <div style={{ marginBottom: '24px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} style={{ color: '#d4af37', fill: '#d4af37' }} />
                    ))}
                  </div>
                  <p style={styles.quote}>"{testimonial.quote}"</p>
                  <div>
                    <div style={styles.author}>{testimonial.author}</div>
                    <div style={styles.authorTitle}>{testimonial.title}</div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Elevate Your Financial Future?</h2>
        <p style={styles.ctaDescription}>
          Schedule a complimentary consultation to discuss your unique financial goals and discover how our comprehensive approach can benefit you.
        </p>
        <GlowEffect color="#d4af37">
          <Link to="/contact" style={styles.ctaButton}>
            Schedule Your Consultation
            <ArrowRight size={20} />
          </Link>
        </GlowEffect>
      </section>
    </div>
  );
};

export default ServicesPage;
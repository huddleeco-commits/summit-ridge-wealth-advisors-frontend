import React from 'react';
import { Star, Quote, ArrowRight, Shield, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal, AnimatedCounter, StaggeredList, ParallaxSection, TiltCard, GlowEffect } from '../effects';

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Summit Ridge transformed our family's financial future. Their multi-generational planning approach helped us navigate a complex business sale while preserving wealth for our children and grandchildren.",
      author: "J.M.",
      title: "Business Owner, Boulder",
      rating: 5,
      category: "Family Office Services"
    },
    {
      quote: "After working with three other advisors, David and Sarah's fiduciary approach was refreshing. No product sales, no conflicts - just pure strategic advice that added $2.3M to our portfolio value.",
      author: "R.K.",
      title: "Tech Executive, Denver",
      rating: 5,
      category: "Wealth Management"
    },
    {
      quote: "Their tax-efficient strategies saved us $47,000 in the first year alone. The alternative investment opportunities they provided access to have outperformed our previous portfolio by 340 basis points.",
      author: "M.L.",
      title: "Real Estate Developer, Aspen",
      rating: 5,
      category: "Investment Strategy"
    },
    {
      quote: "The succession planning for our manufacturing business was flawless. They coordinated with our attorneys and CPAs to create a seamless transition that minimized taxes and preserved our legacy.",
      author: "T.H.",
      title: "Family Business Owner, Colorado Springs",
      rating: 5,
      category: "Business Succession"
    },
    {
      quote: "Summit Ridge's concierge approach means I have one trusted contact for all financial matters. They've become true partners in our family's financial journey over the past 8 years.",
      author: "S.P.",
      title: "Retired Executive, Vail",
      rating: 5,
      category: "Comprehensive Planning"
    },
    {
      quote: "Their expertise in stock options and equity compensation was invaluable during my startup's acquisition. They helped optimize the timing and tax implications, saving us hundreds of thousands.",
      author: "A.C.",
      title: "Entrepreneur, Fort Collins",
      rating: 5,
      category: "Executive Benefits"
    }
  ];

  const stats = [
    { value: 98.7, suffix: "%", label: "Client Retention Rate" },
    { value: 2.3, suffix: "B", label: "Assets Under Management", prefix: "$" },
    { value: 847, suffix: "+", label: "Client Families" },
    { value: 12, suffix: "+", label: "Avg. Relationship Years" }
  ];

  const trustIndicators = [
    { icon: Shield, label: "Fiduciary Standard" },
    { icon: Award, label: "Fee-Only Transparent" },
    { icon: TrendingUp, label: "Independent Advice" }
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      textAlign: 'center',
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      zIndex: 2,
      position: 'relative'
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '300',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: '1.6'
    },
    trustBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      marginTop: '40px'
    },
    trustItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#d4af37',
      fontSize: '0.95rem',
      fontWeight: '500'
    },
    statsSection: {
      background: '#0f172a',
      padding: '120px 20px',
      textAlign: 'center'
    },
    statsContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '60px'
    },
    statItem: {
      color: '#ffffff'
    },
    statValue: {
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      fontWeight: '300',
      color: '#d4af37',
      marginBottom: '12px',
      fontFamily: "'Playfair Display', serif"
    },
    statLabel: {
      fontSize: '1.1rem',
      opacity: 0.9,
      fontWeight: '400'
    },
    testimonialsSection: {
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      padding: '120px 20px',
      position: 'relative'
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2.2rem, 4vw, 3rem)',
      color: '#0f172a',
      textAlign: 'center',
      marginBottom: '80px',
      fontWeight: '300'
    },
    testimonialGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '24px'
      }
    },
    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '40px',
      border: '1px solid rgba(15, 23, 42, 0.1)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
      position: 'relative',
      transition: 'all 0.3s ease',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column'
    },
    quoteIcon: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: '#d4af37',
      opacity: 0.3
    },
    testimonialQuote: {
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: '#1e293b',
      marginBottom: '30px',
      fontStyle: 'italic',
      flex: 1
    },
    testimonialFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 'auto'
    },
    authorInfo: {
      flex: 1
    },
    authorName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0f172a',
      marginBottom: '4px'
    },
    authorTitle: {
      fontSize: '0.95rem',
      color: '#64748b',
      marginBottom: '8px'
    },
    category: {
      fontSize: '0.85rem',
      color: '#d4af37',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    stars: {
      display: 'flex',
      gap: '4px'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '120px 20px',
      textAlign: 'center',
      position: 'relative'
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
      color: '#ffffff'
    },
    ctaTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: '300',
      marginBottom: '24px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    ctaText: {
      fontSize: '1.2rem',
      opacity: 0.9,
      marginBottom: '40px',
      lineHeight: '1.6'
    },
    ctaButton: {
      background: '#d4af37',
      color: '#0f172a',
      padding: '18px 36px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px'
    }
  };

  // Mobile styles
  if (window.innerWidth <= 768) {
    styles.testimonialGrid.gridTemplateColumns = '1fr';
    styles.testimonialCard.padding = '24px';
    styles.testimonialCard.minHeight = 'auto';
    styles.trustBar.gap = '24px';
    styles.statsContainer.gap = '40px';
  }

  const renderTestimonial = (testimonial, index) => (
    <TiltCard key={index}>
      <GlowEffect color="#d4af37">
        <div 
          style={{
            ...styles.testimonialCard,
            ':hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <Quote size={32} style={styles.quoteIcon} />
          <p style={styles.testimonialQuote}>"{testimonial.quote}"</p>
          <div style={styles.testimonialFooter}>
            <div style={styles.authorInfo}>
              <div style={styles.authorName}>{testimonial.author}</div>
              <div style={styles.authorTitle}>{testimonial.title}</div>
              <div style={styles.category}>{testimonial.category}</div>
            </div>
            <div style={styles.stars}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
              ))}
            </div>
          </div>
        </div>
      </GlowEffect>
    </TiltCard>
  );

  return (
    <div>
      {/* Hero Section */}
      <ParallaxSection imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" height="70vh">
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Client Success Stories</h1>
            <p style={styles.heroSubtitle}>
              Discover how Summit Ridge has helped families and business owners achieve their financial goals through personalized wealth management and strategic planning.
            </p>
            <div style={styles.trustBar}>
              {trustIndicators.map((item, index) => (
                <div key={index} style={styles.trustItem}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={styles.statsSection}>
          <div style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <div style={styles.statValue}>
                  {stat.prefix || ''}
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    duration={2000 + index * 200}
                    decimals={stat.suffix === 'B' ? 1 : 0}
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
          <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
          <StaggeredList 
            items={testimonials}
            renderItem={renderTestimonial}
            containerStyle={styles.testimonialGrid}
          />
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section style={styles.ctaSection}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Join Our Success Stories?</h2>
            <p style={styles.ctaText}>
              Schedule a complimentary consultation and discover how our fiduciary approach can elevate your financial future.
            </p>
            <Link 
              to="/contact" 
              style={{
                ...styles.ctaButton,
                ':hover': {
                  background: '#b8941f',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
                }
              }}
            >
              Schedule Your Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default TestimonialsPage;
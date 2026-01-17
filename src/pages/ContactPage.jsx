import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Award, Calendar, Send, CheckCircle } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, GlowEffect } from '../effects';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolioSize: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b  100%)',
      position: 'relative'
    },
    hero: {
      paddingTop: '120px',
      paddingBottom: '80px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px'
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '20px',
      letterSpacing: '-0.02em',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
      color: 'rgba(255,255,255,0.85)',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto 40px',
      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    trustBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: window.innerWidth <= 768 ? '15px' : '30px',
      flexWrap: 'wrap',
      marginBottom: '40px'
    },
    trustItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#d4af37',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1fr 1fr',
      gap: window.innerWidth <= 1024 ? '60px' : '80px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px 120px'
    },
    formSection: {
      order: window.innerWidth <= 1024 ? 2 : 1
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: window.innerWidth <= 768 ? '40px 30px' : '60px 50px',
      position: 'relative',
      overflow: 'hidden'
    },
    formTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.2rem',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '30px',
      textAlign: 'center'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
      gap: '20px',
      marginBottom: '20px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginBottom: '8px',
      letterSpacing: '0.02em'
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      minHeight: '44px'
    },
    textarea: {
      width: '100%',
      padding: '16px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      minHeight: '120px',
      resize: 'vertical'
    },
    select: {
      width: '100%',
      padding: '16px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      minHeight: '44px'
    },
    submitButton: {
      width: '100%',
      padding: '18px',
      backgroundColor: '#d4af37',
      color: '#0f172a',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      minHeight: '56px',
      marginTop: '30px'
    },
    successMessage: {
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.3)',
      borderRadius: '12px',
      padding: '20px',
      color: '#22c55e',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '20px'
    },
    contactSection: {
      order: window.innerWidth <= 1024 ? 1 : 2
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      padding: window.innerWidth <= 768 ? '40px 30px' : '50px 40px',
      marginBottom: '40px',
      position: 'relative'
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.2rem',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '30px',
      textAlign: 'center'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    },
    contactIcon: {
      backgroundColor: '#d4af37',
      color: '#0f172a',
      padding: '12px',
      borderRadius: '12px',
      flexShrink: 0
    },
    contactDetails: {
      flex: 1
    },
    contactLabel: {
      color: '#d4af37',
      fontSize: '0.85rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '5px'
    },
    contactValue: {
      color: '#ffffff',
      fontSize: '1.1rem',
      fontWeight: '500',
      lineHeight: '1.5'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr 1fr' : '1fr 1fr',
      gap: '20px',
      marginTop: '40px'
    },
    statCard: {
      textAlign: 'center',
      padding: '25px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    },
    statNumber: {
      fontSize: window.innerWidth <= 768 ? '1.8rem' : '2rem',
      fontWeight: '700',
      color: '#d4af37',
      marginBottom: '8px'
    },
    statLabel: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.85rem',
      fontWeight: '500'
    },
    credentialsBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: window.innerWidth <= 768 ? '20px' : '40px',
      marginTop: '40px',
      flexWrap: 'wrap'
    },
    credential: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#d4af37',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      zIndex: 1
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      
      <ScrollReveal>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Start Your Wealth Journey</h1>
            <p style={styles.heroSubtitle}>
              Schedule a complimentary consultation with Denver's premier wealth advisors. 
              Let's discuss how we can help you achieve your financial goals.
            </p>
            
            <div style={styles.trustBar}>
              <div style={styles.trustItem}>
                <Shield size={16} />
                Fiduciary
              </div>
              <div style={styles.trustItem}>
                <Award size={16} />
                Fee-Only
              </div>
              <div style={styles.trustItem}>
                <CheckCircle size={16} />
                Independent
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <main style={styles.mainContent}>
        <div style={styles.formSection}>
          <ScrollReveal>
            <GlowEffect color="#d4af37">
              <div style={styles.formCard}>
                <h2 style={styles.formTitle}>Request Consultation</h2>
                
                <form onSubmit={handleSubmit}>
                  <div style={styles.formGrid}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div style={styles.formGrid}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Portfolio Size</label>
                      <select
                        name="portfolioSize"
                        value={formData.portfolioSize}
                        onChange={handleChange}
                        style={styles.select}
                      >
                        <option value="">Select range</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-10m">$5M - $10M</option>
                        <option value="10m+">$10M+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Preferred Contact Method</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      style={styles.select}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="both">Either</option>
                    </select>
                  </div>
                  
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>How can we help you?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={styles.textarea}
                      placeholder="Tell us about your financial goals and current situation..."
                      rows="4"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    style={{
                      ...styles.submitButton,
                      backgroundColor: isSubmitted ? '#22c55e' : '#d4af37',
                      transform: isSubmitted ? 'scale(0.98)' : 'scale(1)'
                    }}
                    onMouseOver={(e) => {
                      if (!isSubmitted) e.target.style.backgroundColor = '#b8941f';
                    }}
                    onMouseOut={(e) => {
                      if (!isSubmitted) e.target.style.backgroundColor = '#d4af37';
                    }}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Request Sent
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Schedule Consultation
                      </>
                    )}
                  </button>
                </form>
                
                {isSubmitted && (
                  <div style={styles.successMessage}>
                    <CheckCircle size={20} />
                    Thank you! We'll contact you within 24 hours to schedule your consultation.
                  </div>
                )}
              </div>
            </GlowEffect>
          </ScrollReveal>
        </div>

        <div style={styles.contactSection}>
          <ScrollReveal>
            <div style={styles.contactCard}>
              <h2 style={styles.sectionTitle}>Get In Touch</h2>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <MapPin size={20} />
                </div>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Office Location</div>
                  <div style={styles.contactValue}>
                    1801 California Street, Suite 4900<br />
                    Denver, CO 80202
                  </div>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Phone size={20} />
                </div>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Phone</div>
                  <div style={styles.contactValue}>(303) 555-0123</div>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Mail size={20} />
                </div>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Email</div>
                  <div style={styles.contactValue}>contact@summitridgewealth.com</div>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Clock size={20} />
                </div>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>Office Hours</div>
                  <div style={styles.contactValue}>
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: By Appointment
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div style={styles.contactCard}>
              <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '30px'}}>
                Trusted by Denver's Elite
              </h3>
              
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={2.3} suffix="B" duration={2000} />
                  </div>
                  <div style={styles.statLabel}>Assets Under Management</div>
                </div>
                
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={847} suffix="" duration={2500} />
                  </div>
                  <div style={styles.statLabel}>Client Families</div>
                </div>
                
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={98.7} suffix="%" duration={2200} />
                  </div>
                  <div style={styles.statLabel}>Client Retention</div>
                </div>
                
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>
                    <AnimatedCounter end={28} suffix="" duration={1800} />
                  </div>
                  <div style={styles.statLabel}>Years Experience</div>
                </div>
              </div>
              
              <div style={styles.credentialsBar}>
                <div style={styles.credential}>
                  <Award size={16} />
                  CFP®
                </div>
                <div style={styles.credential}>
                  <Award size={16} />
                  CFA®
                </div>
                <div style={styles.credential}>
                  <Shield size={16} />
                  SEC Registered
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
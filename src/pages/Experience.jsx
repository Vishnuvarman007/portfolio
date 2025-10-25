import { motion } from 'framer-motion'
import { Briefcase, Users, Trophy, Calendar, MapPin } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'

const Experience = () => {
  const experiences = [
    {
      title: 'Internship',
      company: 'Neyveli Lignite Corporation',
      type: 'Industrial Experience',
      duration: '2024',
      location: 'Tamil Nadu, India',
      description: 'Gained hands-on experience in industrial operations and learned about large-scale energy production systems.',
      icon: <Briefcase size={24} />,
      color: '#3b82f6'
    },
    {
      title: 'Team Leader',
      company: 'Smart India Hackathon',
      type: 'Leadership Role',
      duration: '2024',
      location: 'India',
      description: 'Led a diverse team of developers and designers to create innovative solutions for real-world problems.',
      icon: <Users size={24} />,
      color: '#10b981'
    }
  ]

  const hackathons = [
    {
      name: 'E-Summit Hackathon',
      venue: 'IIT Madras',
      status: 'Attended',
      year: '2024',
      description: 'Participated in entrepreneurship-focused hackathon with innovative startup ideas.'
    },
    {
      name: 'ABACUS\'25',
      venue: 'Anna University',
      status: 'Attended',
      year: '2025',
      description: 'Technical symposium showcasing cutting-edge technology solutions.'
    }
  ]

  return (
    <PageTransition>
      <div style={{ padding: '2rem 1rem', maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '1rem',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          }}>
            Experience & Achievements
          </h1>
          <div style={{ width: '5rem', height: '0.25rem', background: '#60a5fa', margin: '0 auto' }} />
        </motion.div>

        {/* Professional Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Professional Experience
          </h2>
          
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'rgba(96, 165, 250, 0.3)',
              transform: 'translateX(-50%)',
              display: window.innerWidth >= 768 ? 'block' : 'none'
            }} />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '3rem',
                  position: 'relative'
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '2rem',
                  width: '1rem',
                  height: '1rem',
                  background: exp.color,
                  borderRadius: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                  display: window.innerWidth >= 768 ? 'block' : 'none'
                }} />

                <div style={{
                  width: window.innerWidth >= 768 ? '45%' : '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1rem',
                  padding: '2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      padding: '0.75rem',
                      background: `${exp.color}20`,
                      border: `1px solid ${exp.color}40`,
                      borderRadius: '0.5rem',
                      marginRight: '1rem'
                    }}>
                      <div style={{ color: exp.color }}>
                        {exp.icon}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: '#60a5fa', fontWeight: '500' }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>{exp.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>{exp.location}</span>
                    </div>
                  </div>

                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  <span style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: `${exp.color}20`,
                    border: `1px solid ${exp.color}40`,
                    borderRadius: '9999px',
                    color: exp.color,
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {exp.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons & Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1rem',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', justifyContent: 'center' }}>
              <Trophy size={32} style={{ color: '#f59e0b', marginRight: '1rem' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
                Hackathons & Events
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Trophy size={20} style={{ color: '#f59e0b', marginRight: '0.75rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>
                      {hackathon.name}
                    </h3>
                  </div>
                  
                  <p style={{ color: '#60a5fa', marginBottom: '0.5rem', fontWeight: '500' }}>
                    {hackathon.venue}
                  </p>
                  
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                    {hackathon.description}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(16, 185, 129, 0.2)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '9999px',
                      color: '#10b981',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {hackathon.status}
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                      {hackathon.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Experience
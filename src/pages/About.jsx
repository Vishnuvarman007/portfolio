import { motion } from 'framer-motion'
import { GraduationCap, Award, Heart } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'

const About = () => {
  return (
    <PageTransition>
      <div style={{ padding: '2rem 1rem', maxWidth: '80rem', margin: '0 auto' }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: '900', 
            color: '#ffffff', 
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}>
            About Me
          </h1>
          <div style={{ width: '5rem', height: '0.25rem', background: '#60a5fa', margin: '0 auto' }} />
        </motion.div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '1rem',
              padding: '2rem',
              height: '100%',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>👨💻</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', textAlign: 'center', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Who I Am
              </h3>
              <p style={{ color: '#f1f5f9', lineHeight: '1.7', textAlign: 'center', fontSize: '1rem', fontWeight: '500' }}>
                A passionate Computer Science student at R.M.K. Engineering College, 
                specializing in Computer Science and Business Systems with Honors in Business Analytics.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '1rem',
              padding: '2rem',
              height: '100%',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', textAlign: 'center', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                What I Do
              </h3>
              <p style={{ color: '#f1f5f9', lineHeight: '1.7', textAlign: 'center', fontSize: '1rem', fontWeight: '500' }}>
                Full-stack development, IoT systems, and AI/ML applications. 
                I lead teams in hackathons and create innovative solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <GraduationCap size={32} style={{ color: '#60a5fa', marginRight: '1rem' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Education</h2>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
                Bachelor of Technology
              </h3>
              <p style={{ color: '#60a5fa', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600' }}>
                Computer Science and Business Systems (Honors with Business Analytics)
              </p>
              <p style={{ color: '#e2e8f0', fontWeight: '500' }}>
                R.M.K. Engineering College | Expected 2027 | GPA: 8.49/10.0
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
                Certifications
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {[
                  { title: 'NPTEL', desc: 'Operating System Certificate' },
                  { title: 'Udemy', desc: 'Java for Programmers Crash Course' }
                ].map((cert, index) => (
                  <div key={index} style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <Award size={16} style={{ color: '#60a5fa', marginRight: '0.5rem' }} />
                      <span style={{ fontWeight: '600', color: '#ffffff' }}>{cert.title}</span>
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '500' }}>{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Heart size={32} style={{ color: '#ec4899', marginRight: '1rem' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Interests</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {['Data Structures & Algorithms', 'Computer Networks', 'Emerging Tech Trends', 'Team Leadership', 'Problem Solving', 'Innovation'].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(96, 165, 250, 0.3)',
                    border: '1px solid rgba(96, 165, 250, 0.5)',
                    color: '#ffffff',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    cursor: 'default',
                    boxShadow: '0 4px 16px rgba(96, 165, 250, 0.2)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default About
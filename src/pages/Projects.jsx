import { motion } from 'framer-motion'
import { ExternalLink, Github, Cpu, Smartphone } from 'lucide-react'
import { useState } from 'react'
import PageTransition from '../components/layout/PageTransition'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'Onion Storage',
      subtitle: 'IoT Team Project',
      description: 'IoT system with multi-sensor monitoring and solar-powered ventilation. AI/ML models for predicting onion shelf life and spoilage risk. Farmer-friendly dashboard with multilingual support and real-time alerts.',
      technologies: ['IoT', 'AI/ML', 'Solar Power', 'Multi-sensor', 'Dashboard', 'Python', 'React'],
      icon: <Cpu size={32} />,
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      features: ['Real-time monitoring', 'Predictive analytics', 'Solar powered', 'Multilingual support']
    },
    {
      title: 'QR Code Ticket Booking',
      subtitle: 'Individual Project',
      description: 'Full-stack app using React (frontend), Spring Boot (backend), MySQL (database). QR code generation + scanning for secure ticket verification. Responsive UI with seat selection, booking history, and real-time availability.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'QR Code', 'Full-Stack', 'Java', 'REST API'],
      icon: <Smartphone size={32} />,
      gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      features: ['QR code generation', 'Seat selection', 'Real-time booking', 'Secure verification']
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
            Featured Projects
          </h1>
          <div style={{ width: '5rem', height: '0.25rem', background: '#60a5fa', margin: '0 auto' }} />
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '1rem', fontSize: '1.1rem' }}>
            Showcasing my passion for innovation and problem-solving
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Project Header */}
              <div style={{
                height: '8rem',
                background: project.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <motion.div
                  animate={{ 
                    scale: hoveredProject === index ? 1.2 : 1,
                    rotate: hoveredProject === index ? 10 : 0
                  }}
                  style={{ color: 'white', zIndex: 2 }}
                >
                  {project.icon}
                </motion.div>
                
                {/* Animated overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    padding: '1rem'
                  }}
                >
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.25rem 0.5rem',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        color: 'white'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>
              </div>
              
              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.25rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#60a5fa', fontWeight: '500' }}>
                    {project.subtitle}
                  </p>
                </div>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: 'rgba(96, 165, 250, 0.2)',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                      borderRadius: '0.5rem',
                      color: '#60a5fa',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1rem',
            padding: '2rem'
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Want to see more?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
            Check out my GitHub for more projects and contributions
          </p>
          <motion.a
            href="https://github.com/Vishnuvarman007"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'rgba(96, 165, 250, 0.2)',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              borderRadius: '0.5rem',
              color: '#60a5fa',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            <Github size={20} />
            Visit GitHub
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Projects
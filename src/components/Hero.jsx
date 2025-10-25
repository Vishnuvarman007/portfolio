import { motion } from 'framer-motion'
import { Github, Linkedin, Code, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #1e40af 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div 
          style={{
            position: 'absolute',
            top: '5rem',
            left: '5rem',
            width: '16rem',
            height: '16rem',
            background: '#8b5cf6',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(3rem)',
            animation: 'pulse 2s infinite'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            top: '10rem',
            right: '5rem',
            width: '16rem',
            height: '16rem',
            background: '#3b82f6',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(3rem)',
            animation: 'pulse 2s infinite',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 7rem)', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Vishnu Varman P
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
            color: '#93c5fd', 
            marginBottom: '2rem' 
          }}>
            Computer Science Student & Full-Stack Developer
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#d1d5db', 
            marginBottom: '3rem', 
            maxWidth: '32rem', 
            margin: '0 auto 3rem auto' 
          }}>
            Passionate about creating innovative solutions with modern technologies. 
            Currently pursuing BTech in Computer Science and Business Systems at R.M.K. Engineering College.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <a
            href="https://github.com/Vishnuvarman007"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Github size={24} style={{ color: '#374151' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishnu-varman-p-b368a12a3/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Linkedin size={24} style={{ color: '#2563eb' }} />
          </a>
          <a
            href="https://leetcode.com/u/Vishnu273_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Code size={24} style={{ color: '#ea580c' }} />
          </a>
          <a
            href="mailto:vishnuvarmanp@gmail.com"
            style={{
              padding: '0.75rem',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Mail size={24} style={{ color: '#dc2626' }} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#about"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#2563eb',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.3s',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
            onMouseOut={(e) => e.target.style.background = '#2563eb'}
          >
            Learn More About Me
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </section>
  )
}

export default Hero
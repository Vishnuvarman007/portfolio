import { motion } from 'framer-motion'
import { Github, Linkedin, Code, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import PageTransition from '../components/layout/PageTransition'

const Home = () => {
  const [text, setText] = useState('')
  const fullText = 'Computer Science Student & Full-Stack Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageTransition>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Enhanced floating elements */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '12rem',
            height: '12rem',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            filter: 'blur(2rem)',
            animation: 'pulse 4s infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '8rem',
            height: '8rem',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            filter: 'blur(2rem)',
            animation: 'pulse 3s infinite'
          }} />
        </div>

        <div style={{ 
          maxWidth: '64rem', 
          margin: '0 auto', 
          padding: '0 1rem', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 10 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ 
              fontSize: 'clamp(3rem, 8vw, 7rem)', 
              fontWeight: '900', 
              color: '#ffffff', 
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Vishnu Varman P
            </h1>
            
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
              color: '#ffffff', 
              marginBottom: '2rem',
              minHeight: '4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}>
              {text}
              <span style={{ 
                animation: 'pulse 1s infinite',
                marginLeft: '0.25rem',
                color: '#60a5fa'
              }}>|</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#f1f5f9', 
              marginBottom: '3rem', 
              maxWidth: '32rem', 
              margin: '0 auto 3rem auto',
              fontWeight: '500',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Passionate about creating innovative solutions with modern technologies. 
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}
          >
            {[
              { icon: <Github size={24} />, href: 'https://github.com/Vishnuvarman007', color: '#374151' },
              { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/vishnu-varman-p-b368a12a3/', color: '#2563eb' },
              { icon: <Code size={24} />, href: 'https://leetcode.com/u/Vishnu273_/', color: '#ea580c' },
              { icon: <Mail size={24} />, href: 'mailto:vishnuvarmanp@gmail.com', color: '#dc2626' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                borderRadius: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
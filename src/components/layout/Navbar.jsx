import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setIsDark(JSON.parse(saved))
      document.body.classList.toggle('dark', JSON.parse(saved))
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
    document.body.classList.toggle('dark', newMode)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      zIndex: 50,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              color: isDark ? '#60a5fa' : '#1d4ed8' 
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Vishnu Varman P
            </Link>
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Desktop Menu */}
            {!isMobile && (
              <div style={{ display: 'flex', gap: '2rem' }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    style={{
                      color: location.pathname === item.path 
                        ? (isDark ? '#60a5fa' : '#2563eb')
                        : (isDark ? '#cbd5e1' : '#374151'),
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      fontWeight: location.pathname === item.path ? '600' : '400',
                      padding: '0.5rem 0'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                color: isDark ? '#cbd5e1' : '#374151',
                transition: 'all 0.3s'
              }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  color: isDark ? '#cbd5e1' : '#374151'
                }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ paddingBottom: '1rem' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  color: location.pathname === item.path 
                    ? (isDark ? '#60a5fa' : '#2563eb')
                    : (isDark ? '#cbd5e1' : '#374151'),
                  textDecoration: 'none',
                  fontWeight: location.pathname === item.path ? '600' : '400',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
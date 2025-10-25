import { motion } from 'framer-motion'
import { Code, Database, Wrench, GitBranch } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={32} />,
      skills: ['Java', 'C++', 'MySQL'],
      color: '#3b82f6'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database size={32} />,
      skills: ['Spring Boot', 'React'],
      color: '#10b981'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={32} />,
      skills: ['Git', 'GitHub', 'Eclipse', 'VS Code'],
      color: '#8b5cf6'
    },
    {
      title: 'Dev Practices',
      icon: <GitBranch size={32} />,
      skills: ['GitHub Actions'],
      color: '#f59e0b'
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
            Skills & Technologies
          </h1>
          <div style={{ width: '5rem', height: '0.25rem', background: '#60a5fa', margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'inline-flex',
                padding: '1rem',
                borderRadius: '1rem',
                background: `${category.color}20`,
                border: `1px solid ${category.color}40`,
                marginBottom: '1.5rem'
              }}>
                <div style={{ color: category.color }}>
                  {category.icon}
                </div>
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: category.color,
                      borderRadius: '50%',
                      marginRight: '0.75rem'
                    }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500' }}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>
            What I'm Learning Next
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {['TypeScript', 'Node.js', 'Docker', 'AWS', 'MongoDB', 'GraphQL'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(236, 72, 153, 0.2)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '9999px',
                  color: '#f472b6',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Skills
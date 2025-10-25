import { motion } from 'framer-motion'

const About = () => {
  return (
    <section 
      id="about" 
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            About Me
          </h2>
          <div style={{ width: '5rem', height: '0.25rem', background: '#2563eb', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              width: '20rem',
              height: '20rem',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              borderRadius: '0.5rem',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '4rem' }}>👨💻</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.7' }}>
              I'm a passionate Computer Science student at R.M.K. Engineering College, 
              specializing in Computer Science and Business Systems with Honors in Business Analytics. 
              Currently maintaining a GPA of 8.49/10.0 and expected to graduate in 2027.
            </p>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.7' }}>
              My journey in technology spans full-stack development, IoT systems, and AI/ML applications. 
              I've led teams in hackathons, developed innovative projects, and gained practical experience 
              through internships at Neyveli Lignite Corporation.
            </p>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.7' }}>
              I'm particularly interested in Data Structures & Algorithms, Computer Networks, 
              and emerging technology trends. I enjoy solving complex problems and creating 
              user-friendly applications that make a real impact.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem' }}>
              {['Team Leadership', 'Full-Stack Development', 'Problem Solving', 'Innovation'].map(skill => (
                <span
                  key={skill}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#dbeafe',
                    color: '#1d4ed8',
                    borderRadius: '9999px',
                    fontSize: '0.875rem'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
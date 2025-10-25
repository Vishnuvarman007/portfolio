import { motion } from 'framer-motion'
import { Briefcase, Users, Trophy, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Internship',
      company: 'Neyveli Lignite Corporation',
      type: 'Industrial Experience',
      icon: <Briefcase size={24} />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Team Leader',
      company: 'Smart India Hackathon',
      type: 'Leadership Role',
      icon: <Users size={24} />,
      color: 'bg-green-100 text-green-600'
    }
  ]

  const hackathons = [
    {
      name: 'E-Summit Hackathon',
      venue: 'IIT Madras',
      status: 'Attended',
      icon: <Trophy size={20} />
    },
    {
      name: 'ABACUS\'25',
      venue: 'Anna University',
      status: 'Attended',
      icon: <Trophy size={20} />
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:bg-white/90 transition-all duration-300 border border-white/30"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${exp.color}`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">
                      {exp.company}
                    </p>
                    <span className="inline-block px-3 py-1 bg-white text-gray-600 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathons & Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hackathons & Appearances</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 border border-primary-100"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-600">
                      {hackathon.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {hackathon.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-2">{hackathon.venue}</p>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {hackathon.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
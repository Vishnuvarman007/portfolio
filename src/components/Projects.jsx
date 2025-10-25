import { motion } from 'framer-motion'
import { ExternalLink, Github, Cpu, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Onion Storage',
      subtitle: 'IoT Team Project',
      description: 'IoT system with multi-sensor monitoring and solar-powered ventilation. AI/ML models for predicting onion shelf life and spoilage risk. Farmer-friendly dashboard with multilingual support and real-time alerts.',
      technologies: ['IoT', 'AI/ML', 'Solar Power', 'Multi-sensor', 'Dashboard'],
      icon: <Cpu size={32} />,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'QR Code Ticket Booking',
      subtitle: 'Individual Project',
      description: 'Full-stack app using React (frontend), Spring Boot (backend), MySQL (database). QR code generation + scanning for secure ticket verification. Responsive UI with seat selection, booking history, and real-time availability.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'QR Code', 'Full-Stack'],
      icon: <Smartphone size={32} />,
      color: 'from-blue-400 to-blue-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-100 relative">
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                <div className="text-white">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
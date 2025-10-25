import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 to-pink-100 relative">
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-blue-400 rotate-45 opacity-10 animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary-600">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <GraduationCap size={32} className="text-primary-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology
                </h3>
                <h4 className="text-xl text-primary-600 mb-4">
                  Computer Science and Business Systems (Honors with Business Analytics)
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={18} />
                    <span>Expected Graduation: 2027</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={18} />
                    <span>Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award size={18} />
                    <span>GPA: 8.49 / 10.0</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Institution</h5>
                  <p className="text-gray-700">R.M.K. Engineering College</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <h4 className="font-semibold text-gray-900">NPTEL</h4>
              </div>
              <p className="text-gray-600">Operating System Certificate</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <h4 className="font-semibold text-gray-900">Udemy</h4>
              </div>
              <p className="text-gray-600">Java for Programmers Crash Course</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
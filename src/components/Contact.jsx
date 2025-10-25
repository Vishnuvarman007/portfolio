import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Code, MapPin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'vishnuvarmanp@gmail.com',
      href: 'mailto:vishnuvarmanp@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9791251129',
      href: 'tel:+919791251129',
      color: 'text-green-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: null,
      color: 'text-blue-500'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Vishnuvarman007',
      color: 'hover:text-gray-700'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vishnu-varman-p-b368a12a3/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Code size={24} />,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Vishnu273_/',
      color: 'hover:text-orange-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative">
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 left-40 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-white hover:text-primary-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-colors ${social.color}`}
                  >
                    {social.icon}
                    <span className="mt-2 text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold mb-4">Let's Work Together</h4>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind, want to collaborate, 
                or just want to say hello, I'd love to hear from you!
              </p>
              <a
                href="mailto:vishnuvarmanp@gmail.com"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Send Me an Email
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2024 Vishnu Varman P. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
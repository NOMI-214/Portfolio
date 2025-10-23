import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import cehImage from '../assets/Images/CEH.png';
import ciscoImage from '../assets/Images/CISCO.png';
import dhcImage from '../assets/Images/DHC.png';
import jsImage from '../assets/Images/JavaScript.png';
import ucDavisImage from '../assets/Images/UC David.png';
import speedProgrammingImage from '../assets/Images/SPEED PROGRAMMING.png';
import workshopImage from '../assets/Images/workshop.jfif';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'CEH (Certified Ethical Hacker)',
      issuer: 'EC-Council',
      date: '2024',
      description: 'Certified in ethical hacking and cybersecurity practices',
      image: cehImage,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cisco Networking Certificate',
      issuer: 'Cisco',
      date: '2024',
      description: 'Network fundamentals and routing protocols',
      image: ciscoImage,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'JavaScript Certificate',
      issuer: 'BoardInfinity',
      date: '2024',
      description: 'Advanced JavaScript programming and ES6+ features',
      image: jsImage,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'JavaScript Certificate',
      issuer: 'UC Davis',
      date: '2024',
      description: 'Interactive web development with JavaScript',
      image: ucDavisImage,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Visualization Workshop',
      issuer: 'GIKI, Swabi',
      date: '2024',
      description: 'Business Intelligence and data visualization techniques',
      image: workshopImage,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Speed Programming Competition',
      issuer: 'AWKUM, Mardan',
      date: '2024',
      description: 'Competitive programming and algorithm optimization',
      image: speedProgrammingImage,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      title: 'DHC Certificate',
      issuer: 'Developer Hub',
      date: '2024',
      description: 'Front-end development and modern web technologies',
      image: dhcImage,
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-6 h-full hover:glow-effect transition-all duration-300 tilt-hover">
                {/* Certificate Image */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="w-full h-32 mb-4 rounded-lg overflow-hidden"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text group-hover:text-white transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Award size={16} />
                    <span>{cert.issuer}</span>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {cert.date}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Gradient Border Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} p-[1px] opacity-0 transition-opacity duration-300`}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-900/90"></div>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '7', label: 'Total Certifications', icon: '🏆' },
                { number: '4', label: 'Programming Languages', icon: '💻' },
                { number: '3', label: 'Workshops Attended', icon: '🎓' },
                { number: '100%', label: 'Completion Rate', icon: '✅' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="text-3xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

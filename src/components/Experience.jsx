import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Front-End Developer Intern',
      company: 'Developer Hub',
      location: 'Remote',
      duration: '6 Weeks',
      period: '2024',
      description: 'Developed responsive web applications using React and modern JavaScript. Collaborated with cross-functional teams to deliver high-quality user interfaces.',
      technologies: ['React', 'JavaScript', 'CSS', 'Git'],
      type: 'Internship',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Front-End Developer Intern',
      company: 'EziTech Software House',
      location: 'Rawalpindi',
      duration: '3 Months',
      period: '2024',
      description: 'Built scalable front-end solutions and optimized web performance. Worked on real-world projects with focus on user experience and code quality.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Figma'],
      type: 'Onsite',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Front-End Developer Intern',
      company: 'CodeAlpha',
      location: 'Remote',
      duration: '3 Months',
      period: '2024',
      description: 'Created interactive web applications and implemented modern UI/UX designs. Gained experience in agile development methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      type: 'Remote',
      color: 'from-green-500 to-teal-500'
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
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey through internships and real-world projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 transform md:-translate-x-0.5"
            style={{ height: 'calc(100% - 2rem)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform md:-translate-x-2 z-10"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold gradient-text group-hover:text-white transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <Briefcase size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}
                      >
                        {exp.type}
                      </motion.div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.duration} • {exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + techIndex * 0.05 + 0.5 
                          }}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-xs text-gray-300 border border-white/10"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <ExternalLink size={16} className="text-white" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Experience Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: '3', label: 'Internships Completed', icon: '💼' },
                { number: '9+', label: 'Months Experience', icon: '📅' },
                { number: '15+', label: 'Technologies Used', icon: '⚡' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
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

export default Experience;

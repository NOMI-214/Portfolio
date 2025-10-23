import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Mail, MapPin } from 'lucide-react';
import profileImage from '../assets/Images/profile.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({
    projects: 0,
    certifications: 0,
    experience: 0,
    satisfaction: 0,
  });

  const targetCounts = {
    projects: 15,
    certifications: 6,
    experience: 1,
    satisfaction: 100,
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetCounts).forEach((key) => {
        let current = 0;
        const increment = targetCounts[key] / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetCounts[key]) {
            setCounts(prev => ({ ...prev, [key]: targetCounts[key] }));
            clearInterval(timer);
          } else {
            setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, stepDuration);
      });
    }
  }, [isInView]);

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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-64 h-64 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500"
              >
                <img
                  src={profileImage}
                  alt="Muhammad Nouman"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Muhammad Nouman
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm Muhammad Nouman, a Computer Science student and Full Stack Developer 
                specializing in front-end engineering. I create scalable, interactive, and 
                visually appealing web experiences that combine creativity with technical expertise.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-purple-400" size={20} />
                  <span className="text-gray-300">Bachelor's in Computer Science</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Current Role: Front-End Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-gray-300">inouman2014@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Pakistan</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { key: 'projects', label: 'Projects Completed', icon: '🚀' },
                { key: 'certifications', label: 'Certifications', icon: '🏆' },
                { key: 'experience', label: 'Years Experience', icon: '💼' },
                { key: 'satisfaction', label: 'Client Satisfaction', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center hover:glow-effect transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {counts[stat.key]}+
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Floating Blob Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl absolute -top-16 -right-16"></div>
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl absolute -bottom-8 -left-8"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '🎓 Education',
                description: 'Pursuing Bachelor\'s in Computer Science with focus on software engineering and web development.',
              },
              {
                title: '💻 Specialization',
                description: 'Front-End Development with expertise in React, JavaScript, and modern web technologies.',
              },
              {
                title: '🚀 Passion',
                description: 'Creating innovative solutions and continuously learning new technologies to stay ahead.',
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-3 gradient-text">
                  {highlight.title}
                </h4>
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

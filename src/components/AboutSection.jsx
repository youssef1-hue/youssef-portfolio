import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, TrendingUp, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Precision-Focused',
      description: 'Meticulous attention to data accuracy and detail'
    },
    {
      icon: TrendingUp,
      title: 'Business-Driven',
      description: 'Connecting insights to real business outcomes'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Always exploring new tools and techniques'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image/Icon */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Profile Circle */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                  <User className="w-32 h-32 text-white" />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p className="text-xl leading-relaxed mb-6">
                  I'm <span className="font-semibold text-blue-600">Youssef Nasr</span>, a data analyst with a strong passion for turning raw data into meaningful insights that drive smart decisions.
                </p>
                
                <p className="mb-6">
                  With a background in accounting, I've developed solid skills in <span className="font-semibold text-slate-800">Excel, Power BI, and SQL</span>, and worked on real-world projects that combine accuracy, clarity, and business value.
                </p>
                
                <p className="mb-6">
                  I enjoy working with data—from cleaning and organizing to analyzing and visualizing it in a way that supports clear outcomes. I'm always eager to learn new tools and techniques that enhance my analytical capabilities.
                </p>
                
                <p className="text-lg font-medium text-slate-800">
                  If you're looking for someone who values precision and understands how to make data work for business goals, I'm ready to help you uncover the stories behind the numbers.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


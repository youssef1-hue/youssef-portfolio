import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Database, BarChart3, Code, Search, TrendingUp } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: 'Excel',
      level: 90,
      icon: FileSpreadsheet,
      color: 'from-green-500 to-emerald-500',
      description: 'Advanced formulas, Pivot Tables, VBA'
    },
    {
      name: 'Power BI',
      level: 85,
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500',
      description: 'DAX, Data Modeling, Interactive Dashboards'
    },
    {
      name: 'SQL',
      level: 80,
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      description: 'Complex Queries, Database Design, Optimization'
    },
    {
      name: 'Python',
      level: 75,
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      description: 'Pandas, NumPy, Data Analysis Libraries'
    },
    {
      name: 'Power Query',
      level: 85,
      icon: Search,
      color: 'from-indigo-500 to-blue-500',
      description: 'Data Transformation, ETL Processes'
    },
    {
      name: 'Data Analysis',
      level: 88,
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500',
      description: 'Statistical Analysis, Business Intelligence'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical skills and tools I use to transform data into actionable insights
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Skill Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-slate-600 mb-4 text-sm">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Proficiency</span>
                    <span className="text-sm font-bold text-slate-800">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: isVisible ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 1.5 }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Skill Level Badge */}
                <motion.div
                  className="inline-flex items-center px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Additional Competencies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Data Visualization',
                'Statistical Analysis',
                'Business Intelligence',
                'ETL Processes',
                'Data Cleaning',
                'Report Automation',
                'KPI Development',
                'Trend Analysis',
                'Financial Modeling',
                'Dashboard Design'
              ].map((competency, index) => (
                <motion.span
                  key={competency}
                  className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-cyan-100 hover:text-blue-700 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Continuous Learning
            </h3>
            <p className="text-slate-600 text-center max-w-3xl mx-auto">
              I'm constantly expanding my skill set through online courses, certifications, and hands-on projects. 
              Currently exploring advanced machine learning techniques and cloud-based analytics platforms to stay 
              at the forefront of data analysis trends.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


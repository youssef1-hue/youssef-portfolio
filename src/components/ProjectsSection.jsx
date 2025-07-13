import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, Database } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Sales Dashboard',
      subtitle: 'تحليل المبيعات',
      description: 'تحليل مبيعات شركة تجزئة خلال عام كامل مع مؤشرات الأداء الرئيسية وتحليل الاتجاهات الموسمية.',
      tools: ['Excel', 'Pivot Tables', 'Power Query'],
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Customer Analytics',
      subtitle: 'تحليل العملاء',
      description: 'تحليل سلوك العملاء وتجزئتهم باستخدام تقنيات التحليل المتقدمة لتحسين استراتيجيات التسويق.',
      tools: ['Power BI', 'SQL', 'DAX'],
      icon: PieChart,
      color: 'from-purple-500 to-pink-500',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Financial Report',
      subtitle: 'التقرير المالي',
      description: 'إنشاء تقارير مالية تفاعلية مع تحليل الربحية والتكاليف وتوقعات الأداء المستقبلي.',
      tools: ['Excel', 'Power BI', 'Python'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Inventory Management',
      subtitle: 'إدارة المخزون',
      description: 'نظام تحليل المخزون مع تتبع مستويات المخزون وتحليل دوران المنتجات وتحسين عمليات الشراء.',
      tools: ['SQL', 'Power Query', 'Excel'],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      demo: '#',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Projects Gallery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore my data analysis projects that showcase real-world problem-solving and business insights
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <project.icon className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                  
                  {/* Overlay with Links */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {/* Removed GitHub link for individual projects */}
                    <motion.a
                      href={project.demo}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools/Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: toolIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* Removed GitHub button for individual projects */}
                    <motion.a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Removed View All Projects on GitHub button */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;



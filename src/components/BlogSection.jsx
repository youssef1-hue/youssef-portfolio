import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential Excel Functions Every Data Analyst Should Master',
      excerpt: 'Discover the most powerful Excel functions that can transform your data analysis workflow and boost your productivity.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Excel Tips',
      image: '/api/placeholder/400/250',
      tags: ['Excel', 'Functions', 'Productivity'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Interactive Dashboards with Power BI',
      excerpt: 'Step-by-step guide to creating compelling and interactive dashboards that tell a story with your data.',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Power BI',
      image: '/api/placeholder/400/250',
      tags: ['Power BI', 'Dashboards', 'Visualization']
    },
    {
      id: 3,
      title: 'SQL Query Optimization Techniques for Better Performance',
      excerpt: 'Learn advanced SQL optimization techniques to make your queries faster and more efficient.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'SQL',
      image: '/api/placeholder/400/250',
      tags: ['SQL', 'Optimization', 'Performance']
    },
    {
      id: 4,
      title: 'Data Cleaning Best Practices: From Messy to Meaningful',
      excerpt: 'Master the art of data cleaning with proven techniques and tools that ensure data quality and reliability.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Data Analysis',
      image: '/api/placeholder/400/250',
      tags: ['Data Cleaning', 'Best Practices', 'Quality']
    },
    {
      id: 5,
      title: 'Python for Data Analysis: Getting Started Guide',
      excerpt: 'A beginner-friendly introduction to using Python for data analysis with pandas and numpy.',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Python',
      image: '/api/placeholder/400/250',
      tags: ['Python', 'Pandas', 'Beginner']
    },
    {
      id: 6,
      title: 'Creating Effective Data Visualizations: Design Principles',
      excerpt: 'Learn the fundamental design principles that make data visualizations clear, compelling, and actionable.',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Visualization',
      image: '/api/placeholder/400/250',
      tags: ['Visualization', 'Design', 'Charts']
    }
  ];

  const categories = ['All', 'Excel Tips', 'Power BI', 'SQL', 'Data Analysis', 'Python', 'Visualization'];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="blog" className="py-20 bg-white">
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
              Latest Blog Posts
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Insights, tips, and tutorials about data analysis, visualization, and business intelligence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-800 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white text-slate-600 rounded-full text-sm flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <User className="w-24 h-24 text-white/50" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <User className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-slate-500 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <motion.button
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest insights on data analysis, 
              visualization techniques, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <motion.button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


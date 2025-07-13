import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechCorp Solutions',
      content: 'Youssef delivered exceptional insights that transformed our marketing strategy. His ability to translate complex data into actionable recommendations is remarkable.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      position: 'Operations Manager',
      company: 'RetailMax',
      content: 'Working with Youssef was a game-changer for our inventory management. His analytical skills helped us reduce costs by 25% while improving efficiency.',
      rating: 5,
      avatar: 'AH'
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Finance Director',
      company: 'GrowthVentures',
      content: 'Youssef\'s financial analysis and reporting capabilities are outstanding. He provided clear, accurate insights that guided our investment decisions.',
      rating: 5,
      avatar: 'EC'
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      position: 'CEO',
      company: 'DataDriven Inc.',
      content: 'Exceptional attention to detail and business acumen. Youssef consistently delivers high-quality analysis that drives real business value.',
      rating: 5,
      avatar: 'MR'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What clients say about working with me
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          {/* Main Testimonial Display */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Quote Icon */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-100" />
                
                {/* Stars Rating */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  className="text-xl md:text-2xl text-slate-700 text-center mb-8 leading-relaxed italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  "{testimonials[currentIndex].content}"
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  
                  {/* Client Details */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-slate-800">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-600 font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid (Mobile-friendly) */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Mini Stars */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Mini Content */}
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  "{testimonial.content.substring(0, 120)}..."
                </p>

                {/* Mini Client Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-slate-500 text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


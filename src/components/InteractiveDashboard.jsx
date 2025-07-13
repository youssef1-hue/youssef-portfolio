import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';

const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('sales');
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    customers: 0,
    orders: 0,
    growth: 0
  });

  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 4000, target: 3500 },
    { month: 'Feb', sales: 3000, target: 3200 },
    { month: 'Mar', sales: 5000, target: 4000 },
    { month: 'Apr', sales: 4500, target: 4200 },
    { month: 'May', sales: 6000, target: 5000 },
    { month: 'Jun', sales: 5500, target: 5200 }
  ];

  const customerData = [
    { month: 'Jan', customers: 120 },
    { month: 'Feb', customers: 150 },
    { month: 'Mar', customers: 180 },
    { month: 'Apr', customers: 200 },
    { month: 'May', customers: 250 },
    { month: 'Jun', customers: 280 }
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 25, color: '#10B981' },
    { name: 'Books', value: 20, color: '#F59E0B' },
    { name: 'Home', value: 20, color: '#EF4444' }
  ];

  const kpiData = [
    {
      title: 'Total Revenue',
      value: 125000,
      change: 12.5,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      prefix: '$'
    },
    {
      title: 'Active Customers',
      value: 1250,
      change: 8.2,
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      prefix: ''
    },
    {
      title: 'Total Orders',
      value: 3420,
      change: -2.1,
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      prefix: ''
    },
    {
      title: 'Page Views',
      value: 45600,
      change: 15.3,
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      prefix: ''
    }
  ];

  // Animate KPI values on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        revenue: 125000,
        customers: 1250,
        orders: 3420,
        growth: 15.3
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
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
              Interactive Dashboard
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A sample of my data visualization capabilities - Real-time business metrics and insights
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </motion.div>

          {/* KPI Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {kpiData.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center`}>
                    <kpi.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    kpi.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {Math.abs(kpi.change)}%
                  </div>
                </div>
                
                <h3 className="text-slate-600 text-sm font-medium mb-1">{kpi.title}</h3>
                <motion.p
                  className="text-3xl font-bold text-slate-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {kpi.prefix}{formatNumber(kpi.value)}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard Tabs */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-200">
              {[
                { id: 'sales', label: 'Sales Analytics', icon: BarChart },
                { id: 'customers', label: 'Customer Growth', icon: Users },
                { id: 'categories', label: 'Category Breakdown', icon: PieChart }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'sales' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Sales vs Target Performance</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="month" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#f8fafc', 
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px'
                          }} 
                        />
                        <Bar dataKey="target" fill="#e2e8f0" name="Target" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="sales" fill="#3b82f6" name="Actual Sales" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {activeTab === 'customers' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Customer Growth Trend</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={customerData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="month" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#f8fafc', 
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="customers" 
                          stroke="#10b981" 
                          strokeWidth={3}
                          dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                          activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {activeTab === 'categories' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Sales by Category</h3>
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="h-80 flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      {categoryData.map((category, index) => (
                        <motion.div
                          key={category.name}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: category.color }}
                            ></div>
                            <span className="font-medium text-slate-800">{category.name}</span>
                          </div>
                          <span className="text-2xl font-bold text-slate-800">{category.value}%</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Dashboard Features */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Dashboard Capabilities
              </h3>
              <p className="text-slate-600 max-w-3xl mx-auto">
                This interactive dashboard demonstrates my ability to create engaging data visualizations 
                using modern tools like Power BI, Excel, and web technologies. I can build custom dashboards 
                that provide real-time insights and support data-driven decision making.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboard;


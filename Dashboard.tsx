import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  Target,
  Star,
  Calendar,
  Play,
  CheckCircle,
  BarChart3,
  Sprout,
  Coins,
  TreePine,
  Flower,
  Sun,
  Leaf
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Gardens Tended',
      value: '8',
      change: '+3 this season',
      icon: TreePine,
      color: 'from-emerald-400 to-green-500'
    },
    {
      title: 'Gardens Bloomed',
      value: '12',
      change: '+5 this season',
      icon: Flower,
      color: 'from-pink-400 to-rose-500'
    },
    {
      title: 'ICP Seeds Harvested',
      value: '3,450',
      change: '+1,200 this season',
      icon: Coins,
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Growth Streak',
      value: '18 days',
      change: 'Flourishing!',
      icon: Sun,
      color: 'from-yellow-400 to-amber-500'
    }
  ];

  const activeGardens = [
    {
      id: 1,
      title: 'Blockchain Ecosystem Fundamentals',
      instructor: 'Dr. Maya Greenfield',
      progress: 75,
      totalModules: 14,
      completedModules: 11,
      nextModule: 'Consensus Mechanisms',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=300&h=200&fit=crop',
      deadline: '2024-03-20',
      difficulty: 'Growing Sapling'
    },
    {
      id: 2,
      title: 'DeFi Protocol Cultivation',
      instructor: 'Luna Chen',
      progress: 56,
      totalModules: 16,
      completedModules: 9,
      nextModule: 'Yield Farming Strategies',
      image: 'https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg?w=300&h=200&fit=crop',
      deadline: '2024-03-25',
      difficulty: 'Flourishing Tree'
    },
    {
      id: 3,
      title: 'Web3 Application Orchard',
      instructor: 'Sage Williams',
      progress: 89,
      totalModules: 13,
      completedModules: 12,
      nextModule: 'Final Harvest Project',
      image: 'https://images.pexels.com/photos/5380662/pexels-photo-5380662.jpeg?w=300&h=200&fit=crop',
      deadline: '2024-03-15',
      difficulty: 'Growing Strong'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Bloom',
      description: 'Completed your first learning garden successfully',
      icon: Flower,
      date: '2024-01-15',
      tokens: 200,
      unlocked: true,
      rarity: 'rare'
    },
    {
      id: 2,
      title: 'Garden Tender',
      description: 'Nurtured 10 gardens to full bloom',
      icon: Sprout,
      date: '2024-02-01',
      tokens: 500,
      unlocked: true,
      rarity: 'epic'
    },
    {
      id: 3,
      title: 'Forest Guardian',
      description: 'Master all core blockchain ecosystems',
      icon: TreePine,
      date: null,
      tokens: 1000,
      unlocked: false,
      rarity: 'legendary'
    },
    {
      id: 4,
      title: 'Community Gardener',
      description: 'Helped 25+ learners in their growth journey',
      icon: Users,
      date: '2024-02-10',
      tokens: 300,
      unlocked: true,
      rarity: 'uncommon'
    }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 3.5, growth: 85 },
    { day: 'Tue', hours: 4.2, growth: 92 },
    { day: 'Wed', hours: 2.8, growth: 78 },
    { day: 'Thu', hours: 5.1, growth: 96 },
    { day: 'Fri', hours: 3.7, growth: 88 },
    { day: 'Sat', hours: 4.8, growth: 94 },
    { day: 'Sun', hours: 3.9, growth: 90 }
  ];

  const maxHours = Math.max(...weeklyActivity.map(day => day.hours));

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'uncommon': return 'from-green-400 to-emerald-500';
      case 'rare': return 'from-blue-400 to-cyan-500';
      case 'epic': return 'from-purple-400 to-pink-500';
      case 'legendary': return 'from-amber-400 to-orange-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-emerald-800 mb-4"
          >
            Your Learning
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent ml-2">
              Garden
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-700 text-lg"
          >
            Welcome back, Alex! Continue nurturing your knowledge and watch your skills bloom
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-6 hover:border-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-bold text-emerald-800 mb-2">{stat.value}</h3>
                <p className="text-sm text-emerald-600 mb-2">{stat.title}</p>
                <p className="text-sm text-emerald-500 font-medium">{stat.change}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Gardens */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-emerald-800 flex items-center space-x-3">
                  <TreePine className="w-7 h-7 text-emerald-500" />
                  <span>Growing Gardens</span>
                </h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  View All Gardens
                </button>
              </div>
              
              <div className="space-y-6">
                {activeGardens.map((garden) => (
                  <div key={garden.id} className="bg-emerald-50/50 rounded-xl p-6 border border-emerald-200 hover:border-emerald-300 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <img
                        src={garden.image}
                        alt={garden.title}
                        className="w-20 h-20 rounded-xl object-cover border-2 border-emerald-200"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-emerald-800 text-lg">{garden.title}</h3>
                          <span className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-300">
                            {garden.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-emerald-600 mb-3">Gardener: {garden.instructor}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-emerald-600">Growth Progress</span>
                            <span className="font-bold text-emerald-700">{garden.progress}%</span>
                          </div>
                          <div className="w-full bg-emerald-200 rounded-full h-3 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${garden.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-emerald-600">
                            {garden.completedModules}/{garden.totalModules} modules bloomed
                          </span>
                          <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                            <Play className="w-4 h-4" />
                            <span>Continue Growing</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Growth Activity Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-emerald-800 mb-8 flex items-center space-x-3">
                <BarChart3 className="w-7 h-7 text-emerald-500" />
                <span>Weekly Growth Activity</span>
              </h2>
              
              <div className="flex items-end justify-between h-48 mb-6">
                {weeklyActivity.map((day, index) => (
                  <div key={day.day} className="flex flex-col items-center space-y-3">
                    <div className="flex items-end h-40 space-x-1">
                      <div
                        className="bg-gradient-to-t from-emerald-500 to-green-600 rounded-t-lg w-6 transition-all duration-500"
                        style={{ height: `${(day.hours / maxHours) * 100}%` }}
                      ></div>
                      <div
                        className="bg-gradient-to-t from-amber-500 to-orange-600 rounded-t-lg w-6 transition-all duration-500"
                        style={{ height: `${(day.growth / 100) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-emerald-600 font-medium">{day.day}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded"></div>
                  <span className="text-emerald-600">Learning Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded"></div>
                  <span className="text-emerald-600">Growth Rate</span>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-emerald-600">
                  Total growth time this week: <span className="font-bold text-emerald-700">26 hours</span>
                  <span className="mx-2">•</span>
                  Average growth rate: <span className="font-bold text-amber-600">89%</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Garden Achievements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-emerald-800 mb-6 flex items-center space-x-3">
                <Award className="w-6 h-6 text-amber-500" />
                <span>Garden Achievements</span>
              </h2>
              
              <div className="space-y-4">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={achievement.id} 
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${getRarityColor(achievement.rarity)} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold mb-1 ${
                            achievement.unlocked ? 'text-emerald-800' : 'text-gray-500'
                          }`}>
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-emerald-600 mb-2">{achievement.description}</p>
                          <div className="flex items-center space-x-3 text-sm">
                            <div className="flex items-center space-x-1 text-amber-600">
                              <Coins className="w-4 h-4" />
                              <span className="font-bold">{achievement.tokens} ICP</span>
                            </div>
                            {achievement.date && (
                              <span className="text-emerald-500">• {achievement.date}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Growth Goals */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-emerald-800 mb-6 flex items-center space-x-3">
                <Target className="w-6 h-6 text-emerald-500" />
                <span>Growth Goals</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <TreePine className="w-5 h-5 text-emerald-500" />
                  <div className="flex-1">
                    <p className="font-medium text-emerald-800 mb-2">Bloom 3 gardens this season</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-emerald-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">2/3</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <div className="flex-1">
                    <p className="font-medium text-emerald-800 mb-2">Tend gardens 20+ hours weekly</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-emerald-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full" style={{ width: '130%' }}></div>
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">26/20</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-amber-500" />
                  <div className="flex-1">
                    <p className="font-medium text-emerald-800 mb-2">Harvest 4000 ICP seeds</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-emerald-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full" style={{ width: '86%' }}></div>
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">3450/4000</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Garden Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-emerald-200 p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-emerald-800 mb-6">Quick Garden Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg">
                  Explore New Gardens
                </button>
                <button className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 py-3 rounded-xl font-medium transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300">
                  Join Garden Community
                </button>
                <button className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 py-3 rounded-xl font-medium transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300">
                  View Growth Certificates
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
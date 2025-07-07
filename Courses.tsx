import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Award,
  TrendingUp,
  ChevronDown,
  BookOpen,
  Play,
  Sprout,
  TreePine,
  Flower,
  Sun,
  Leaf
} from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Learning Gardens' },
    { id: 'blockchain', name: 'Blockchain Forest' },
    { id: 'smart-contracts', name: 'Smart Contract Grove' },
    { id: 'defi', name: 'DeFi Meadow' },
    { id: 'nft', name: 'NFT Flower Field' },
    { id: 'web3', name: 'Web3 Orchard' },
    { id: 'security', name: 'Security Sanctuary' }
  ];

  const levels = [
    { id: 'all', name: 'All Growth Stages' },
    { id: 'beginner', name: 'Seedling' },
    { id: 'intermediate', name: 'Sapling' },
    { id: 'advanced', name: 'Mighty Oak' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Blockchain Ecosystem Fundamentals',
      instructor: 'Dr. Maya Greenfield',
      category: 'blockchain',
      level: 'intermediate',
      rating: 4.9,
      students: 3247,
      duration: '10 weeks',
      price: 249,
      tokens: 1000,
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=400&h=250&fit=crop',
      description: 'Cultivate deep understanding of blockchain technology in our nurturing learning environment.',
      modules: 14,
      featured: true,
      difficulty: 'Growing Sapling'
    },
    {
      id: 2,
      title: 'Smart Contract Garden Design',
      instructor: 'Alex Fernandez',
      category: 'smart-contracts',
      level: 'advanced',
      rating: 4.8,
      students: 2156,
      duration: '8 weeks',
      price: 329,
      tokens: 1300,
      image: 'https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?w=400&h=250&fit=crop',
      description: 'Master the art of creating secure and efficient smart contracts that bloom beautifully.',
      modules: 12,
      featured: false,
      difficulty: 'Mighty Oak'
    },
    {
      id: 3,
      title: 'DeFi Protocol Cultivation',
      instructor: 'Luna Chen',
      category: 'defi',
      level: 'intermediate',
      rating: 4.7,
      students: 2834,
      duration: '12 weeks',
      price: 289,
      tokens: 1150,
      image: 'https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg?w=400&h=250&fit=crop',
      description: 'Grow thriving DeFi protocols that provide sustainable yield for the ecosystem.',
      modules: 16,
      featured: true,
      difficulty: 'Flourishing Tree'
    },
    {
      id: 4,
      title: 'NFT Marketplace Blooming',
      instructor: 'River Johnson',
      category: 'nft',
      level: 'beginner',
      rating: 4.6,
      students: 4521,
      duration: '6 weeks',
      price: 179,
      tokens: 700,
      image: 'https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg?w=400&h=250&fit=crop',
      description: 'Plant the seeds for beautiful NFT marketplaces that flourish in the digital landscape.',
      modules: 10,
      featured: false,
      difficulty: 'Fresh Seedling'
    },
    {
      id: 5,
      title: 'Web3 Application Orchard',
      instructor: 'Sage Williams',
      category: 'web3',
      level: 'intermediate',
      rating: 4.8,
      students: 3156,
      duration: '9 weeks',
      price: 259,
      tokens: 1050,
      image: 'https://images.pexels.com/photos/5380662/pexels-photo-5380662.jpeg?w=400&h=250&fit=crop',
      description: 'Cultivate beautiful Web3 applications that bear fruit for users worldwide.',
      modules: 13,
      featured: true,
      difficulty: 'Growing Strong'
    },
    {
      id: 6,
      title: 'Blockchain Security Sanctuary',
      instructor: 'Forest Kim',
      category: 'security',
      level: 'advanced',
      rating: 4.9,
      students: 1876,
      duration: '14 weeks',
      price: 399,
      tokens: 1600,
      image: 'https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?w=400&h=250&fit=crop',
      description: 'Protect the digital forest with advanced security practices and defensive strategies.',
      modules: 18,
      featured: false,
      difficulty: 'Ancient Guardian'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-300';
      case 'intermediate': return 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border-amber-300';
      case 'advanced': return 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-rose-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-emerald-800 mb-6"
          >
            Learning
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {' '}Gardens
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-700 max-w-3xl mx-auto"
          >
            Discover courses that grow with you in our nurturing educational ecosystem. 
            Plant knowledge seeds and harvest ICP tokens as your skills bloom.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-emerald-200 p-8 mb-12 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500 w-6 h-6" />
              <input
                type="text"
                placeholder="Search learning gardens, expert gardeners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-emerald-50/50 border-2 border-emerald-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none text-emerald-800 placeholder-emerald-500 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-emerald-50/50 border-2 border-emerald-200 text-emerald-800 px-6 py-4 pr-12 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none cursor-pointer transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-white">
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5 pointer-events-none" />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="appearance-none bg-emerald-50/50 border-2 border-emerald-200 text-emerald-800 px-6 py-4 pr-12 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none cursor-pointer transition-all duration-300"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id} className="bg-white">
                    {level.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-emerald-700 text-lg">
            Found <span className="text-emerald-600 font-semibold">{filteredCourses.length}</span> of <span className="text-emerald-600 font-semibold">{courses.length}</span> learning gardens
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-emerald-200 overflow-hidden hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
                {course.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Sun className="w-4 h-4 inline mr-1" />
                    Featured Garden
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border border-emerald-200">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="text-sm font-bold text-emerald-800">{course.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getLevelColor(course.level)}`}>
                    {course.difficulty}
                  </span>
                  <div className="flex items-center space-x-1 text-amber-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-bold">{course.tokens} ICP</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-emerald-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-emerald-700 mb-4 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-emerald-600 mb-4">
                  <Leaf className="w-4 h-4 mr-1 text-emerald-500" />
                  <span className="font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-emerald-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.modules} modules</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-emerald-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    ${course.price}
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                  >
                    <Sprout className="w-4 h-4" />
                    <span>Start Growing</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <TreePine className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">No Learning Gardens Found</h3>
            <p className="text-emerald-600 text-lg">Try adjusting your search to discover new growth opportunities</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;
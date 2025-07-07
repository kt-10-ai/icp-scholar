import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Leaf, 
  Shield, 
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Globe,
  CheckCircle,
  Sprout,
  TreePine,
  Flower,
  Sun
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Sprout,
      title: 'Organic Growth',
      description: 'Nurture your knowledge with personalized learning paths that grow with you',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Sun,
      title: 'Bright Rewards',
      description: 'Harvest ICP tokens as you bloom through courses and achievements',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: TreePine,
      title: 'Forest Community',
      description: 'Connect with a thriving ecosystem of learners and knowledge sharers',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      icon: Flower,
      title: 'Blooming Security',
      description: 'Your achievements flourish safely on the ICP blockchain garden',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  const stats = [
    { number: '75K+', label: 'Growing Learners', icon: Users },
    { number: '3K+', label: 'Expert Gardeners', icon: Award },
    { number: '25M+', label: 'ICP Seeds Planted', icon: TrendingUp },
    { number: '300+', label: 'Learning Gardens', icon: Globe }
  ];

  const testimonials = [
    {
      name: 'Maya Patel',
      role: 'Blockchain Botanist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face',
      content: 'EcoLearn helped my knowledge bloom like never before. The organic approach to learning is revolutionary.'
    },
    {
      name: 'David Chen',
      role: 'DeFi Ecosystem Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face',
      content: 'The community here is like a thriving forest where everyone helps each other grow and flourish.'
    },
    {
      name: 'Luna Rodriguez',
      role: 'Web3 Nature Architect',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face',
      content: 'Earning tokens while learning feels as natural as photosynthesis. This platform is pure genius.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-teal-200/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <Leaf className="w-8 h-8 text-emerald-500 animate-bounce" />
              <span className="text-emerald-600 font-semibold text-lg">Organic Learning Ecosystem</span>
              <Flower className="w-8 h-8 text-pink-500 animate-bounce delay-300" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Grow Your
              <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 bg-clip-text text-transparent">
                {' '}Knowledge
              </span>
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Naturally
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-emerald-700 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Cultivate your blockchain expertise in our thriving learning ecosystem. 
              Plant seeds of knowledge, nurture your skills, and harvest ICP tokens as you bloom.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                to="/courses" 
                className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-3 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                <Sprout className="w-6 h-6" />
                <span>Start Growing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/dashboard" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-emerald-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300 hover:scale-105 shadow-lg"
              >
                Explore Garden
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-emerald-200 shadow-lg">
                    <Icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-emerald-700 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6"
            >
              Why Choose Our
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {' '}Learning Garden?
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Experience education that grows organically with your needs, 
              fostering natural learning in a supportive, thriving community ecosystem.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-4 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                  <p className="text-emerald-700 leading-relaxed group-hover:text-emerald-600 transition-colors">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Stories from Our
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                {' '}Growing Community
              </span>
            </h2>
            <p className="text-xl text-emerald-700">
              Discover how our learning garden has helped knowledge bloom across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-emerald-800 mb-8 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover border-3 border-emerald-200 shadow-md"
                  />
                  <div>
                    <div className="font-bold text-emerald-800">{testimonial.name}</div>
                    <div className="text-emerald-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-teal-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Plant Your
            <span className="bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
              {' '}Learning Seeds?
            </span>
          </h2>
          <p className="text-xl mb-12 text-emerald-100 max-w-2xl mx-auto">
            Join our thriving ecosystem where knowledge grows naturally and rewards bloom abundantly
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Sprout className="w-6 h-6" />
              <span>Browse Learning Gardens</span>
            </Link>
            <Link 
              to="/profile" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Sun className="w-6 h-6" />
              <span>Start Your Growth</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
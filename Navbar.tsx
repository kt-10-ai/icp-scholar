import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  User, 
  Menu, 
  X, 
  Leaf,
  Wallet,
  Sprout
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'Courses', path: '/courses', icon: Sprout },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Dashboard', path: '/dashboard', icon: Trophy },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className="bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg sticky top-0 z-50 border-b-2 border-emerald-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-bounce"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">
              EcoLearn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 shadow-md'
                      : 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-600 hover:text-emerald-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-200 rounded-b-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700'
                        : 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-semibold transition-all duration-300 mt-4">
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
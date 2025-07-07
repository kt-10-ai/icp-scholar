import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Award, 
  BookOpen, 
  Edit3, 
  Camera,
  Trophy,
  Star,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Mail,
  Phone,
  Coins,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'achievements', name: 'Achievements', icon: Trophy },
    { id: 'courses', name: 'My Courses', icon: BookOpen },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const userStats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen },
    { label: 'ICP Tokens Earned', value: '2,450', icon: Coins },
    { label: 'Certificates', value: '8', icon: Award },
    { label: 'Study Hours', value: '156', icon: TrendingUp }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Course Completed',
      description: 'Completed your first course successfully',
      icon: Trophy,
      date: '2024-01-15',
      tokens: 100,
      rarity: 'common'
    },
    {
      id: 2,
      title: 'Quick Learner',
      description: 'Completed 5 courses in a month',
      icon: TrendingUp,
      date: '2024-02-01',
      tokens: 200,
      rarity: 'rare'
    },
    {
      id: 3,
      title: 'Blockchain Expert',
      description: 'Mastered all blockchain fundamentals',
      icon: Award,
      date: '2024-02-15',
      tokens: 500,
      rarity: 'legendary'
    },
    {
      id: 4,
      title: 'Community Helper',
      description: 'Helped 10 students in discussions',
      icon: Users,
      date: '2024-02-10',
      tokens: 150,
      rarity: 'uncommon'
    }
  ];

  const completedCourses = [
    {
      id: 1,
      title: 'Blockchain Fundamentals',
      instructor: 'Dr. Sarah Chen',
      completedDate: '2024-01-15',
      rating: 5,
      certificate: true,
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      instructor: 'Alex Rodriguez',
      completedDate: '2024-01-28',
      rating: 4,
      certificate: true,
      image: 'https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'DeFi Protocols',
      instructor: 'Mike Johnson',
      completedDate: '2024-02-10',
      rating: 5,
      certificate: true,
      image: 'https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg?w=300&h=200&fit=crop'
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'uncommon': return 'from-green-400 to-green-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'legendary': return 'from-purple-400 to-purple-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
              <div className="relative -mt-16 mb-4 sm:mb-0">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Alex Rodriguez</h1>
                    <p className="text-gray-600 text-lg">Blockchain Developer & Learner</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined January 2024</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-b-2 border-purple-600 text-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium">alex.rodriguez@email.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <LinkIcon className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">Website</p>
                          <p className="font-medium text-purple-600">alexrodriguez.dev</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Passionate blockchain developer with a strong interest in decentralized finance 
                      and smart contract development. Currently learning advanced concepts on ICP Scholar 
                      to enhance my Web3 development skills.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Skills & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Blockchain', 'Smart Contracts', 'DeFi', 'Web3', 'Rust', 'JavaScript', 'React', 'Node.js'].map((skill) => (
                      <span key={skill} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={achievement.id} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getRarityColor(achievement.rarity)} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1 text-purple-600">
                                <Coins className="w-4 h-4" />
                                <span className="font-medium">{achievement.tokens} ICP</span>
                              </div>
                              <span className="text-gray-500">{achievement.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedCourses.map((course) => (
                    <div key={course.id} className="bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < course.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          {course.certificate && (
                            <div className="flex items-center space-x-1 text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-sm font-medium">Certified</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Completed {course.completedDate}</span>
                          <button className="text-purple-600 hover:text-purple-700 font-medium">
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates about your courses and achievements</p>
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        Enabled
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-gray-600">Get notified about new courses and deadlines</p>
                      </div>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        Disabled
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Privacy Settings</p>
                        <p className="text-sm text-gray-600">Control who can see your profile and achievements</p>
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        Public
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200">
                      Change Password
                    </button>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200">
                      Download My Data
                    </button>
                    <button className="w-full bg-red-100 hover:bg-red-200 text-red-700 py-3 rounded-lg font-medium transition-colors duration-200">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
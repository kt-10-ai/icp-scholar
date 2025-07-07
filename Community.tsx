import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Search, 
  Plus,
  Filter,
  TrendingUp,
  Star,
  Calendar,
  Eye,
  Reply,
  BookOpen,
  Award,
  Hash
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'discussions', name: 'Discussions', icon: MessageSquare },
    { id: 'study-groups', name: 'Study Groups', icon: Users },
    { id: 'achievements', name: 'Achievements', icon: Award },
    { id: 'leaderboard', name: 'Leaderboard', icon: TrendingUp }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for smart contract security on ICP',
      author: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=50&h=50&fit=crop&crop=face',
      category: 'Smart Contracts',
      replies: 23,
      likes: 45,
      views: 230,
      timeAgo: '2 hours ago',
      isPinned: true,
      tags: ['security', 'smart-contracts', 'icp']
    },
    {
      id: 2,
      title: 'How to optimize canister performance for large datasets?',
      author: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=50&h=50&fit=crop&crop=face',
      category: 'Development',
      replies: 12,
      likes: 28,
      views: 156,
      timeAgo: '4 hours ago',
      isPinned: false,
      tags: ['performance', 'optimization', 'canisters']
    },
    {
      id: 3,
      title: 'Understanding ICP tokenomics and staking rewards',
      author: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&crop=face',
      category: 'Economics',
      replies: 34,
      likes: 67,
      views: 412,
      timeAgo: '6 hours ago',
      isPinned: false,
      tags: ['tokenomics', 'staking', 'economics']
    },
    {
      id: 4,
      title: 'Weekly DeFi protocol analysis and discussion',
      author: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=50&h=50&fit=crop&crop=face',
      category: 'DeFi',
      replies: 8,
      likes: 19,
      views: 89,
      timeAgo: '1 day ago',
      isPinned: false,
      tags: ['defi', 'analysis', 'protocols']
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: 'ICP Beginners Circle',
      description: 'Perfect for those just starting their ICP journey',
      members: 156,
      category: 'Beginner',
      nextSession: '2024-03-15 18:00',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=300&h=200&fit=crop',
      isJoined: true
    },
    {
      id: 2,
      name: 'Smart Contract Builders',
      description: 'Advanced group focusing on building production-ready smart contracts',
      members: 89,
      category: 'Advanced',
      nextSession: '2024-03-16 19:00',
      image: 'https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?w=300&h=200&fit=crop',
      isJoined: false
    },
    {
      id: 3,
      name: 'DeFi Developers',
      description: 'Building the next generation of decentralized finance applications',
      members: 67,
      category: 'Intermediate',
      nextSession: '2024-03-17 20:00',
      image: 'https://images.pexels.com/photos/5380661/pexels-photo-5380661.jpeg?w=300&h=200&fit=crop',
      isJoined: true
    }
  ];

  const achievements = [
    {
      id: 1,
      user: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=50&h=50&fit=crop&crop=face',
      achievement: 'Completed Advanced Smart Contract Course',
      tokens: 500,
      timeAgo: '2 hours ago',
      type: 'course'
    },
    {
      id: 2,
      user: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=50&h=50&fit=crop&crop=face',
      achievement: 'Reached 100 Community Contributions',
      tokens: 200,
      timeAgo: '4 hours ago',
      type: 'community'
    },
    {
      id: 3,
      user: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&crop=face',
      achievement: 'First Place in Weekly Quiz',
      tokens: 300,
      timeAgo: '1 day ago',
      type: 'competition'
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      user: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=50&h=50&fit=crop&crop=face',
      tokens: 3450,
      coursesCompleted: 12,
      contributions: 89,
      change: '+2'
    },
    {
      rank: 2,
      user: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=50&h=50&fit=crop&crop=face',
      tokens: 2890,
      coursesCompleted: 10,
      contributions: 76,
      change: '0'
    },
    {
      rank: 3,
      user: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&crop=face',
      tokens: 2450,
      coursesCompleted: 8,
      contributions: 54,
      change: '+1'
    },
    {
      rank: 4,
      user: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=50&h=50&fit=crop&crop=face',
      tokens: 2100,
      coursesCompleted: 7,
      contributions: 42,
      change: '-1'
    }
  ];

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'text-green-600';
    if (change.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow learners, share knowledge, and grow together in our vibrant ICP Scholar community
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">5,234</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,456</div>
            <div className="text-sm text-gray-600">Discussions</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">89</div>
            <div className="text-sm text-gray-600">Study Groups</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12,340</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
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
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                {/* Search and Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>New Discussion</span>
                  </button>
                </div>

                {/* Discussions List */}
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <motion.div
                      key={discussion.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={discussion.avatar}
                          alt={discussion.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {discussion.isPinned && (
                              <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                                Pinned
                              </div>
                            )}
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                              {discussion.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span>by {discussion.author}</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-3">
                            {discussion.tags.map((tag) => (
                              <span key={tag} className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                <Hash className="w-3 h-3" />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Reply className="w-4 h-4" />
                              <span>{discussion.replies} replies</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{discussion.likes} likes</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{discussion.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'study-groups' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Study Groups</h2>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Create Group</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studyGroups.map((group) => (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
                    >
                      <img
                        src={group.image}
                        alt={group.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
                          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                            {group.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{group.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{group.members} members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Next: {group.nextSession}</span>
                          </div>
                        </div>
                        <button className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                          group.isJoined
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}>
                          {group.isJoined ? 'Joined' : 'Join Group'}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4"
                    >
                      <img
                        src={achievement.avatar}
                        alt={achievement.user}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900">{achievement.user}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{achievement.timeAgo}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{achievement.achievement}</p>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-600">{achievement.tokens} ICP tokens earned</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Top Learners</h2>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    {leaderboard.map((user) => (
                      <div key={user.rank} className="p-6 flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            user.rank === 1 ? 'bg-yellow-500' :
                            user.rank === 2 ? 'bg-gray-400' :
                            user.rank === 3 ? 'bg-orange-500' :
                            'bg-purple-600'
                          }`}>
                            {user.rank}
                          </div>
                        </div>
                        <img
                          src={user.avatar}
                          alt={user.user}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-gray-900">{user.user}</span>
                            <span className={`text-sm font-medium ${getChangeColor(user.change)}`}>
                              {user.change !== '0' && (user.change.startsWith('+') ? '↑' : '↓')} {user.change}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Tokens: </span>
                              <span className="font-medium">{user.tokens.toLocaleString()}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Courses: </span>
                              <span className="font-medium">{user.coursesCompleted}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Contributions: </span>
                              <span className="font-medium">{user.contributions}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Community;
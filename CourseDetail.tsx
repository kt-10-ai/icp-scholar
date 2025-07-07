import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Star, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  CheckCircle,
  Lock,
  Download,
  Share2,
  Heart,
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data (in a real app, this would come from an API)
  const course = {
    id: 1,
    title: 'Complete Blockchain Development with ICP',
    instructor: 'Dr. Sarah Chen',
    instructorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face',
    category: 'Blockchain',
    level: 'Intermediate',
    rating: 4.9,
    reviews: 1234,
    students: 5678,
    duration: '8 weeks',
    price: 150,
    tokens: 500,
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=800&h=450&fit=crop',
    video: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?w=800&h=450&fit=crop',
    description: 'Master blockchain development on Internet Computer Protocol with comprehensive hands-on projects. This course covers everything from basic concepts to advanced development techniques.',
    modules: 12,
    totalLessons: 45,
    certificate: true,
    featured: true,
    skills: ['Blockchain Development', 'Smart Contracts', 'ICP Protocol', 'Rust Programming', 'Web3 Integration'],
    requirements: ['Basic programming knowledge', 'Understanding of web development', 'Computer with internet connection'],
    curriculum: [
      {
        id: 1,
        title: 'Introduction to Blockchain',
        lessons: 4,
        duration: '45 min',
        completed: true,
        locked: false,
        lessons_detail: [
          { id: 1, title: 'What is Blockchain?', duration: '10 min', completed: true },
          { id: 2, title: 'How Blockchain Works', duration: '15 min', completed: true },
          { id: 3, title: 'Blockchain vs Traditional Databases', duration: '10 min', completed: true },
          { id: 4, title: 'Quiz: Blockchain Basics', duration: '10 min', completed: true }
        ]
      },
      {
        id: 2,
        title: 'Internet Computer Protocol Overview',
        lessons: 5,
        duration: '60 min',
        completed: true,
        locked: false,
        lessons_detail: [
          { id: 1, title: 'ICP Architecture', duration: '15 min', completed: true },
          { id: 2, title: 'Canisters and Actors', duration: '20 min', completed: true },
          { id: 3, title: 'ICP Consensus Mechanism', duration: '15 min', completed: false },
          { id: 4, title: 'Network Nervous System', duration: '10 min', completed: false }
        ]
      },
      {
        id: 3,
        title: 'Smart Contract Development',
        lessons: 6,
        duration: '90 min',
        completed: false,
        locked: false,
        lessons_detail: [
          { id: 1, title: 'Motoko Programming Language', duration: '20 min', completed: false },
          { id: 2, title: 'Creating Your First Canister', duration: '25 min', completed: false },
          { id: 3, title: 'Inter-Canister Communication', duration: '15 min', completed: false },
          { id: 4, title: 'State Management', duration: '20 min', completed: false },
          { id: 5, title: 'Testing Smart Contracts', duration: '10 min', completed: false }
        ]
      },
      {
        id: 4,
        title: 'Advanced Development Techniques',
        lessons: 7,
        duration: '120 min',
        completed: false,
        locked: true
      }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'curriculum', name: 'Curriculum' },
    { id: 'instructor', name: 'Instructor' },
    { id: 'reviews', name: 'Reviews' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: '2 days ago',
      comment: 'Excellent course! Dr. Chen explains complex concepts in a very understandable way. The hands-on projects were particularly valuable.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: '1 week ago',
      comment: 'This course exceeded my expectations. The token rewards system kept me motivated throughout the learning process.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=50&h=50&fit=crop&crop=face',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Great content and structure. Would recommend to anyone wanting to learn blockchain development on ICP.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-300">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{course.instructor}</div>
                  <div className="text-gray-300 text-sm">Course Instructor</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-900">
              <div className="aspect-video mb-6 bg-gray-100 rounded-lg overflow-hidden relative">
                <img
                  src={course.video}
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">${course.price}</div>
                <div className="flex items-center justify-center space-x-2 text-purple-600 mb-4">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Earn {course.tokens} ICP Tokens</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 mb-4">
                Enroll Now
              </button>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="flex flex-col items-center space-y-1">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">{course.modules} Modules</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Play className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">{course.totalLessons} Lessons</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Course Description</h3>
                    <div className="prose prose-lg text-gray-700">
                      <p>{course.description}</p>
                      <p>
                        This comprehensive course is designed to take you from blockchain fundamentals to advanced 
                        development on the Internet Computer Protocol. You'll learn through practical projects and 
                        real-world examples.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <div key={module.id} className="bg-white rounded-lg shadow-sm border">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{module.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{module.lessons} lessons</span>
                            <span>{module.duration}</span>
                            {module.completed && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                            {module.locked && (
                              <Lock className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                        
                        {module.lessons_detail && (
                          <div className="space-y-2">
                            {module.lessons_detail.map((lesson) => (
                              <div key={lesson.id} className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                  ) : (
                                    <Play className="w-4 h-4 text-purple-600" />
                                  )}
                                  <span className="text-gray-700">{lesson.title}</span>
                                </div>
                                <span className="text-sm text-gray-500">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="bg-white rounded-lg shadow-sm border p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                      <p className="text-gray-600 mb-4">
                        Dr. Sarah Chen is a renowned blockchain developer and educator with over 10 years of experience 
                        in distributed systems and cryptocurrency technologies. She has worked with major blockchain 
                        projects and is a frequent speaker at international conferences.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-purple-600">15+</div>
                          <div className="text-sm text-gray-500">Courses</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">50K+</div>
                          <div className="text-sm text-gray-500">Students</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">4.9</div>
                          <div className="text-sm text-gray-500">Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">10+</div>
                          <div className="text-sm text-gray-500">Years Exp</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl font-bold text-purple-600">{course.rating}</div>
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="text-gray-600">{course.reviews} reviews</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-white rounded-lg shadow-sm border p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold">{review.name}</span>
                              <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                            <div className="flex items-center space-x-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Course Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  <span>Share Course</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
                  <Heart className="w-4 h-4" />
                  <span>Add to Wishlist</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>Download Resources</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Course Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Enrollment</span>
                  <span className="font-semibold">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion Rate</span>
                  <span className="font-semibold">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-semibold">{course.rating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language</span>
                  <span className="font-semibold">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
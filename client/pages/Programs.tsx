import React, { useEffect, useRef, useState } from 'react';
import { Video, HelpCircle, Palette, Gamepad2, Monitor, Library, Heart, Package, MessageSquare, Users, Clock, Star, CheckCircle } from 'lucide-react';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('learning');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const learningPrograms = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Interactive Videos & E-books",
      description: "Engaging multimedia content that brings lessons to life with interactive elements and immersive storytelling.",
      features: ["4K HD video content", "Interactive quizzes", "Multi-language support", "Offline access"],
      duration: "Self-paced",
      ageGroup: "Ages 5-18",
      color: "from-edu-primary-500 to-edu-primary-600",
      bgColor: "from-edu-primary-50 to-edu-primary-100"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Fun Quiz Platform",
      description: "Gamified assessments that make testing enjoyable while providing instant feedback and progress tracking.",
      features: ["Adaptive questioning", "Real-time feedback", "Progress analytics", "Multiplayer modes"],
      duration: "15-30 min sessions",
      ageGroup: "Ages 6-18",
      color: "from-edu-orange-500 to-edu-orange-600",
      bgColor: "from-edu-orange-50 to-edu-orange-100"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Activities",
      description: "Hands-on projects and creative challenges that encourage artistic expression and innovative thinking.",
      features: ["Digital art tools", "Project templates", "Collaboration features", "Portfolio creation"],
      duration: "1-2 hours",
      ageGroup: "Ages 4-16",
      color: "from-edu-purple-500 to-edu-purple-600",
      bgColor: "from-edu-purple-50 to-edu-purple-100"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Educational Games",
      description: "Interactive games that make complex concepts simple and fun, turning learning into an adventure.",
      features: ["Curriculum-aligned", "Progressive difficulty", "Achievement system", "Social learning"],
      duration: "20-45 min sessions",
      ageGroup: "Ages 5-15",
      color: "from-edu-green-500 to-edu-green-600",
      bgColor: "from-edu-green-50 to-edu-green-100"
    }
  ];

  const platformPrograms = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Smart Wall",
      description: "Interactive digital classroom displays that transform traditional teaching into engaging experiences.",
      features: ["Touch-interactive displays", "4K resolution", "Multi-device connectivity", "Cloud integration"],
      deployment: "Full setup included",
      support: "24/7 technical support",
      color: "from-edu-primary-500 to-edu-primary-600",
      bgColor: "from-edu-primary-50 to-edu-primary-100",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fa689521c3c5e4053a2feb0032c12a446%2F3afa325c4b8647789ec4b887995470dc?format=webp&width=800"
    },
    {
      icon: <Library className="w-8 h-8" />,
      title: "Teacher's Aid Library",
      description: "Comprehensive resource library with lesson plans, assessments, and teaching materials.",
      features: ["10,000+ lesson plans", "Assessment tools", "Curriculum mapping", "Standards alignment"],
      deployment: "Cloud-based access",
      support: "Training included",
      color: "from-edu-orange-500 to-edu-orange-600",
      bgColor: "from-edu-orange-50 to-edu-orange-100",
      image: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "I Love My School Magazine",
      description: "Digital publication platform for showcasing student work and school achievements.",
      features: ["Easy publishing", "Template library", "Student submissions", "Parent access"],
      deployment: "Monthly publications",
      support: "Editorial assistance",
      color: "from-edu-pink-500 to-edu-pink-600",
      bgColor: "from-edu-pink-50 to-edu-pink-100",
      image: "https://images.pexels.com/photos/7692559/pexels-photo-7692559.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Hobby Box",
      description: "Monthly activity kits that encourage creativity and hands-on learning outside the classroom.",
      features: ["STEM projects", "Art supplies", "Instruction guides", "Parent resources"],
      deployment: "Monthly delivery",
      support: "Online tutorials",
      color: "from-edu-purple-500 to-edu-purple-600",
      bgColor: "from-edu-purple-50 to-edu-purple-100",
      image: "https://images.pexels.com/photos/7296419/pexels-photo-7296419.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Micro-Learning",
      description: "Micro-learning content delivered directly through WhatsApp for convenient access.",
      features: ["Daily tips", "Quick exercises", "Parent updates", "Instant support"],
      deployment: "Instant activation",
      support: "Chat-based help",
      color: "from-edu-green-500 to-edu-green-600",
      bgColor: "from-edu-green-50 to-edu-green-100",
      image: "https://images.pexels.com/photos/3885622/pexels-photo-3885622.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = [
    { id: 'learning', label: 'Learning Programs', count: learningPrograms.length },
    { id: 'platform', label: 'Platform Solutions', count: platformPrograms.length }
  ];

  const currentPrograms = selectedCategory === 'learning' ? learningPrograms : platformPrograms;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-edu-green-50 to-edu-primary-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-edu-green-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-edu-primary-200 rounded-full opacity-25"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-edu-green-500 to-edu-primary-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Comprehensive educational solutions designed to engage, inspire, and educate students through innovative technology.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-edu-primary-600">50K+</div>
                <div className="text-sm text-gray-600">Active Lessons</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-edu-green-600">200+</div>
                <div className="text-sm text-gray-600">Curriculum Topics</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-edu-orange-600">15+</div>
                <div className="text-sm text-gray-600">Subject Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section ref={sectionRef} className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-xl p-2 inline-flex">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200
                    ${selectedCategory === category.id
                      ? 'bg-white text-edu-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {category.label}
                  <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {currentPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl group overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${program.bgColor} p-8`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {program.icon}
                    </div>
                    <div className="text-right">
                      {selectedCategory === 'learning' ? (
                        <>
                          <div className="text-sm text-gray-600 mb-1">Duration</div>
                          <div className="font-semibold text-gray-900">{program.duration}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-gray-600 mb-1">Deployment</div>
                          <div className="font-semibold text-gray-900">{program.deployment}</div>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {selectedCategory === 'learning' && (
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {program.ageGroup}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                    </div>
                  )}

                  {selectedCategory === 'platform' && (
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {program.support}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the programs that best fit your educational needs and start transforming your learning experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Demo
            </button>
            <button className="bg-white border-2 border-edu-primary-200 text-edu-primary-600 hover:bg-edu-primary-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

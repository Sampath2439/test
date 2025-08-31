import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Clock, ArrowRight, Lightbulb, Palette, Target, Zap } from 'lucide-react';

const LearningHub = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const articles = [
    {
      id: 1,
      title: "5 Fun Ways to Boost Creativity in Young Learners",
      excerpt: "Discover innovative techniques to unlock your child's creative potential through play-based learning and artistic expression.",
      author: "Dr. Sarah Mitchell",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      icon: <Palette className="w-6 h-6" />,
      color: "from-edu-purple-500 to-edu-pink-500",
      bgColor: "from-edu-purple-50 to-edu-pink-50",
      category: "Creativity"
    },
    {
      id: 2,
      title: "Building Problem-Solving Skills Through Interactive Games",
      excerpt: "Learn how gamification enhances critical thinking and helps students develop essential problem-solving abilities.",
      author: "Mark Thompson",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      icon: <Target className="w-6 h-6" />,
      color: "from-edu-orange-500 to-edu-red-500",
      bgColor: "from-edu-orange-50 to-red-50",
      category: "Skills"
    },
    {
      id: 3,
      title: "The Science of Effective Study Habits for Children",
      excerpt: "Evidence-based strategies to help your child develop lasting study habits that improve learning outcomes.",
      author: "Prof. Lisa Chen",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-edu-green-500 to-edu-primary-500",
      bgColor: "from-edu-green-50 to-edu-primary-50",
      category: "Study Tips"
    },
    {
      id: 4,
      title: "Digital Literacy: Preparing Kids for the Future",
      excerpt: "Essential digital skills every child needs to succeed in our increasingly connected world.",
      author: "Alex Rodriguez",
      readTime: "8 min read",
      date: "Dec 8, 2024",
      icon: <Zap className="w-6 h-6" />,
      color: "from-edu-primary-500 to-edu-purple-500",
      bgColor: "from-edu-primary-50 to-edu-purple-50",
      category: "Technology"
    }
  ];

  return (
    <section ref={sectionRef} className=" bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-edu-green-100 text-edu-green-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
            <BookOpen className="w-4 h-4" />
            <span>Learning Hub</span>
          </div>
          <div className="h-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest from Our{' '}
            <span className="bg-gradient-to-r from-edu-green-500 to-edu-primary-500 bg-clip-text text-transparent">
              Education Blog
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with expert insights, teaching strategies, and educational trends that matter to your child's learning journey.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`
                group cursor-pointer transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                {/* Header with gradient and icon */}
                <div className={`h-32 bg-gradient-to-br ${article.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {article.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-800 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Author and Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="font-medium">{article.author}</span>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        Read More
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className={`text-center transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group bg-gradient-to-r from-edu-green-500 to-edu-primary-500 hover:from-edu-green-600 hover:to-edu-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LearningHub;

import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Globe, Heart, Target, BookOpen } from 'lucide-react';

const AboutSection = () => {
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

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "10,000+", label: "Schools", color: "text-edu-primary-600" },
    { icon: <BookOpen className="w-6 h-6" />, number: "1M+", label: "Students", color: "text-edu-orange-600" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries", color: "text-edu-green-600" },
    { icon: <Award className="w-6 h-6" />, number: "95%", label: "Success Rate", color: "text-edu-purple-600" }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion for Education",
      description: "We believe every child deserves access to quality learning.",
      color: "from-edu-pink-500 to-edu-purple-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Student-Centered",
      description: "Every decision prioritizes student success and engagement.",
      color: "from-edu-green-500 to-edu-primary-500"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-edu-primary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-edu-primary-100 text-edu-primary-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
            <Heart className="w-4 h-4" />
            <span>About MySchool</span>
          </div>
          <div className="h-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Education{' '}
            <span className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 bg-clip-text text-transparent">
              Since 2020
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize education by bridging the gap between traditional teaching 
            methods and modern technology. Our platform empowers educators with innovative tools while 
            inspiring students to love learning.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Side - Values */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-edu-primary-100 to-edu-purple-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className={`${stat.color} mb-3 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

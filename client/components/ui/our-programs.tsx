import React, { useEffect, useRef, useState } from 'react';
import { Video, HelpCircle, Palette, Gamepad2, ArrowRight } from 'lucide-react';

const OurPrograms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const programs = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Interactive Videos & E-books",
      description: "Engaging multimedia content that brings lessons to life with interactive elements and immersive storytelling.",
      color: "from-edu-primary-500 to-edu-primary-600",
      bgColor: "from-edu-primary-50 to-edu-primary-100",
      hoverColor: "hover:from-edu-primary-100 hover:to-edu-primary-200"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Fun Quiz",
      description: "Gamified assessments that make testing enjoyable while providing instant feedback and progress tracking.",
      color: "from-edu-orange-500 to-edu-orange-600",
      bgColor: "from-edu-orange-50 to-edu-orange-100",
      hoverColor: "hover:from-edu-orange-100 hover:to-edu-orange-200"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Activities",
      description: "Hands-on projects and creative challenges that encourage artistic expression and innovative thinking.",
      color: "from-edu-purple-500 to-edu-purple-600",
      bgColor: "from-edu-purple-50 to-edu-purple-100",
      hoverColor: "hover:from-edu-purple-100 hover:to-edu-purple-200"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Learn with Games",
      description: "Educational games that make complex concepts simple and fun, turning learning into an adventure.",
      color: "from-edu-green-500 to-edu-green-600",
      bgColor: "from-edu-green-50 to-edu-green-100",
      hoverColor: "hover:from-edu-green-100 hover:to-edu-green-200"
    }
  ];

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-edu-primary-100 text-edu-primary-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
            <Gamepad2 className="w-4 h-4" />
            <span>Our Programs</span>
          </div>
          <div className="h-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Our{' '}
            <span className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 bg-clip-text text-transparent">
              Learning Programs
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive educational tools designed to engage, inspire, and educate students through innovative technology and proven methodologies.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative bg-gradient-to-br ${program.bgColor} ${program.hoverColor}
                rounded-2xl p-8 h-full transition-all duration-300 ease-out
                transform group-hover:scale-105 group-hover:shadow-2xl
                border border-white/50 group-hover:border-white/80
                overflow-hidden
              `}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} 
                  flex items-center justify-center text-white mb-6
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                  shadow-lg group-hover:shadow-xl
                `}>
                  {React.cloneElement(program.icon, {
                    className: `w-8 h-8 transition-all duration-300 ${hoveredCard === index ? 'animate-bounce' : ''}`
                  })}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-200">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                    {program.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-all duration-200">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Learn More
                    </span>
                    <ArrowRight className={`
                      w-4 h-4 ml-2 transition-all duration-300
                      group-hover:translate-x-2 group-hover:text-current
                      ${hoveredCard === index ? 'animate-pulse' : ''}
                    `} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Explore All Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;

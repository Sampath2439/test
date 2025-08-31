import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Elementary School Teacher",
      school: "Greenwood Elementary",
      avatar: "SJ",
      rating: 5,
      text: "MySchool has completely transformed how I teach. The interactive tools keep my students engaged, and the curriculum alignment saves me hours of planning time.",
      color: "from-edu-primary-500 to-edu-primary-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent",
      school: "Riverside Academy",
      avatar: "MC",
      rating: 5,
      text: "My daughter loves the gamified learning approach. She's actually excited about homework now! The progress tracking helps me stay involved in her education.",
      color: "from-edu-orange-500 to-edu-orange-600"
    },
    {
      id: 3,
      name: "Dr. Patricia Williams",
      role: "Principal",
      school: "Innovation High School",
      avatar: "PW",
      rating: 5,
      text: "The comprehensive platform has improved student engagement across all grade levels. Teachers report better learning outcomes and increased classroom participation.",
      color: "from-edu-purple-500 to-edu-purple-600"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "IT Administrator",
      school: "Central Middle School",
      avatar: "DR",
      rating: 5,
      text: "Implementation was seamless, and the technical support is outstanding. The platform integrates perfectly with our existing systems.",
      color: "from-edu-green-500 to-edu-green-600"
    },
    {
      id: 5,
      name: "Emily Thompson",
      role: "Parent & Teacher",
      school: "Maple Leaf Elementary",
      avatar: "ET",
      rating: 5,
      text: "As both a parent and educator, I appreciate how MySchool bridges the gap between home and school learning. The communication tools are exceptional.",
      color: "from-edu-pink-500 to-edu-pink-600"
    }
  ];

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

  // Auto-slide functionality
  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    // Reset auto-slide timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Reset auto-slide timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Reset auto-slide timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-edu-orange-100 text-edu-orange-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
            <Quote className="w-4 h-4" />
            <span>Testimonials</span>
          </div>
          <div className="h-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-edu-orange-500 to-edu-pink-500 bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from teachers, parents, and administrators who have experienced the transformative power of our educational platform.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                      {/* Quote decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent"></div>
                      <div className="absolute top-6 right-6">
                        <Quote className="w-12 h-12 text-gray-200" />
                      </div>

                      <div className="relative z-10">
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                            <div className="text-gray-600">{testimonial.role}</div>
                            <div className="text-sm text-gray-500">{testimonial.school}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-edu-primary-600 hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-edu-primary-600 hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${currentSlide === index 
                  ? 'bg-edu-primary-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-xs mx-auto mt-6 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useEffect, useState } from "react";
import { Button } from "./button";
import {
  Play,
  Star,
  BookOpen,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-white via-edu-primary-50/30 to-edu-purple-50/50 overflow-hidden">
      {/* Static Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-edu-orange-200 rounded-full opacity-20"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-edu-green-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-edu-purple-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-edu-pink-200 rounded-full opacity-30"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-edu-orange-300 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-edu-green-300 rounded-full opacity-25"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-edu-primary-100 text-edu-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Trusted by 10,000+ Schools</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming{" "}
              <span className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 bg-clip-text text-transparent">
                Education
              </span>{" "}
              Through Technology
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Innovative, inclusive, and engaging educational resources for the
              21st century. Making learning fun, interactive, and accessible for
              every child.
            </p>

          

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-edu-orange-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-edu-orange-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Lessons</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-edu-green-100 rounded-lg">
                  <Users className="w-5 h-5 text-edu-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-edu-purple-100 rounded-lg">
                  <Award className="w-5 h-5 text-edu-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Main illustration container */}
              <div className="bg-gradient-to-br from-edu-primary-100 to-edu-purple-100 rounded-3xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
                {/* Main illustration with student learning */}
                <div className="relative h-80 lg:h-96">
                  {/* Student learning image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fa689521c3c5e4053a2feb0032c12a446%2F9ff28afb571a42178bfbfc94a83e48ad?format=webp&width=800"
                      alt="Young student thinking and learning with educational concepts"
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                    {/* Subtle overlay to blend with design */}
                    <div className="absolute inset-0 bg-gradient-to-t from-edu-primary-500/10 to-transparent rounded-2xl"></div>
                  </div>

                  {/* Floating elements around the illustration */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-edu-orange-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-4 border-white">
                    <BookOpen
                      className="w-10 h-10 text-edu-orange-600"
                      strokeWidth={3}
                    />
                  </div>
                  <div className="absolute -top-2 -right-6 w-16 h-16 bg-edu-green-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-4 border-white">
                    <Star
                      className="w-8 h-8 text-edu-green-600"
                      strokeWidth={3}
                    />
                  </div>
                  <div className="absolute -bottom-4 left-8 w-18 h-18 bg-edu-pink-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-4 border-white">
                    <Award
                      className="w-9 h-9 text-edu-pink-600"
                      strokeWidth={3}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-4 w-14 h-14 bg-edu-purple-200 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-4 border-white">
                    <Users
                      className="w-7 h-7 text-edu-purple-600"
                      strokeWidth={3}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements around the container */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-edu-orange-200 to-edu-pink-200 rounded-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

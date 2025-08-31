import React, { useEffect, useRef, useState } from "react";
import { Brain, Gamepad2, BookOpen, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Multi-Modal Delivery",
      description:
        "Interactive videos, games, and hands-on activities that adapt to every child's learning style",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Tools",
      description:
        "Smart recommendations and personalized learning paths powered by advanced AI technology",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "NEP-Aligned Resources",
      description:
        "Curriculum perfectly aligned with National Education Policy for comprehensive learning",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white to-edu-primary-50/30"
    >
      {/* Section Badge */}
      <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-edu-orange-100 text-edu-orange-700 px-4 py-2 rounded-full md:text-lg font-medium">
              <CheckCircle className="w-4 h-4" />
          <span>Why Choose MySchool</span>
        </div>
      </div>
      <div className="h-6" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Illustration */}
          <div
            className={`relative transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="bg-gradient-to-br from-edu-orange-100 to-edu-pink-100 rounded-3xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-80 lg:h-96">
                  {/* Children classroom discussion image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <img
                      src="./choose.png"
                      alt="Children engaging in classroom discussion and collaborative learning"
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                    {/* Subtle overlay to enhance text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-edu-orange-500/10 to-transparent rounded-2xl"></div>
                  </div>

                  {/* Floating learning elements - now static as requested */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/90 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <BookOpen
                      className="w-8 h-8 text-edu-primary-500"
                      strokeWidth={3}
                    />
                  </div>
                  {/* <div className="absolute top-12 right-8 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <Brain
                      className="w-6 h-6 text-edu-purple-500"
                      strokeWidth={3}
                    />
                  </div> */}
                  {/* <div className="absolute bottom-16 left-12 w-14 h-14 bg-white/90 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <Gamepad2
                      className="w-7 h-7 text-edu-orange-500"
                      strokeWidth={3}
                    />
                  </div> */}
                </div>
              </div>

              {/* Decorative background */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-edu-green-200 to-edu-purple-200 rounded-3xl opacity-30"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            

            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Helping Kids Learn in the{" "}
              <span className="bg-gradient-to-r from-edu-orange-500 to-edu-pink-500 bg-clip-text text-transparent">
                Most Fun Way
              </span>{" "}
              Possible!
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe learning should be joyful, engaging, and accessible to
              every child. Our innovative platform combines cutting-edge
              technology with proven educational methods to create an
              unforgettable learning experience.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-edu-primary-100 to-edu-purple-100 rounded-xl flex items-center justify-center text-edu-primary-600">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-edu-orange-500 to-edu-pink-500 hover:from-edu-orange-600 hover:to-edu-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <span className="relative z-10">
                  Learn More About Our Approach
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;

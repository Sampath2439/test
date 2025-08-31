import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Library,
  Heart,
  Package,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const KeyOfferings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % offerings.length);
      }, 4000); // Auto-scroll every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  const offerings = [
    {
      id: "smart-wall",
      icon: <Monitor className="w-10 h-8" />,
      title: "Smart Wall",
      description:
        "Interactive digital classroom displays that transform traditional teaching into engaging experiences.",
      features: [
        "Touch-interactive displays with 4K resolution",
        "Real-time collaboration tools for students",
        "Integrated lesson planning and content delivery",
        "Multi-device connectivity and screen sharing",
      ],
      color: "from-edu-primary-500 to-edu-primary-600",
      bgGradient: "from-blue-50 to-blue-100",
      image: "/Picture1.png"
    },
    {
      id: "teachers-aid",
      icon: <Library className="w-10 h-8" />,
      title: "Teacher's Aid Library",
      description:
        "Comprehensive resource library with lesson plans, assessments, and teaching materials.",
      features: [
        "10,000+ ready-to-use lesson plans",
        "Assessment tools and rubrics",
        "Multimedia teaching resources",
        "Curriculum mapping and standards alignment",
      ],
      color: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      image: "/Picture2.png"
    },
    {
      id: "school-magazine",
      icon: <Heart className="w-8 h-8" />,
      title: "I Love My School Magazine",
      description:
        "Digital magazine celebrating school achievements, student work, and community stories.",
      features: [
        "Student artwork and writing showcases",
        "School news and event highlights",
        "Teacher and student interviews",
        "Interactive multimedia content",
      ],
      color: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      image: "/Picture3.png"
    },
    {
      id: "hobby-box",
      icon: <Package className="w-8 h-8" />,
      title: "Hobby Box",
      description:
        "Curated activity kits that encourage creativity and hands-on learning outside the classroom.",
      features: [
        "Monthly themed activity boxes",
        "STEM and arts & crafts projects",
        "Age-appropriate skill development",
        "Parent-child bonding activities",
      ],
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      image: "/Picture4.png"
    },
    {
      id: "whatsapp-learning",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Micro-Learning",
      description:
        "Bite-sized learning content delivered directly to parents and students via WhatsApp.",
      features: [
        "Daily learning tips and activities",
        "Parent engagement notifications",
        "Quick homework help and support",
        "School announcements and updates",
      ],
      color: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      image: "/Picture5.png"
    },
  ];

  // Auto-scroll images data (7 images as requested)
  const scrollImages = [
    {
      id: 1,
      src: "/1.jpeg",
      alt: "Students in classroom",
      title: "Interactive Learning"
    },
    {
      id: 2,
      src: "/2.jpeg",
      alt: "Digital classroom",
      title: "Smart Technology"
    },
    {
      id: 3,
      src: "/3.png",
      alt: "Library books",
      title: "Resource Library"
    },
    {
      id: 4,
      src: "/4.jpeg",
      alt: "School magazine",
      title: "School Stories"
    },
    {
      id: 5,
      src: "/5.jpeg",
      alt: "Hobby activities",
      title: "Creative Hobbies"
    },
    {
      id: 6,
      src: "/6.png",
      alt: "Mobile learning",
      title: "Mobile Learning"
    },
    {
      id: 7,
      src: "/6.png",
      alt: "Collaborative learning",
      title: "Team Learning"
    },
    {
      id: 8,
      src: "/1.jpeg",
      alt: "Collaborative learning",
      title: "Team Learning"
    },
    {
      id: 9,
      src: "/1.jpeg",
      alt: "Collaborative learning",
      title: "Team Learning"
    },
    {
      id: 10,
      src: "/1.jpeg",
      alt: "Collaborative learning",
      title: "Team Learning"
    },
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % offerings.length);
    // Reset auto-scroll timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % offerings.length);
      }, 4000);
    }
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + offerings.length) % offerings.length);
    // Reset auto-scroll timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % offerings.length);
      }, 4000);
    }
  };

  const goToTab = (index: number) => {
    setActiveTab(index);
    // Reset auto-scroll timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % offerings.length);
      }, 4000);
    }
  };

  const currentOffering = offerings[activeTab];

  return (
    <section
      ref={sectionRef}
      className="py-8 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
            <Package className="w-4 h-4" />
            <span>Key Offerings</span>
          </div>
          <div className="h-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Innovative{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Educational Solutions
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and resources designed to enhance teaching,
            learning, and school community engagement.
          </p>
        </div>

        
        {/* Tabs Navigation */}
        <div
          className={`mb-12 transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={prevTab}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 mr-4"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex space-x-2 overflow-x-auto pb-2">
              {offerings.map((offering, index) => (
                <button
                  key={offering.id}
                  onClick={() => goToTab(index)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                    transition-all duration-300 transform hover:scale-105
                    ${
                      activeTab === index
                        ? `bg-gradient-to-r ${offering.color} text-white shadow-lg`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {React.cloneElement(offering.icon, { className: "w-4 h-4" })}
                  <span>{offering.title}</span>
                </button>
              ))}
            </div>

            <button
              onClick={nextTab}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ml-4"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div
          className={`transition-all duration-1000 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentOffering.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {currentOffering.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentOffering.title}
                  </h3>
                  <p className="text-gray-600">{currentOffering.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {currentOffering.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentOffering.color} mt-2 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`
                group bg-gradient-to-r ${currentOffering.color} hover:opacity-90 
                text-white px-8 py-3 rounded-xl font-semibold 
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                relative overflow-hidden
              `}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br ${currentOffering.bgGradient} rounded-3xl p-10 lg:p-12 transform hover:scale-105 transition-all duration-300`}
              >
                <div className="relative h-80 lg:h-96">
                  {/* Image display */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <img
                      src={currentOffering.image}
                      alt={currentOffering.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                    
                    {/* Content overlay */}
                    
                    {/* Static floating elements */}
                    
                    
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {offerings.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTab(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${
                  activeTab === index
                    ? `bg-gradient-to-r ${offerings[activeTab].color} scale-125`
                    : "bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>
      </div>
      
      
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex justify-center">
        <div id="partners" className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
          <Package className="w-4 h-4" />
          <span>Our Official Partners</span>
        </div>
    </div>

      <div className="h-12" />
      {/* Auto-Scroll Images Section */}
        <div 
          className={`mb-16 transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="py-8">
              <div className="flex animate-scroll-rtl">
                {/* First set of images */}
                {scrollImages.map((image) => (
                  <div
                    key={`first-${image.id}`}
                    className="flex-shrink-0 mx-4 group cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-24 h-24 object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {image.title}
                      </div>
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {scrollImages.map((image) => (
                  <div
                    key={`second-${image.id}`}
                    className="flex-shrink-0 mx-4 group cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-24 h-24 object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {image.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
          </div>
        </div>


      {/* Inline styles for animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-rtl {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-rtl {
            animation: scroll-rtl 20s linear infinite;
            width: 200%;
          }
          
          .animate-scroll-rtl:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

export default KeyOfferings;
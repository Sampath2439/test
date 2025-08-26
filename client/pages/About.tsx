import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Globe, Heart, Target, BookOpen, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
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
    { icon: <Users className="w-8 h-8" />, number: "10,000+", label: "Schools", color: "text-edu-primary-600" },
    { icon: <BookOpen className="w-8 h-8" />, number: "1M+", label: "Students", color: "text-edu-orange-600" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries", color: "text-edu-green-600" },
    { icon: <Award className="w-8 h-8" />, number: "95%", label: "Success Rate", color: "text-edu-purple-600" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Education",
      description: "We believe education is the most powerful tool to change the world and every child deserves access to quality learning.",
      color: "from-edu-pink-500 to-edu-purple-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push boundaries, embracing new technologies and methodologies to enhance the learning experience.",
      color: "from-edu-orange-500 to-edu-primary-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Student-Centered",
      description: "Every decision we make prioritizes student success, engagement, and personalized learning paths.",
      color: "from-edu-green-500 to-edu-primary-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Continuous Growth",
      description: "We're committed to continuous improvement, learning from educators and adapting to evolving educational needs.",
      color: "from-edu-primary-500 to-edu-purple-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "SJ",
      description: "Former educator with 15+ years of experience in educational technology and curriculum development.",
      color: "from-edu-primary-500 to-edu-purple-500"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "MC",
      description: "Technology leader with expertise in AI, machine learning, and scalable educational platforms.",
      color: "from-edu-orange-500 to-edu-pink-500"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Curriculum",
      image: "ER",
      description: "Curriculum specialist focused on creating engaging, standards-aligned educational content.",
      color: "from-edu-green-500 to-edu-primary-500"
    },
    {
      name: "David Thompson",
      role: "Head of Design",
      image: "DT",
      description: "UX/UI expert passionate about creating intuitive and accessible learning experiences.",
      color: "from-edu-purple-500 to-edu-pink-500"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-edu-primary-50 to-edu-purple-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-edu-orange-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-edu-purple-200 rounded-full opacity-25"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 bg-clip-text text-transparent">
                MySchool
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Transforming education through innovative technology, making learning engaging, 
              accessible, and fun for students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're on a mission to revolutionize education by bridging the gap between traditional teaching 
                methods and modern technology. Our platform empowers educators with innovative tools while 
                inspiring students to love learning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our founding in 2020, we've been dedicated to creating an educational ecosystem that 
                adapts to each learner's unique needs, fostering creativity, critical thinking, and lifelong learning.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-edu-primary-100 to-edu-purple-100 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
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

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A passionate group of educators, technologists, and innovators working together to transform education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-edu-primary-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-edu-primary-600 to-edu-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Educational Revolution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your classroom? Let's work together to create amazing learning experiences.
          </p>
          <button className="bg-white text-edu-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

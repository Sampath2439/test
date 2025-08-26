import React, { useEffect, useRef, useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const FAQ = () => {
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

  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is MySchool and how does it work?",
          answer: "MySchool is a comprehensive EdTech platform that provides interactive learning tools, curriculum-aligned content, and innovative teaching resources. Our platform combines AI-powered personalization with engaging multimedia content to make learning fun and effective for students of all ages."
        },
        {
          question: "What age groups does MySchool cater to?",
          answer: "MySchool serves students from kindergarten through grade 12 (ages 5-18). Our content is carefully curated and age-appropriate, with different learning modules designed specifically for various developmental stages and grade levels."
        },
        {
          question: "How does MySchool align with educational standards?",
          answer: "Our curriculum is fully aligned with the National Education Policy (NEP) and international educational standards. We work closely with education experts to ensure our content meets or exceeds regional and national curriculum requirements."
        }
      ]
    },
    {
      category: "Enrollment & Getting Started",
      questions: [
        {
          question: "How do I enroll my school or child in MySchool?",
          answer: "Getting started is easy! You can sign up for a free demo through our website, speak with our education consultants, or contact your school administrator if your institution is already partnered with us. We offer both individual and institutional enrollment options."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 30-day free trial for schools and a 14-day trial for individual families. This allows you to explore our full range of features and see how MySchool can benefit your students before making a commitment."
        },
        {
          question: "What devices and platforms are supported?",
          answer: "MySchool works on all major devices including tablets, smartphones, laptops, and desktop computers. Our platform is web-based and also offers dedicated mobile apps for iOS and Android. We also support interactive whiteboards and Smart Walls."
        }
      ]
    },
    {
      category: "Curriculum & Content",
      questions: [
        {
          question: "What subjects does MySchool cover?",
          answer: "We offer comprehensive coverage across all major subjects including Mathematics, Science, English Language Arts, Social Studies, Arts, and Physical Education. We also provide specialized content for STEM education, coding, and 21st-century skills."
        },
        {
          question: "How often is content updated?",
          answer: "Our content is continuously updated to reflect current educational standards and best practices. We add new lessons, activities, and assessments monthly, and our AI system learns from student interactions to improve content recommendations."
        },
        {
          question: "Can teachers customize the curriculum?",
          answer: "Absolutely! Teachers have full control to customize lesson plans, create their own assessments, and adapt content to meet their students' specific needs. Our Teacher's Aid Library provides tools for easy content modification and creation."
        }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "What are the pricing options?",
          answer: "We offer flexible pricing plans for schools, individual teachers, and families. Pricing varies based on the number of users, features included, and length of subscription. Contact our sales team for a customized quote that fits your budget."
        },
        {
          question: "What kind of support do you provide?",
          answer: "We provide comprehensive support including 24/7 technical assistance, teacher training sessions, implementation support, and ongoing professional development. Our support team includes both technical experts and educational specialists."
        },
        {
          question: "How do you ensure data privacy and security?",
          answer: "Student privacy and data security are our top priorities. We comply with COPPA, FERPA, and international data protection regulations. All data is encrypted, and we never share personal information with third parties without explicit consent."
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-edu-primary-100 text-edu-primary-700 px-4 py-2 rounded-full text-sm md:text-lg font-medium">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <div className="h-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about MySchool. Can't find what you're looking for? Contact our support team for personalized assistance.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`mb-12 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 rounded-full"></div>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem
                    key={questionIndex}
                    value={`${categoryIndex}-${questionIndex}`}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <div className="flex items-start space-x-4 w-full">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-edu-primary-100 to-edu-purple-100 rounded-lg flex items-center justify-center mt-0.5">
                          <HelpCircle className="w-4 h-4 text-edu-primary-600" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 group-hover:text-edu-primary-600 transition-colors duration-200 pr-4">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="ml-12 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-edu-primary-50 to-edu-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our education specialists are here to help you find the perfect solution for your learning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-edu-primary-500 to-edu-purple-500 hover:from-edu-primary-600 hover:to-edu-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              <button className="group bg-white border-2 border-edu-primary-200 text-edu-primary-600 hover:bg-edu-primary-50 hover:border-edu-primary-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

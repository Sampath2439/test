import React from 'react';
import Hero from '@/components/ui/hero';
import WhyChooseUs from '@/components/ui/why-choose-us';
import AboutSection from '@/components/ui/about-section';
import OurPrograms from '@/components/ui/our-programs';
import KeyOfferings from '@/components/ui/key-offerings';
import Testimonials from '@/components/ui/testimonials';
import LearningHub from '@/components/ui/learning-hub';
import FAQ from '@/components/ui/faq';
import ContactSection from '@/components/ui/contact-section';
import CTABanner from '@/components/ui/cta-banner';

export default function Index() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* About Section */}
      <AboutSection />

      {/* Our Programs Section */}
      <OurPrograms />

      {/* Key Offerings Section */}
      <KeyOfferings />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Learning Hub Section */}
      <LearningHub />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA Banner */}
      <CTABanner />
    </div>
  );
}

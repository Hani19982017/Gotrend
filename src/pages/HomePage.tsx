import React from 'react';
import { Language } from '../types';
import { Hero } from '../components/Hero';
import { TechStackSection } from '../components/TechStackSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BookingSystem } from '../components/BookingSystem';
import { ProjectCalculator } from '../components/ProjectCalculator';
import { TrustGermany } from '../components/TrustGermany';
import { FAQ } from '../components/FAQ';

interface HomePageProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang, onOpenBooking }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero currentLang={currentLang} onOpenBooking={onOpenBooking} />

      {/* Services Section with deep navigation */}
      <ServicesSection currentLang={currentLang} onOpenBooking={onOpenBooking} />

      {/* Real Delivered Projects from go-trend-marketing.de */}
      <ProjectsSection currentLang={currentLang} onOpenBooking={onOpenBooking} />

      {/* Real Customer Testimonials */}
      <TestimonialsSection currentLang={currentLang} />

      {/* Modern Technologies & AWS Cloud Architecture Section */}
      <TechStackSection currentLang={currentLang} onOpenBooking={onOpenBooking} />

      {/* Interactive Direct Appointment Booking System */}
      <BookingSystem currentLang={currentLang} />

      {/* Interactive Cost & Tech Stack Estimator */}
      <ProjectCalculator currentLang={currentLang} onOpenBooking={onOpenBooking} />

      {/* Germany Office, Official Registration & Certifications */}
      <TrustGermany currentLang={currentLang} />

      {/* Frequently Asked Questions */}
      <FAQ currentLang={currentLang} />
    </div>
  );
};

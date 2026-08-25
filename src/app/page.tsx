import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProblemSection from '@/app/components/ProblemSection';
import GuideSection from '@/app/components/GuideSection';
import AudienceSection from '@/app/components/AudienceSection';
import OfferingsSection from '@/app/components/OfferingsSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import UpcomingExperiences from '@/app/components/UpcomingExperiences';
import VenuesSection from '@/app/components/VenuesSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import FinalCTASection from '@/app/components/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <GuideSection />
        <AudienceSection />
        <OfferingsSection />
        <HowItWorksSection />
        <UpcomingExperiences />
        <VenuesSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

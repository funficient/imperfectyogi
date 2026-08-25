import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoachingHero from '@/app/coaching/components/CoachingHero';
import CoachingForWho from '@/app/coaching/components/CoachingForWho';
import CoachingWhatToExpect from '@/app/coaching/components/CoachingWhatToExpect';
import CoachingApproach from '@/app/coaching/components/CoachingApproach';
import CoachingOptions from '@/app/coaching/components/CoachingOptions';
import CoachingTestimonial from '@/app/coaching/components/CoachingTestimonial';
import CoachingCTA from '@/app/coaching/components/CoachingCTA';

export default function CoachingPage() {
  return (
    <>
      <Header />
      <main>
        <CoachingHero />
        <CoachingForWho />
        <CoachingWhatToExpect />
        <CoachingApproach />
        <CoachingOptions />
        <CoachingTestimonial />
        <CoachingCTA />
      </main>
      <Footer />
    </>
  );
}

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RetreatsHero from '@/app/retreats/components/RetreatsHero';
import RetreatsIntro from '@/app/retreats/components/RetreatsIntro';
import RetreatsWhatToExpect from '@/app/retreats/components/RetreatsWhatToExpect';
import UpcomingRetreats from '@/app/retreats/components/UpcomingRetreats';
import RetreatsForWho from '@/app/retreats/components/RetreatsForWho';
import RetreatsTestimonial from '@/app/retreats/components/RetreatsTestimonial';
import RetreatsCTA from '@/app/retreats/components/RetreatsCTA';

export default function RetreatsPage() {
  return (
    <>
      <Header />
      <main>
        <RetreatsHero />
        <RetreatsIntro />
        <RetreatsWhatToExpect />
        <UpcomingRetreats />
        <RetreatsForWho />
        <RetreatsTestimonial />
        <RetreatsCTA />
      </main>
      <Footer />
    </>
  );
}

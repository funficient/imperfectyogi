'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

// 4 cards, 2×2 grid audit:
// Row 1: [col-1: Conscious Traveller] [col-2: Wellness Seeker]
// Row 2: [col-1: Digital Nomad] [col-2: Burnt Out Executive]
// Placed 4/4 ✓

const audiences = [
  {
    icon: 'GlobeAltIcon',
    title: 'The Conscious Traveller',
    description:
      'You want more from travel than ticking places off a map. You\'re open to trying something new, meeting interesting people and seeing where the experience takes you.',
    colour: 'bg-secondary',
  },
  {
    icon: 'SparklesIcon',
    title: 'The Wellness Seeker',
    description:
      'You\'re curious about yoga, mindfulness and healthier ways of living. You don\'t need to be an expert — you just need to be willing to try.',
    colour: 'bg-muted',
  },
  {
    icon: 'ComputerDesktopIcon',
    title: 'The Digital Nomad',
    description:
      'Your office might be anywhere — but you\'re looking for a deeper sense of connection and community beyond the co-working space.',
    colour: 'bg-secondary',
  },
  {
    icon: 'BriefcaseIcon',
    title: 'The Burnt Out Executive',
    description:
      'You\'re successful on paper, but running on empty. You need space to breathe, perspective to think clearly, and time to reconnect with what actually matters.',
    colour: 'bg-muted',
  },
];

export default function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 100}ms`;
              el.classList.add('animate-reveal');
              (el as HTMLElement).style.opacity = '1';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">Find yourself here</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Is this{' '}
            <span className="font-serif-italic text-gradient-teal">for you?</span>
          </h2>
        </div>

        {/* 2×2 grid — 4 cards placed 4/4 ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {audiences.map((a) => (
            <div
              key={a.title}
              className={`reveal-item opacity-100 ${a.colour} rounded-3xl p-7 sm:p-8 border border-border card-hover`}
            >
              <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center mb-5 shadow-sm">
                <Icon name={a.icon as 'GlobeAltIcon'} size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-700 text-foreground mb-3">{a.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal-item opacity-100 text-center max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-foreground font-500 leading-relaxed">
            You don&apos;t need to be perfect or know all the answers.{' '}
            <span className="font-serif-italic text-gradient-teal">
              You just need to allow yourself to let go and be imperfect.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

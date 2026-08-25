'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

// 3 cards — grid-cols-3 desktop, grid-cols-1 mobile
// Row 1: [col-1: Single Session] [col-2: Three Session Pack] [col-3: Retreat Add-On]
// Placed 3/3 ✓

const options = [
  {
    name: 'Single Session',
    tagline: 'Try it out',
    price: '€85',
    unit: '/ session',
    description: 'A single 60-minute coaching conversation. Perfect if you have something specific to work through or just want to see if coaching is for you.',
    includes: [
      '60-minute 1:1 session',
      'Online or in-person',
      'Follow-up summary notes',
      'Resource recommendations',
    ],
    cta: 'Book a Session',
    href: 'mailto:hello@imperfectyogi.com',
    highlight: false,
  },
  {
    name: 'Three Session Pack',
    tagline: 'Most popular',
    price: '€240',
    unit: '/ pack',
    description: 'Three sessions over 6 weeks. Enough time to go deeper, build momentum and actually see things shift. Saving of €15 vs single sessions.',
    includes: [
      '3 × 60-minute sessions',
      'Flexible scheduling',
      'Between-session check-ins',
      'Session notes & resources',
      'Priority booking',
    ],
    cta: 'Get Started',
    href: 'mailto:hello@imperfectyogi.com',
    highlight: true,
  },
  {
    name: 'Retreat Add-On',
    tagline: 'While you\'re here',
    price: '€65',
    unit: '/ session',
    description: 'A private coaching session added to any retreat experience. A quiet hour to reflect on what you\'re learning and what you want to do with it.',
    includes: [
      '60-minute 1:1 session',
      'In-person at retreat venue',
      'Integrated with retreat themes',
      'Discounted rate for retreat guests',
    ],
    cta: 'Add to Retreat',
    href: '/retreats',
    highlight: false,
  },
];

export default function CoachingOptions() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 120}ms`;
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
    <section id="coaching-options" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">How to work with me</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Choose what feels{' '}
            <span className="font-serif-italic text-gradient-teal">right for you.</span>
          </h2>
          <p className="reveal-item opacity-100 text-muted-foreground text-lg max-w-xl mx-auto mt-4">
            First conversation is always free. No commitment required.
          </p>
        </div>

        {/* 3 cards — 3/3 placed ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {options.map((opt) => (
            <article
              key={opt.name}
              className={`reveal-item opacity-100 rounded-3xl border flex flex-col overflow-hidden transition-all duration-400 ${
                opt.highlight
                  ? 'bg-primary border-primary shadow-2xl shadow-primary/20 md:-mt-4 md:mb-0'
                  : 'bg-card border-border card-hover'
              }`}
            >
              {opt.highlight && (
                <div className="bg-accent/20 text-center py-2.5">
                  <span className="text-xs font-700 uppercase tracking-widest text-white/90">
                    {opt.tagline}
                  </span>
                </div>
              )}
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                {!opt.highlight && (
                  <p className="text-xs font-700 uppercase tracking-widest text-accent mb-2">{opt.tagline}</p>
                )}
                <h3 className={`text-xl font-700 mb-1 ${opt.highlight ? 'text-white' : 'text-foreground'}`}>
                  {opt.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl font-800 ${opt.highlight ? 'text-white' : 'text-primary'}`}>
                    {opt.price}
                  </span>
                  <span className={`text-sm ${opt.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                    {opt.unit}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${opt.highlight ? 'text-white/75' : 'text-muted-foreground'}`}>
                  {opt.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {opt.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${opt.highlight ? 'text-accent' : 'text-accent'}`}
                      />
                      <span className={`text-sm ${opt.highlight ? 'text-white/80' : 'text-foreground'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={opt.href}
                  className={`text-sm font-700 py-3.5 px-6 rounded-full text-center transition-all duration-300 ${
                    opt.highlight
                      ? 'bg-white text-primary hover:bg-secondary' :'btn-primary'
                  }`}
                >
                  {opt.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

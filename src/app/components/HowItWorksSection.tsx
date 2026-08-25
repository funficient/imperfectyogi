'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Find your experience',
    description:
      'Browse upcoming yoga sessions, retreats and coaching experiences. Each one tells you exactly who it\'s for and what you\'ll do.',
  },
  {
    number: '02',
    title: 'Choose what feels right',
    description:
      'No pressure. Each experience explains what to expect — so you can pick the one that genuinely excites you.',
  },
  {
    number: '03',
    title: 'Show up & enjoy',
    description:
      'I\'ll take care of the details. You simply arrive with an open mind and comfortable clothes. That\'s genuinely all you need.',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 150}ms`;
              el.classList.add('animate-reveal');
              (el as HTMLElement).style.opacity = '1';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">The Plan</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            It&apos;s easy.{' '}
            <span className="font-serif-italic text-gradient-teal">Just show up.</span>
          </h2>
          <p className="reveal-item opacity-100 text-muted-foreground text-lg max-w-xl mx-auto mt-4">
            No complicated booking systems. No confusing packages. Three steps and you&apos;re in.
          </p>
        </div>

        {/* Steps — asymmetric layout, NOT a timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`reveal-item opacity-100 relative p-7 sm:p-9 rounded-3xl border border-border card-hover ${
                idx === 1 ? 'bg-primary text-primary-foreground lg:mt-6' : 'bg-muted'
              }`}
            >
              <span
                className={`text-6xl font-900 leading-none block mb-6 ${
                  idx === 1 ? 'text-white/20' : 'text-primary/15'
                }`}
              >
                {step.number}
              </span>
              <h3
                className={`text-xl font-700 mb-3 ${
                  idx === 1 ? 'text-white' : 'text-foreground'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  idx === 1 ? 'text-white/75' : 'text-muted-foreground'
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-item opacity-100 text-center">
          <Link href="/#experiences" className="btn-primary text-base px-8 py-4">
            See Upcoming Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}

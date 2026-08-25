'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

// 6 cards — grid-cols-2 desktop (3 rows of 2), grid-cols-1 mobile
// Row 1: [col-1: At a crossroads] [col-2: Feeling stuck]
// Row 2: [col-1: Career shift] [col-2: Overwhelmed]
// Row 3: [col-1: Solo travel] [col-2: Just curious]
// Placed 6/6 ✓

const scenarios = [
  {
    icon: 'ArrowsRightLeftIcon',
    title: 'At a crossroads',
    body: 'You have options but can\'t seem to choose. Or you know you want something different but don\'t know what that looks like yet.',
  },
  {
    icon: 'PauseCircleIcon',
    title: 'Feeling stuck',
    body: 'You\'re going through the motions but not moving forward. Something feels off and you can\'t quite name it.',
  },
  {
    icon: 'BriefcaseIcon',
    title: 'Navigating a career or life shift',
    body: 'A job change, a move, a relationship shift. Big transitions feel easier when you have a clear-headed person in your corner.',
  },
  {
    icon: 'BoltIcon',
    title: 'Overwhelmed by too much',
    body: 'You have too many ideas, too many responsibilities or too many voices telling you what to do. Time to get clear on what actually matters.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Travelling and seeking direction',
    body: 'Travel gives you perspective, but sometimes you need a structured conversation to make sense of what you\'re discovering about yourself.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Just curious',
    body: 'You don\'t have a crisis. You\'re just someone who takes their own growth seriously and wants a thoughtful thinking partner.',
  },
];

export default function CoachingForWho() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 90}ms`;
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
            <span className="teal-badge">Who coaching is for</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            You might be in the right place if{' '}
            <span className="font-serif-italic text-gradient-teal">any of this sounds familiar.</span>
          </h2>
        </div>

        {/* 6 cards — 2 cols, 3 rows, placed 6/6 ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="reveal-item opacity-100 p-6 sm:p-7 rounded-3xl bg-muted border border-border card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Icon name={s.icon as 'ArrowsRightLeftIcon'} size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-700 text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

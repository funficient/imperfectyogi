'use client';

import React, { useEffect, useRef } from 'react';

const sessionFlow = [
  {
    step: '01',
    title: 'You share what\'s on your mind',
    detail: 'No agenda required. We start with whatever is taking up space in your head right now.',
  },
  {
    step: '02',
    title: 'We explore together',
    detail: 'Through questions, reflection and honest conversation, we start to untangle what\'s really going on.',
  },
  {
    step: '03',
    title: 'You gain clarity',
    detail: 'Not because I tell you what to do — but because the right questions help you hear what you already know.',
  },
  {
    step: '04',
    title: 'You leave with a clear next step',
    detail: 'Not a five-year plan. Just one practical, honest thing to do next. That\'s usually enough to break the pattern.',
  },
];

export default function CoachingWhatToExpect() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 110}ms`;
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
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + intro */}
          <div>
            <div className="reveal-item opacity-100 mb-4">
              <span className="teal-badge">What a session looks like</span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-foreground mb-6">
              A conversation, not{' '}
              <span className="font-serif-italic text-gradient-teal">a lecture.</span>
            </h2>
            <div className="reveal-item opacity-100 space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Coaching sessions with Kate are 60 minutes. They can happen online or in person if you&apos;re in the same location.
              </p>
              <p>
                There&apos;s no homework, no workbook and no jargon. Just a focused conversation designed to help you think more clearly about whatever you&apos;re navigating.
              </p>
              <p>
                Most people feel a shift within the first session. Some book a series. Some book one and come back months later. There&apos;s no pressure either way.
              </p>
            </div>

            {/* Stats companion */}
            <div className="reveal-item opacity-100 mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '60', unit: 'mins', label: 'Per session' },
                { value: '1:1', unit: '', label: 'Always personal' },
                { value: '1st', unit: '', label: 'Call is free' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center border border-border">
                  <p className="text-2xl font-800 text-primary">
                    {stat.value}<span className="text-base">{stat.unit}</span>
                  </p>
                  <p className="text-xs text-muted-foreground font-600 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: session flow */}
          <div className="space-y-4">
            {sessionFlow.map((item, idx) => (
              <div
                key={item.step}
                className={`reveal-item opacity-100 flex gap-5 p-5 sm:p-6 rounded-2xl border border-border transition-all duration-300 ${
                  idx === 1 ? 'bg-primary text-primary-foreground border-primary' : 'bg-card'
                }`}
              >
                <span
                  className={`text-3xl font-900 leading-none flex-shrink-0 ${
                    idx === 1 ? 'text-white/25' : 'text-primary/15'
                  }`}
                >
                  {item.step}
                </span>
                <div>
                  <h3 className={`text-base font-700 mb-1 ${idx === 1 ? 'text-white' : 'text-foreground'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${idx === 1 ? 'text-white/75' : 'text-muted-foreground'}`}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

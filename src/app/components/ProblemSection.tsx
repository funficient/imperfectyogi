'use client';

import React, { useEffect, useRef } from 'react';

export default function ProblemSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal-item opacity-100 mb-4">
          <span className="teal-badge">The honest truth</span>
        </div>

        <h2 className="reveal-item opacity-100 section-heading text-foreground mb-8">
          Life can get overwhelming.{' '}
          <span className="font-serif-italic text-gradient-teal">
            Come back to what matters.
          </span>
        </h2>

        <div className="reveal-item opacity-100 max-w-2xl mx-auto space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            Between work, travel, responsibilities and everything else competing for our attention, it&apos;s easy to lose touch with yourself.
          </p>
          <p>
            Sometimes you don&apos;t need another productivity hack. You need a moment to pause. A place to breathe. A chance to reconnect with yourself — and perhaps with a few interesting people along the way.
          </p>
        </div>

        <div className="reveal-item opacity-100 mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            'Feeling stretched thin',
            'Craving something real',
            'Ready for a reset',
            'Just a little curious',
          ].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2.5 rounded-full bg-muted text-sm font-600 text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

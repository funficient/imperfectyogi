'use client';

import React, { useEffect, useRef } from 'react';

const forWho = [
  {
    title: 'Solo travellers',
    body: 'Most people come alone. Small groups mean you\'ll connect quickly. You\'ll leave with real friendships, not just Instagram follows.',
  },
  {
    title: 'People who need a reset',
    body: 'If you\'ve been running on empty and know something needs to change, a retreat gives you the time and space to figure out what that is.',
  },
  {
    title: 'Yoga beginners',
    body: 'You absolutely do not need experience. Sessions are guided for all levels. Curiosity is the only prerequisite.',
  },
  {
    title: 'Digital nomads',
    body: 'You\'re used to moving. A retreat gives you a reason to stay somewhere for a few days and actually absorb it.',
  },
];

export default function RetreatsForWho() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="reveal-item opacity-100 mb-4">
              <span className="teal-badge">Who comes on retreat</span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-foreground mb-6">
              Retreats are for{' '}
              <span className="font-serif-italic text-gradient-teal">real people.</span>
            </h2>
            <p className="reveal-item opacity-100 text-muted-foreground text-lg leading-relaxed">
              Not people who have it all together. Not experienced yogis or seasoned meditators. Just curious, open-minded humans who are ready for something a little different.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {forWho.map((item) => (
              <div
                key={item.title}
                className="reveal-item opacity-100 p-6 rounded-2xl bg-muted border border-border card-hover"
              >
                <h3 className="text-base font-700 text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

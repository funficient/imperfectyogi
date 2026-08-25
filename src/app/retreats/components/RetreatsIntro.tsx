'use client';

import React, { useEffect, useRef } from 'react';

const pillars = [
  { emoji: '🧘', label: 'Yoga & Movement' },
  { emoji: '🌿', label: 'Nature & Environment' },
  { emoji: '💬', label: 'Coaching & Reflection' },
  { emoji: '🤝', label: 'Community & Connection' },
  { emoji: '🍃', label: 'Mindful Nourishment' },
  { emoji: '🌅', label: 'Free Time & Rest' },
];

export default function RetreatsIntro() {
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
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="reveal-item opacity-100 mb-4">
              <span className="teal-badge">What a retreat feels like</span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-foreground mb-6">
              Not a schedule.{' '}
              <span className="font-serif-italic text-gradient-teal">An experience.</span>
            </h2>
            <div className="reveal-item opacity-100 space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                A retreat with ImperfectYogi isn&apos;t a rigid programme packed with back-to-back sessions. It&apos;s a carefully held space where you can breathe, move, connect and rediscover what matters to you.
              </p>
              <p>
                Each day has a gentle rhythm — morning movement, time in nature, shared meals, reflection and real conversation. Evenings are yours to rest, explore or simply sit with a good book.
              </p>
              <p>
                You&apos;ll leave with more than you arrived with — and probably a few people you&apos;ll stay in touch with for years.
              </p>
            </div>
          </div>

          <div className="reveal-item opacity-100 flex flex-col justify-between gap-4 h-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-border text-center card-hover"
                >
                  <span className="text-2xl block mb-2">{p.emoji}</span>
                  <p className="text-xs sm:text-sm font-600 text-foreground">{p.label}</p>
                </div>
              ))}
            </div>
            {/* Companion stat block */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-border mt-2">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-800 text-primary">8</span>
                  <span className="text-xs text-muted-foreground font-600 uppercase tracking-wide">Max Group Size</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-800 text-primary">3+</span>
                  <span className="text-xs text-muted-foreground font-600 uppercase tracking-wide">Countries</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-800 text-primary">100%</span>
                  <span className="text-xs text-muted-foreground font-600 uppercase tracking-wide">Beginner Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

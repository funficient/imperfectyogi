'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CoachingCTA() {
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
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
          {/* Subtle blob inside card */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="reveal-item opacity-100">
              <span className="teal-badge bg-white/15 text-white border-white/20">
                Let&apos;s talk
              </span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-white">
              Start with a free{' '}
              <span className="font-serif-italic">conversation.</span>
            </h2>
            <p className="reveal-item opacity-100 text-white/75 text-base sm:text-lg leading-relaxed max-w-lg">
              The first call is always free and there&apos;s no obligation. We&apos;ll spend 20 minutes getting a feel for whether coaching makes sense for you right now. If it does, great. If not, that&apos;s fine too.
            </p>
            <div className="reveal-item opacity-100 flex flex-col sm:flex-row gap-4">
              <Link
                href="mailto:hello@imperfectyogi.com"
                className="btn-primary text-base px-8 py-4 bg-white text-primary hover:bg-secondary"
              >
                Start a Conversation
              </Link>
              <Link
                href="#coaching-options"
                className="btn-secondary text-base px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                View Coaching Options
              </Link>
            </div>
            <p className="reveal-item opacity-100 text-white/40 text-xs font-600 uppercase tracking-widest mt-2">
              No commitment · No sales pressure · Just a good conversation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

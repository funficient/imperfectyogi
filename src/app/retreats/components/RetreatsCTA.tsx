'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RetreatsCTA() {
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
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal-item opacity-100 mb-4">
          <span className="teal-badge">Ready to go?</span>
        </div>
        <h2 className="reveal-item opacity-100 section-heading text-foreground mb-6">
          Not sure which retreat is right?{' '}
          <span className="font-serif-italic text-gradient-teal">Just ask.</span>
        </h2>
        <p className="reveal-item opacity-100 text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          If you&apos;re curious but not quite ready to commit, drop me a message. There&apos;s no pressure and no sales pitch — just a friendly conversation to help you figure out if a retreat is right for you right now.
        </p>
        <div className="reveal-item opacity-100 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#upcoming-retreats" className="btn-primary text-base px-8 py-4">
            View Upcoming Retreats
          </Link>
          <Link href="mailto:hello@imperfectyogi.com" className="btn-secondary text-base px-8 py-4">
            Send Me a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

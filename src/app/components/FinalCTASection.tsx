'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function FinalCTASection() {
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
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-80">
          {/* Background image */}
          <AppImage
            src="https://images.unsplash.com/photo-1575457701421-056e11604ad7"
            alt="Serene mountain landscape with misty valleys and soft golden morning light, vast open sky above calm ridgeline"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px" />

          {/* Scrim — dark overlay for white text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/55 to-foreground/30" />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col gap-6 max-w-2xl">
            <div className="reveal-item opacity-100">
              <span className="teal-badge bg-white/15 text-white border-white/20">
                Ready when you are
              </span>
            </div>
            <h2 className="reveal-item opacity-100 display-heading text-white">
              Ready to make a little{' '}
              <span className="font-serif-italic">space for yourself?</span>
            </h2>
            <p className="reveal-item opacity-100 text-white/80 text-lg leading-relaxed max-w-lg">
              Find an experience, join a session, book a retreat or simply get in touch. You don&apos;t need to have it all figured out.
            </p>
            <div className="reveal-item opacity-100 flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/#experiences"
                className="btn-primary text-base px-8 py-4 bg-white text-foreground hover:bg-secondary hover:text-primary">

                Explore Experiences
              </Link>
              <Link
                href="mailto:hello@imperfectyogi.com"
                className="btn-secondary text-base px-8 py-4 border-white text-white hover:bg-white hover:text-foreground">

                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

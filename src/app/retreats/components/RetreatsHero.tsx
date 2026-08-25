'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function RetreatsHero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let af: number;
    const handleMouse = (e: MouseEvent) => {
      const mx = e.clientX / window.innerWidth - 0.5;
      const my = e.clientY / window.innerHeight - 0.5;
      af = requestAnimationFrame(() => {
        if (blobRef.current) {
          blobRef.current.style.transform = `translate(${mx * 30}px, ${my * 20}px)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => {window.removeEventListener('mousemove', handleMouse);cancelAnimationFrame(af);};
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background image */}
      <AppImage
        src="https://images.unsplash.com/photo-1634050293912-9c8dea1b9f67"
        alt="Vast mountain landscape at golden hour, mist in valleys, open sky above, atmosphere of stillness and space"
        fill
        className="object-cover"
        priority
        sizes="100vw" />

      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/65 via-foreground/45 to-foreground/70" />

      {/* Blob */}
      <div
        ref={blobRef}
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(42,171,171,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transition: 'transform 1s cubic-bezier(0.22,1,0.36,1)'
        }}
        aria-hidden="true" />


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-700 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
          Retreats
        </div>
        <h1 className="hero-heading text-white mb-6">
          Step away from everyday life.{' '}
          <span className="font-serif-italic" style={{ color: '#7EEAEA' }}>
            Step back into yourself.
          </span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Multi-day experiences combining yoga, creative coaching, nature, connection and space to reset — in beautiful, carefully chosen locations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#upcoming-retreats"
            className="btn-primary text-base px-8 py-4 bg-white text-foreground hover:bg-secondary">

            Explore Upcoming Retreats
          </Link>
          <Link
            href="/#contact"
            className="btn-secondary text-base px-8 py-4 border-white text-white hover:bg-white hover:text-foreground">

            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-700 uppercase tracking-widest text-white">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 bg-white rounded-full scroll-line-inner" />
        </div>
      </div>
    </section>);

}

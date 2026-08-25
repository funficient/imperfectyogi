'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const blobRef3 = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrame: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const mx = (clientX - cx) / cx;
      const my = (clientY - cy) / cy;

      animFrame = requestAnimationFrame(() => {
        if (blobRef1.current) {
          blobRef1.current.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
        }
        if (blobRef2.current) {
          blobRef2.current.style.transform = `translate(${mx * -30}px, ${my * -20}px)`;
        }
        if (blobRef3.current) {
          blobRef3.current.style.transform = `translate(${mx * 20}px, ${my * 25}px)`;
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `rotateY(${mx * 2.5}deg) rotateX(${-my * 2.5}deg)`;
        }
        if (badgeRef.current) {
          const rect = badgeRef.current.getBoundingClientRect();
          const bx = clientX - (rect.left + rect.width / 2);
          const by = clientY - (rect.top + rect.height / 2);
          const dist = Math.hypot(bx, by);
          if (dist < 180) {
            badgeRef.current.style.transform = `translate(${bx * 0.12}px, ${by * 0.12}px)`;
          } else {
            badgeRef.current.style.transform = `translate(0,0)`;
          }
        }
      });
    };

    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMouseMove);
    return () => {
      hero?.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16"
      style={{ perspective: '1200px' }}>

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Atmospheric blob layers */}
      <div
        ref={blobRef1}
        className="blob-primary blob-float absolute w-[55vw] h-[55vw] max-w-3xl max-h-3xl top-[5%] left-[-10%] pointer-events-none"
        style={{ transition: 'transform 1s cubic-bezier(0.22,1,0.36,1)' }}
        aria-hidden="true" />

      <div
        ref={blobRef2}
        className="blob-secondary blob-float-delayed absolute w-[45vw] h-[45vw] max-w-2xl max-h-2xl bottom-[5%] right-[-8%] pointer-events-none"
        style={{ transition: 'transform 1.2s cubic-bezier(0.22,1,0.36,1)' }}
        aria-hidden="true" />

      <div
        ref={blobRef3}
        className="blob-primary absolute w-[30vw] h-[30vw] max-w-lg max-h-lg top-[40%] right-[15%] pointer-events-none opacity-60"
        style={{ transition: 'transform 0.9s cubic-bezier(0.22,1,0.36,1)' }}
        aria-hidden="true" />


      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
        style={{ transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)', transformStyle: 'preserve-3d' }}>

        {/* Badge */}
        <div
          ref={badgeRef}
          className="teal-badge mx-auto mb-8 inline-flex"
          style={{ transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)' }}>

          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Yoga · Retreats · Coaching</span>
        </div>

        {/* Headline */}
        <h1 className="hero-heading text-foreground mb-6">
          Make space for{' '}
          <span className="font-serif-italic text-gradient-teal">
            what matters.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-400">
          Wellness experiences with imperfect yoga, creative coaching, and sustainable tourism for curious humans who want to slow down, reconnect and experience life a little more consciously.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/#experiences" className="btn-primary text-base px-8 py-4">
            Explore Experiences
          </Link>
          <Link href="/#about" className="btn-secondary text-base px-8 py-4">
            Meet Your Guide
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs font-700 uppercase tracking-widest text-muted-foreground/60">
          <span>Beginner Friendly</span>
          <span className="hidden sm:block">·</span>
          <span>Small Groups</span>
          <span className="hidden sm:block">·</span>
          <span>Conscious Travel</span>
          <span className="hidden sm:block">·</span>
          <span>No Experience Needed</span>
        </div>
      </div>

      {/* Hero image strip */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 h-48 sm:h-64 md:h-80">
          <div className="rounded-2xl overflow-hidden col-span-1">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1a5230454-1776850188028.png"
              alt="Woman practicing yoga outdoors on a cliff overlooking the ocean at sunrise, peaceful atmosphere"
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 33vw, 25vw" />

          </div>
          <div className="rounded-2xl overflow-hidden col-span-1">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1b63ef5f0-1769541615533.png"
              alt="Group of people doing yoga together in a bright open studio with natural light streaming in"
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 33vw, 30vw" />

          </div>
          <div className="rounded-2xl overflow-hidden col-span-1">
            <AppImage
              src="https://images.unsplash.com/photo-1729605411084-adde365d534a"
              alt="Aerial view of a tropical beach with turquoise water and lush green cliffs, Bali Indonesia"
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 33vw, 25vw" />

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-700 uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-primary/20 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 bg-primary rounded-full scroll-line-inner" />
        </div>
      </div>
    </section>);

}

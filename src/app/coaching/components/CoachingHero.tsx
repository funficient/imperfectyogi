'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function CoachingHero() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let af: number;
    const handleMouse = (e: MouseEvent) => {
      const mx = e.clientX / window.innerWidth - 0.5;
      const my = e.clientY / window.innerHeight - 0.5;
      af = requestAnimationFrame(() => {
        if (blobRef1.current) {
          blobRef1.current.style.transform = `translate(${mx * 35}px, ${my * 25}px)`;
        }
        if (blobRef2.current) {
          blobRef2.current.style.transform = `translate(${mx * -25}px, ${my * -18}px)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => {window.removeEventListener('mousemove', handleMouse);cancelAnimationFrame(af);};
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Blobs */}
      <div
        ref={blobRef1}
        className="blob-primary blob-float absolute w-[50vw] h-[50vw] max-w-2xl top-0 right-[-10%] pointer-events-none"
        style={{ transition: 'transform 1s cubic-bezier(0.22,1,0.36,1)' }}
        aria-hidden="true" />

      <div
        ref={blobRef2}
        className="blob-secondary blob-float-delayed absolute w-[35vw] h-[35vw] max-w-xl bottom-10 left-[-5%] pointer-events-none"
        style={{ transition: 'transform 1.2s cubic-bezier(0.22,1,0.36,1)' }}
        aria-hidden="true" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="teal-badge">Creative Coaching</span>
            </div>
            <h1 className="hero-heading text-foreground">
              When you know something needs to change — but you&apos;re not sure{' '}
              <span className="font-serif-italic text-gradient-teal">what comes next.</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
              Coaching with Kate is a practical, honest conversation. No jargon. No pressure. Just the space and questions to help you figure out what you actually want — and what to do about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="#coaching-options" className="btn-primary text-base px-8 py-4">
                Explore Coaching Options
              </Link>
              <Link href="mailto:hello@imperfectyogi.com" className="btn-secondary text-base px-8 py-4">
                Start a Conversation
              </Link>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Accredited Coach', 'Online & In-Person', 'First Call Free'].map((tag) =>
              <span key={tag} className="flex items-center gap-1.5 text-sm font-600 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {tag}
                </span>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/10 relative">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1de8d5ea1-1787651538963.png"
                alt="Kate in a warm coaching conversation, seated comfortably in a bright sunlit room with notebooks and tea on the table"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 80vw, 45vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 glass-card rounded-2xl p-4 sm:p-5 shadow-xl max-w-xs">
              <p className="text-sm font-600 text-foreground italic leading-snug">
                &ldquo;The right question changes everything.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-500">— Kate</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

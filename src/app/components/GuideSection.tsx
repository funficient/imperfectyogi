'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const trustPoints = [
{ icon: 'AcademicCapIcon', text: 'Certified yoga teacher with 500+ hours training' },
{ icon: 'GlobeAltIcon', text: 'Led retreats across Europe, Asia and Latin America' },
{ icon: 'SparklesIcon', text: 'Accredited life and creative coach' },
{ icon: 'HeartIcon', text: 'Passionate about conscious, sustainable travel' }];


export default function GuideSection() {
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
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-item opacity-100 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl shadow-primary/10">
              <AppImage
                src="https://images.unsplash.com/photo-1619974917561-0a56514679d6"
                alt="Kate, yoga teacher and guide, smiling warmly in a sunlit outdoor setting surrounded by nature"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 glass-card rounded-2xl p-4 sm:p-5 shadow-xl">
              <p className="text-2xl font-800 text-primary">500+</p>
              <p className="text-xs text-muted-foreground font-600 uppercase tracking-wide">Hours of Teaching</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="reveal-item opacity-100">
              <span className="teal-badge">Your Guide</span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-foreground">
              Hi, I&apos;m Kate.{' '}
              <span className="font-serif-italic text-gradient-teal">I&apos;ll be your guide.</span>
            </h2>
            <div className="reveal-item opacity-100 space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a yoga teacher, certified coach and conscious traveller who believes that the best experiences happen when we step just slightly outside our comfort zone.
              </p>
              <p>
                I created ImperfectYogi because I wanted to build something honest — experiences that meet you exactly where you are, not where you think you should be.
              </p>
              <p>
                No pressure. No perfection required. Just space to explore what feels right for you.
              </p>
            </div>

            <div className="reveal-item opacity-100 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {trustPoints.map((point) =>
              <div key={point.text} className="flex items-start gap-3 p-4 rounded-2xl bg-muted border border-border">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={point.icon as 'AcademicCapIcon'} size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-500 leading-snug">{point.text}</p>
                </div>
              )}
            </div>

            <div className="reveal-item opacity-100 mt-2">
              <Link href="/#about" className="btn-ghost text-base font-700 text-primary">
                Get to know me →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

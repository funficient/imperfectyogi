'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const values = [
{ icon: 'ChatBubbleLeftRightIcon', label: 'Honest over comfortable' },
{ icon: 'LightBulbIcon', label: 'Practical over theoretical' },
{ icon: 'HeartIcon', label: 'Human over clinical' },
{ icon: 'ArrowTrendingUpIcon', label: 'Progress over perfection' }];


export default function CoachingApproach() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-item opacity-100 relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 shadow-xl shadow-primary/8 relative group">
              <AppImage
                src="https://images.unsplash.com/photo-1682609708732-a9b5bf24cd3e"
                alt="Two people in an engaged, thoughtful conversation at a bright outdoor cafe table with natural light and plants"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 80vw, 40vw" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="reveal-item opacity-100">
              <span className="teal-badge">My approach</span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-foreground">
              I ask the questions.{' '}
              <span className="font-serif-italic text-gradient-teal">You find the answers.</span>
            </h2>
            <div className="reveal-item opacity-100 space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I don&apos;t believe in telling people what to do. You already have more answers than you realise — sometimes you just need the right questions to access them.
              </p>
              <p>
                My coaching is grounded in ICF-accredited principles and draws on years of experience working with people across very different life situations. I&apos;m direct, warm and — when needed — usefully challenging.
              </p>
            </div>

            <div className="reveal-item opacity-100 grid grid-cols-2 gap-3 mt-2">
              {values.map((v) =>
              <div key={v.label} className="flex items-center gap-3 p-4 rounded-2xl bg-muted border border-border">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name={v.icon as 'ChatBubbleLeftRightIcon'} size={16} className="text-primary" />
                  </div>
                  <p className="text-sm font-600 text-foreground leading-snug">{v.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

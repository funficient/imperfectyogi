'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function CoachingTestimonial() {
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
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Main testimonial */}
          <blockquote className="reveal-item opacity-100 glass-card rounded-3xl p-7 sm:p-10 flex flex-col gap-5">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) =>
              <Icon key={i} name="StarIcon" variant="solid" size={16} className="text-accent" />
              )}
            </div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed italic flex-1">
              &ldquo;One session with Kate helped me see something I&apos;d been circling for months. She asks the right questions at exactly the right time. No fluff, no jargon — just honest, practical conversation. I walked in feeling foggy and walked out with a plan.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <AppImage
                  src="https://images.unsplash.com/photo-1670435394396-28311ec8d8e5"
                  alt="Amara Osei, woman with bright warm smile and natural background"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full" />

              </div>
              <div>
                <p className="text-sm font-700 text-foreground">Amara Osei</p>
                <p className="text-xs text-muted-foreground">Freelance Writer, Amsterdam</p>
                <p className="text-xs text-accent font-600">Clarity Coaching Session</p>
              </div>
            </div>
          </blockquote>

          {/* Second testimonial */}
          <blockquote className="reveal-item opacity-100 glass-card rounded-3xl p-7 sm:p-10 flex flex-col gap-5">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) =>
              <Icon key={i} name="StarIcon" variant="solid" size={16} className="text-accent" />
              )}
            </div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed italic flex-1">
              &ldquo;I booked three sessions not knowing what to expect. By the third one I&apos;d handed in my notice and started planning a trip I&apos;d been putting off for three years. Kate doesn&apos;t tell you what to do — she helps you hear what you already know.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1bf254c2d-1768540209934.png"
                  alt="Marco Delgado, man with relaxed confident smile outdoors in natural daylight"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full" />

              </div>
              <div>
                <p className="text-sm font-700 text-foreground">Marco Delgado</p>
                <p className="text-xs text-muted-foreground">Product Manager, Barcelona</p>
                <p className="text-xs text-accent font-600">Three Session Pack</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>);

}

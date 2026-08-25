'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function RetreatsTestimonial() {
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
      <div className="max-w-4xl mx-auto">
        <blockquote className="reveal-item opacity-100 glass-card rounded-3xl p-8 sm:p-12 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) =>
            <Icon key={i} name="StarIcon" variant="solid" size={20} className="text-accent" />
            )}
          </div>
          <p className="text-foreground text-lg sm:text-2xl font-500 italic leading-relaxed mb-8">
            &ldquo;I arrived on the retreat not really knowing what to expect. I left having had one of the most grounding experiences of my adult life. Kate creates something genuinely special — warm, human and real. I&apos;ve already booked my next one.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1532e4bc9-1772092408306.png"
                alt="Sienna Hartley, smiling woman with warm expression in natural light"
                width={48}
                height={48}
                className="object-cover w-full h-full" />

            </div>
            <div className="text-left">
              <p className="text-sm font-700 text-foreground">Sienna Hartley</p>
              <p className="text-xs text-muted-foreground">Graphic Designer, London · Weekend Reconnect Retreat</p>
            </div>
          </div>
        </blockquote>
      </div>
    </section>);

}

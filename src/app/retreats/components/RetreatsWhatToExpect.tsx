'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const dayFlow = [
{
  time: 'Morning',
  activity: 'Yoga & Movement',
  detail: 'A gentle or energising yoga practice to wake the body and settle the mind. All levels guided.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_161e60e4f-1775436891860.png",
  imageAlt: 'Peaceful morning yoga practice outdoors on a deck with soft sunrise light and ocean view'
},
{
  time: 'Midday',
  activity: 'Nature & Exploration',
  detail: 'Walks, local experiences, cultural visits or simply time to sit with the landscape around you.',
  image: "https://images.unsplash.com/photo-1602623313423-7c1756cbc8d2",
  imageAlt: 'Lush forest trail with dappled sunlight and a group of people walking together through nature'
},
{
  time: 'Afternoon',
  activity: 'Coaching & Reflection',
  detail: 'Creative coaching exercises, journalling prompts or group conversations that help you gain perspective.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b698d7d9-1773033268046.png",
  imageAlt: 'Small group seated in a circle outdoors having an engaged, animated conversation in afternoon light'
},
{
  time: 'Evening',
  activity: 'Shared Meals & Connection',
  detail: 'Wholesome food, good conversation and time to simply enjoy the company of interesting people.',
  image: "https://images.unsplash.com/photo-1592411261931-a03edd69b423",
  imageAlt: 'Long wooden table set for dinner outdoors at sunset with warm candlelight and people sharing food'
}];


export default function RetreatsWhatToExpect() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">A typical day</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Come as you are.{' '}
            <span className="font-serif-italic text-gradient-teal">Leave as more.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {dayFlow.map((item) =>
          <article key={item.time} className="reveal-item opacity-100 experience-card group flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-700 uppercase tracking-widest text-white/80">
                    {item.time}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-700 text-foreground mb-2">{item.activity}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

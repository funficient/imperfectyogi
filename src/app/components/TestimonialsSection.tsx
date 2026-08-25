'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  name: 'Sienna Hartley',
  role: 'Graphic Designer, London',
  experience: 'Weekend Reconnect Retreat',
  quote:
  'I arrived exhausted and honestly a bit sceptical. I left feeling genuinely lighter. Kate has a rare ability to hold space without pressure. The whole experience felt human and real.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16b7f3773-1772140653588.png",
  avatarAlt: 'Sienna Hartley, smiling woman with warm expression, natural light portrait',
  stars: 5
},
{
  name: 'Marco Delgado',
  role: 'Product Manager, Barcelona',
  experience: 'Sunrise Beach Yoga',
  quote:
  'I\'d never done yoga before and was fully prepared to feel awkward. Kate made it so easy and genuinely funny at times. I booked the next three sessions before I even got back to the hostel.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf254c2d-1768540209934.png",
  avatarAlt: 'Marco Delgado, man with relaxed confident smile outdoors in natural daylight',
  stars: 5
},
{
  name: 'Amara Osei',
  role: 'Freelance Writer, Amsterdam',
  experience: 'Clarity Coaching Session',
  quote:
  'One session with Kate helped me see something I\'d been circling for months. She asks the right questions at exactly the right time. No fluff, no jargon — just honest, practical conversation.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1985c262f-1763294244026.png",
  avatarAlt: 'Amara Osei, woman with bright warm smile and natural background, professional portrait',
  stars: 5
}];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 130}ms`;
              el.classList.add('animate-reveal');
              (el as HTMLElement).style.opacity = '1';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">Real stories</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Don&apos;t just take{' '}
            <span className="font-serif-italic text-gradient-teal">my word for it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) =>
          <blockquote
            key={t.name}
            className="reveal-item opacity-100 glass-card rounded-3xl p-7 sm:p-8 flex flex-col gap-5 card-hover">

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) =>
              <Icon key={i} name="StarIcon" variant="solid" size={16} className="text-accent" />
              )}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm sm:text-base leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  width={44}
                  height={44}
                  className="object-cover w-full h-full" />

                </div>
                <div>
                  <p className="text-sm font-700 text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-accent font-600">{t.experience}</p>
                </div>
              </div>
            </blockquote>
          )}
        </div>
      </div>
    </section>);

}

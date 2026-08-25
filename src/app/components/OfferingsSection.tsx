'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

// 3 cards, grid-cols-3 desktop / grid-cols-1 mobile
// Row 1: [col-1: Yoga] [col-2: Coaching] [col-3: Retreats]
// Placed 3/3 ✓

const offerings = [
{
  id: 'yoga',
  icon: 'SunIcon',
  category: 'Yoga',
  headline: 'Move. Breathe. Reconnect.',
  description:
  'Beginner-friendly yoga experiences designed to help you move, breathe and reconnect — paired with culinary workshops and farm-to-table traditional food.',
  cta: 'Explore Yoga Experiences',
  href: '/#experiences',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd8fbaac-1772264487479.png",
  imageAlt: 'Person in warrior yoga pose on a wooden deck surrounded by tropical greenery and morning light',
  colour: 'from-teal-50 to-transparent'
},
{
  id: 'coaching',
  icon: 'LightBulbIcon',
  category: 'Coaching',
  headline: 'Clarity. Perspective. Change.',
  description:
  'Personalised coaching for people who want clarity, perspective and meaningful change — without the jargon or the pressure to have it all figured out.',
  cta: 'Explore Coaching',
  href: '/coaching',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d22b67fe-1772086653620.png",
  imageAlt: 'Two people having a warm, engaged conversation at a sunlit cafe table with notebooks open',
  colour: 'from-cyan-50 to-transparent'
},
{
  id: 'retreats',
  icon: 'MapPinIcon',
  category: 'Retreats',
  headline: 'Step away. Come back to yourself.',
  description:
  'Transformational experiences combining yoga, creative coaching, nature, connection and space to reset — in beautiful, carefully chosen locations.',
  cta: 'Explore Retreats',
  href: '/retreats',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16eb1ce4e-1765260904479.png",
  imageAlt: 'Small group of people meditating together on a hillside at sunset with mountains in the background',
  colour: 'from-emerald-50 to-transparent'
}];


export default function OfferingsSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="yoga" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">What I offer</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Three ways to{' '}
            <span className="font-serif-italic text-gradient-teal">explore what&apos;s next.</span>
          </h2>
        </div>

        {/* 3-col grid — 3/3 cards ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offerings.map((o) =>
          <article
            key={o.id}
            className="reveal-item opacity-100 experience-card flex flex-col group">

              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <AppImage
                src={o.image}
                alt={o.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="teal-badge bg-white/90 text-primary border-white/50 text-xs">
                    {o.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <Icon name={o.icon as 'SunIcon'} size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-700 text-foreground mb-3">{o.headline}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{o.description}</p>
                <Link href={o.href} className="btn-ghost text-primary font-700 text-sm mt-auto">
                  {o.cta} →
                </Link>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const retreats = [
{
  id: 1,
  title: 'Weekend Reconnect Retreat',
  subtitle: 'A short, powerful pause',
  location: 'Ubud, Bali',
  dates: 'Sept 12–14, 2026',
  duration: '2 nights / 3 days',
  groupSize: 'Max 8 people',
  price: '€320',
  includes: ['All yoga sessions', 'Group coaching workshop', 'Farm-to-table meals', 'Accommodation'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_118f953a5-1764805145733.png",
  imageAlt: 'Intimate yoga meditation group outdoors in a lush jungle clearing with warm afternoon light filtering through trees',
  spots: 3,
  gyg: 'https://www.getyourguide.com',
  featured: true
},
{
  id: 2,
  title: '7-Night Bali Immersion',
  subtitle: 'The full reset',
  location: 'Ubud, Bali',
  dates: 'Oct 4–11, 2026',
  duration: '7 nights / 8 days',
  groupSize: 'Max 8 people',
  price: '€1,450',
  includes: ['Daily yoga', 'Private coaching session', 'Cultural experiences', 'All meals', 'Accommodation'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8281b56-1772094531207.png",
  imageAlt: 'Lush green Bali rice terraces at dawn with morning mist and tropical forest in the far background',
  spots: 5,
  gyg: 'https://www.getyourguide.com',
  featured: true
},
{
  id: 3,
  title: 'Winter Sun Retreat',
  subtitle: 'Escape the grey',
  location: 'Fuerteventura, Spain',
  dates: 'Jan 16–23, 2027',
  duration: '7 nights / 8 days',
  groupSize: 'Max 10 people',
  price: '€1,650',
  includes: ['Daily yoga', 'Coaching workshops', 'Surf option', 'Half board', 'Accommodation'],
  image: "https://images.unsplash.com/photo-1600944661036-9409cd3bc9db",
  imageAlt: 'Golden sandy beach in the Canary Islands with dramatic volcanic cliffs and turquoise Atlantic ocean at sunset',
  spots: 8,
  gyg: 'https://www.getyourguide.com',
  featured: false
}];


export default function UpcomingRetreats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 110}ms`;
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
    <section id="upcoming-retreats" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">What&apos;s coming up</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Upcoming{' '}
            <span className="font-serif-italic text-gradient-teal">Retreats.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {retreats.map((retreat) =>
          <article
            key={retreat.id}
            className="reveal-item opacity-100 bg-card rounded-3xl border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-5 group transition-all duration-400 hover:shadow-2xl hover:shadow-primary/8 hover:border-accent/20">

              {/* Image */}
              <div className="relative h-56 lg:h-auto lg:col-span-2 overflow-hidden">
                <AppImage
                src={retreat.image}
                alt={retreat.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/10" />
                {retreat.featured &&
              <div className="absolute top-4 left-4">
                    <span className="teal-badge bg-primary text-primary-foreground border-primary/20 text-xs">
                      Popular
                    </span>
                  </div>
              }
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between gap-5">
                <div>
                  <p className="text-xs font-700 uppercase tracking-widest text-accent mb-1">{retreat.subtitle}</p>
                  <h3 className="text-xl sm:text-2xl font-700 text-foreground mb-4">{retreat.title}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {[
                  { icon: 'MapPinIcon', text: retreat.location },
                  { icon: 'CalendarIcon', text: retreat.dates },
                  { icon: 'ClockIcon', text: retreat.duration },
                  { icon: 'UserGroupIcon', text: retreat.groupSize }].
                  map((item) =>
                  <div key={item.text} className="flex items-start gap-1.5">
                        <Icon name={item.icon as 'MapPinIcon'} size={13} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground leading-tight">{item.text}</span>
                      </div>
                  )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {retreat.includes.map((inc) =>
                  <span key={inc} className="flex items-center gap-1 text-xs font-500 text-foreground">
                        <Icon name="CheckCircleIcon" size={13} className="text-accent" />
                        {inc}
                      </span>
                  )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-800 text-primary">{retreat.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">per person</span>
                    {retreat.spots <= 5 &&
                  <p className="text-xs text-accent font-600 mt-0.5">
                        Only {retreat.spots} spots remaining
                      </p>
                  }
                  </div>
                  <a
                  href={retreat.gyg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3 justify-center">

                    Book This Retreat
                    <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

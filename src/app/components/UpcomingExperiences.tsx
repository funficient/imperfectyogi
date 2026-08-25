'use client';

import React, { useEffect, useRef, useState } from 'react';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const categories = ['All', 'Yoga', 'Retreat', 'Coaching'];

const events = [
{
  id: 1,
  title: 'Sunrise Beach Yoga',
  category: 'Yoga',
  description: 'Start the day with an energising sunrise flow on the beach. All levels welcome — just bring yourself and a mat.',
  location: 'Canggu, Bali',
  date: 'Every Tuesday & Thursday',
  duration: '90 mins',
  price: '€18',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c573d53b-1767444088653.png",
  imageAlt: 'Person in mountain pose yoga on a sandy beach at sunrise with golden light reflecting on calm ocean water',
  featured: true,
  gyg: 'https://www.getyourguide.com'
},
{
  id: 2,
  title: 'Weekend Reconnect Retreat',
  category: 'Retreat',
  description: 'A 2-day retreat combining yoga, creative coaching, nature walks and shared meals. Limited to 8 people.',
  location: 'Ubud, Bali',
  date: 'Sept 12–14, 2026',
  duration: '2 days',
  price: '€320',
  image: "https://images.unsplash.com/photo-1733235160134-ec59e573b910",
  imageAlt: 'Small intimate group meditation session outdoors in a lush jungle clearing with soft dappled light',
  featured: true,
  gyg: 'https://www.getyourguide.com'
},
{
  id: 3,
  title: 'Farm-to-Table Yoga Morning',
  category: 'Yoga',
  description: 'A gentle morning yoga flow followed by a hands-on cooking workshop using locally grown ingredients.',
  location: 'Seminyak, Bali',
  date: 'Every Saturday',
  duration: '3 hours',
  price: '€45',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8180acc-1772053971388.png",
  imageAlt: 'Vibrant colourful array of fresh tropical vegetables and herbs laid out on a wooden farm table in natural light',
  featured: false,
  gyg: 'https://www.getyourguide.com'
},
{
  id: 4,
  title: 'Clarity Coaching Session',
  category: 'Coaching',
  description: 'A 60-minute one-on-one coaching conversation to help you get unstuck, gain perspective and take a clear next step.',
  location: 'Online or In-Person',
  date: 'Flexible — Book Anytime',
  duration: '60 mins',
  price: '€85',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1472cafec-1772071173317.png",
  imageAlt: 'Woman smiling confidently during a focused one-on-one coaching conversation in a bright airy room',
  featured: false,
  gyg: 'https://www.getyourguide.com'
},
{
  id: 5,
  title: '7-Night Bali Immersion',
  category: 'Retreat',
  description: 'A full week of yoga, coaching, cultural experiences and connection in the heart of Ubud. The reset you\'ve been waiting for.',
  location: 'Ubud, Bali',
  date: 'Oct 4–11, 2026',
  duration: '7 nights',
  price: '€1,450',
  image: "https://images.unsplash.com/photo-1566729695626-26b48da825f8",
  imageAlt: 'Aerial view of lush green rice terraces in Ubud Bali with morning mist and tropical forest in the background',
  featured: true,
  gyg: 'https://www.getyourguide.com'
},
{
  id: 6,
  title: 'Yin Yoga & Sound Bath',
  category: 'Yoga',
  description: 'Slow down completely. A deeply restorative yin yoga practice followed by a 30-minute sound healing session.',
  location: 'Canggu, Bali',
  date: 'Every Sunday Evening',
  duration: '2 hours',
  price: '€25',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e636cac1-1772246563513.png",
  imageAlt: 'Person in deep yin yoga reclined pose on a mat in a candlelit studio with warm amber lighting',
  featured: false,
  gyg: 'https://www.getyourguide.com'
}];


export default function UpcomingExperiences() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeFilter === 'All' ? events : events.filter((e) => e.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 80}ms`;
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
    <section id="experiences" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="reveal-item opacity-100 mb-3">
              <span className="teal-badge">What&apos;s on</span>
            </div>
            <h2 className="reveal-item opacity-100 section-heading text-foreground">
              Upcoming{' '}
              <span className="font-serif-italic text-gradient-teal">Experiences.</span>
            </h2>
          </div>
          {/* Filter pills */}
          <div className="reveal-item opacity-100 flex flex-wrap gap-2">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-600 transition-all duration-200 ${
              activeFilter === cat ?
              'bg-primary text-primary-foreground shadow-md shadow-primary/20' :
              'bg-muted text-muted-foreground hover:bg-secondary hover:text-primary border border-border'}`
              }>

                {cat}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) =>
          <article key={event.id} className="reveal-item opacity-100 experience-card flex flex-col group">
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <AppImage
                src={event.image}
                alt={event.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="teal-badge bg-white/90 text-primary border-white/50 text-xs py-1">
                    {event.category}
                  </span>
                  {event.featured &&
                <span className="teal-badge bg-primary text-primary-foreground border-primary/20 text-xs py-1">
                      Featured
                    </span>
                }
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-700 text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{event.description}</p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="MapPinIcon" size={14} className="text-accent flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CalendarIcon" size={14} className="text-accent flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="ClockIcon" size={14} className="text-accent flex-shrink-0" />
                      <span>{event.duration}</span>
                    </div>
                    <span className="text-base font-800 text-primary">{event.price}</span>
                  </div>
                </div>

                <a
                href={event.gyg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 justify-center w-full">

                  View Experience
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

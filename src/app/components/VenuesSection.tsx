'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const venues = [
{
  name: 'The Rice Terrace Studio',
  location: 'Ubud, Bali',
  description: 'A beautifully open-air studio nestled among the rice terraces. Morning mist, birdsong and the most grounding yoga practice you\'ll ever have.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12baa3ecc-1767446704575.png",
  imageAlt: 'Stunning open-air bamboo yoga studio surrounded by lush green rice terraces and tropical trees in Ubud Bali',
  website: 'https://example.com',
  experiences: ['Yoga', 'Retreats']
},
{
  name: 'Sanur Beach Club',
  location: 'Sanur, Bali',
  description: 'A calm, welcoming space right on the seafront. Perfect for sunrise flows, afternoon workshops and shared meals with the ocean as your backdrop.',
  image: "https://images.unsplash.com/photo-1620752685007-98c850478a48",
  imageAlt: 'Serene tropical beach club with wooden decking, palm trees and turquoise ocean views in warm morning light',
  website: 'https://example.com',
  experiences: ['Yoga', 'Farm-to-Table']
},
{
  name: 'Canggu Eco Retreat',
  location: 'Canggu, Bali',
  description: 'A sustainably built retreat centre surrounded by jungle gardens. Thoughtful, calm and beautifully designed for those who want to properly switch off.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1068b8d68-1776424781852.png",
  imageAlt: 'Eco-friendly jungle retreat centre with natural wood architecture, hanging plants and a serene pool surrounded by tropical forest',
  website: 'https://example.com',
  experiences: ['Retreats', 'Coaching']
}];


export default function VenuesSection() {
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
    <section id="venues" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">The locations</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Good experiences need{' '}
            <span className="font-serif-italic text-gradient-teal">good places.</span>
          </h2>
          <p className="reveal-item opacity-100 text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            I partner with beautiful, welcoming places that make it easier to slow down, connect and enjoy the moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {venues.map((venue) =>
          <article key={venue.name} className="reveal-item opacity-100 venue-card group flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={venue.image}
                alt={venue.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-700 text-foreground">{venue.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                  <Icon name="MapPinIcon" size={13} className="text-accent" />
                  <span>{venue.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{venue.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {venue.experiences.map((exp) =>
                <span key={exp} className="px-3 py-1 rounded-full bg-secondary text-xs font-600 text-primary border border-border">
                      {exp}
                    </span>
                )}
                </div>
                <a
                href={venue.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm text-primary font-600">

                  Visit venue website →
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

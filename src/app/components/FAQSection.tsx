'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'Do I need yoga experience?',
    a: 'Not at all. All sessions are designed to be beginner-friendly. Whether it\'s your first time on a mat or you\'ve been practising for years, you\'ll be guided at your own pace.',
  },
  {
    q: 'What should I wear and bring?',
    a: 'Comfortable, stretchy clothes you can move in. A yoga mat is usually provided, but you\'re welcome to bring your own. Water, sunscreen for outdoor sessions and an open mind.',
  },
  {
    q: 'How physically demanding are the sessions?',
    a: 'That depends on the session — each experience listing tells you the intensity level. In general, I focus on accessible, mindful movement rather than athletic performance.',
  },
  {
    q: 'Are retreats suitable for solo travellers?',
    a: 'Absolutely. Most people come alone and leave with new friends. Small group sizes mean everyone gets to connect properly.',
  },
  {
    q: 'What happens if the weather changes?',
    a: 'For outdoor sessions, I always have a backup indoor location. You\'ll be notified in advance if any changes are needed.',
  },
  {
    q: 'How do I book?',
    a: 'Most experiences are bookable directly through GetYourGuide. For retreats and coaching, you can enquire directly through the contact form and I\'ll get back to you within 24 hours.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'GetYourGuide experiences follow their standard cancellation policy (usually free cancellation up to 24 hours before). For retreats and coaching, cancellation terms are outlined clearly at the time of booking.',
  },
  {
    q: 'I\'ve never done yoga before. Will I manage?',
    a: 'Yes. I promise. I\'ve taught complete beginners more times than I can count. The only thing you need is willingness. You\'ll be surprised how quickly you find your feet.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 60}ms`;
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
    <section id="contact" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal-item opacity-100 mb-4">
            <span className="teal-badge">Common questions</span>
          </div>
          <h2 className="reveal-item opacity-100 section-heading text-foreground">
            Wondering if it&apos;s{' '}
            <span className="font-serif-italic text-gradient-teal">right for you?</span>
          </h2>
        </div>

        <div className="space-y-0 mb-12">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="reveal-item opacity-100 faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm sm:text-base font-600 text-foreground group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'bg-primary text-primary-foreground rotate-45' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <Icon name="PlusIcon" size={14} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item opacity-100 text-center">
          <p className="text-muted-foreground mb-4 text-sm">Still have a question?</p>
          <Link href="mailto:hello@imperfectyogi.com" className="btn-ghost text-primary font-700 text-base">
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="contact" aria-labelledby="cta-heading">
      <div className="cta-banner__bg" aria-hidden="true">
        <div className="cta-banner__orb cta-banner__orb--1" />
        <div className="cta-banner__orb cta-banner__orb--2" />
      </div>

      <div className="container cta-banner__inner">
        <ScrollReveal>
          <span className="section-tag">Ready to Start?</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="cta-banner__title" id="cta-heading">
            Let's Build Your Next
            <br />
            <span className="text-gradient">High-Performance Website</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="cta-banner__desc">
            Place a free request. We'll analyze your current site,
            identify quick wins, and outline a plan to 2-3x your web performance.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="cta-banner__actions">
            <a href="/request" className="btn btn--primary btn--lg">
              <span className="btn__label">Place a Request</span>
              <span className="btn__hover"><span>Place a Request</span><ArrowRight size={16} /></span>
              <span className="btn__dot" />
            </a>
            <span className="cta-banner__response">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="3" fill="var(--red-500)" opacity="0.6"/>
                <circle cx="7" cy="7" r="3" fill="var(--red-500)">
                  <animate attributeName="r" from="3" to="6" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
              Typically respond within 24 hours
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

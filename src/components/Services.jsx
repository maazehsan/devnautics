import { services } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import './Services.css';

const icons = {
  code: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M10 9L5 14l5 5M18 9l5 5-5 5M16 7l-4 14" stroke="url(#g1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <defs><linearGradient id="g1" x1="5" y1="7" x2="23" y2="21" gradientUnits="userSpaceOnUse"><stop stopColor="#f87171"/><stop offset="1" stopColor="#991b1b"/></linearGradient></defs>
    </svg>
  ),
  layout: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="url(#g2)" strokeWidth="1.8"/>
      <path d="M4 11h20M12 11v13" stroke="url(#g2)" strokeWidth="1.8"/>
      <defs><linearGradient id="g2" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#f87171"/><stop offset="1" stopColor="#991b1b"/></linearGradient></defs>
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 22V14M12 22V8M18 22V12M24 22V6" stroke="url(#g5)" strokeWidth="2.2" strokeLinecap="round"/>
      <defs><linearGradient id="g5" x1="6" y1="6" x2="24" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#f87171"/><stop offset="1" stopColor="#991b1b"/></linearGradient></defs>
    </svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M16.5 4.5a6 6 0 00-7.5 7.5l-4.5 4.5a2.12 2.12 0 003 3l4.5-4.5a6 6 0 007.5-7.5L17 10l-3-3 2.5-2.5z" stroke="url(#g6)" strokeWidth="1.8" strokeLinejoin="round"/>
      <defs><linearGradient id="g6" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#f87171"/><stop offset="1" stopColor="#991b1b"/></linearGradient></defs>
    </svg>
  ),
};

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title" id="services-heading">
              Services Built for <span className="text-gradient">Growth</span>
            </h2>
            <p className="section-desc">
              From concept to deployment, we deliver end-to-end web solutions
              that are fast, scalable, and designed to drive measurable results.
            </p>
          </div>
        </ScrollReveal>

        <div className="services__grid">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100} className={`services__card-wrap services__card-wrap--${i + 1}`}>
              <article className={`services__card ${i === 0 ? 'services__card--tall' : ''} ${i === 3 ? 'services__card--wide' : ''}`}>
                <div className="services__icon">{icons[service.icon]}</div>
                <div className="services__card-text">
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-desc">{service.description}</p>
                </div>
                <div className="services__card-glow" aria-hidden="true" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

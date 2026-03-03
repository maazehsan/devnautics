import { portfolioItems } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title" id="portfolio-heading">
              Projects That Speak <span className="text-gradient">Volumes</span>
            </h2>
            <p className="section-desc">
              A selection of recent client work showcasing measurable impact
              across SaaS, web apps, and product launches.
            </p>
          </div>
        </ScrollReveal>

        <div className="portfolio__grid">
          {portfolioItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 140} className="portfolio__card-wrap">
              <article className="portfolio__card">
                <div className="portfolio__image">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="portfolio__img" />
                  ) : (
                    <div className="portfolio__image-placeholder">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                        <rect x="4" y="8" width="32" height="24" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
                        <path d="M4 14h32" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                        <circle cx="8" cy="11" r="1.5" fill="rgba(220,38,38,0.4)"/>
                        <circle cx="13" cy="11" r="1.5" fill="rgba(255,255,255,0.08)"/>
                        <circle cx="18" cy="11" r="1.5" fill="rgba(255,255,255,0.08)"/>
                      </svg>
                    </div>
                  )}
                  <div className="portfolio__overlay">
                    <span className="portfolio__outcome">{item.outcome}</span>
                  </div>
                </div>
                <div className="portfolio__info">
                  <span className="portfolio__category">{item.category}</span>
                  <h3 className="portfolio__title">{item.title}</h3>
                  <p className="portfolio__desc">{item.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

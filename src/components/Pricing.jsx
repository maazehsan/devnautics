import { ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Investment</span>
            <h2 className="section-title" id="pricing-heading">
              Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="section-desc">
              Clear pricing with no hidden fees. Choose the tier that matches
              your project scope — every plan includes our full attention.
            </p>
          </div>
        </ScrollReveal>

        <div className="pricing__grid">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 120} className="pricing__card-wrap">
              <div className={`pricing__card ${plan.highlighted ? 'pricing__card--popular' : ''}`}>
                {plan.highlighted && (
                  <span className="pricing__badge">Most Popular</span>
                )}
                <div className="pricing__card-header">
                  <h3 className="pricing__plan-name">{plan.name}</h3>
                  <p className="pricing__plan-desc">{plan.description}</p>
                </div>
                <div className="pricing__price">
                  <span className="pricing__amount">{plan.price}</span>
                  <span className="pricing__period">/ {plan.period}</span>
                </div>
                <ul className="pricing__features">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="pricing__feature">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 8.5l3 3 5-6" stroke="var(--red-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`btn ${plan.highlighted ? 'btn--primary' : 'btn--ghost'} pricing__cta`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="btn__label">{plan.cta}</span>
                  <span className="btn__hover"><span>{plan.cta}</span><ArrowRight size={16} /></span>
                  <span className="btn__dot" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

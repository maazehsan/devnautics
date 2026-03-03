import { stats, values } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import './WhyDevNautics.css';

export default function WhyDevNautics() {
  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Why DevNautics</span>
            <h2 className="section-title" id="why-heading">
              Not Just Another <span className="text-gradient">Agency</span>
            </h2>
            <p className="section-desc">
              We combine engineering precision with design intuition to build
              digital products that actually move business metrics.
            </p>
          </div>
        </ScrollReveal>

        <div className="why__grid">
          {values.map((val, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="why__card">
                <div className="why__card-index">0{i + 1}</div>
                <h3 className="why__card-title">{val.title}</h3>
                <p className="why__card-desc">{val.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { processSteps } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import './Process.css';

export default function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title" id="process-heading">
              A Process Designed for <span className="text-gradient">Results</span>
            </h2>
            <p className="section-desc">
              Four focused phases that take your project from initial idea to a
              live, high-performing product — with no surprises along the way.
            </p>
          </div>
        </ScrollReveal>

        <div className="process__timeline">
          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150} className="process__step-wrap">
              <div className="process__step">
                <div className="process__step-marker">
                  <span className="process__step-number">{step.step}</span>
                  {i < processSteps.length - 1 && (
                    <div className="process__step-line" aria-hidden="true" />
                  )}
                </div>
                <div className="process__step-content">
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

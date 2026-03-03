import { motion } from 'framer-motion';
import { Circle, ArrowRight } from 'lucide-react';
import { stats } from '../data/siteData';
import HeroBackground from './HeroBackground';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Hero">
      {/* Geometric animated background */}
      <HeroBackground />

      <div className="hero__content">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <span className="hero__tag">
            <Circle size={8} className="hero__tag-dot" />
            Modern Web Studio
          </span>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <h1 className="hero__title">
            We Build
            <br />
            <span className="hero__title-accent">Digital Experiences</span>
            <br />
            That Convert
          </h1>
        </motion.div>

        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
          <p className="hero__subtitle">
            High-performance websites and web applications engineered to
            accelerate growth, capture leads, and outperform your competition.
          </p>
        </motion.div>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg" onClick={(e) => handleScroll(e, '#contact')}>
              <span className="btn__label">Start Your Project</span>
              <span className="btn__hover"><span>Start Your Project</span><ArrowRight size={16} /></span>
              <span className="btn__dot" />
            </a>
            <a href="#portfolio" className="btn btn--ghost btn--lg" onClick={(e) => handleScroll(e, '#portfolio')}>
              <span className="btn__label">View Our Work</span>
              <span className="btn__hover"><span>View Our Work</span><ArrowRight size={16} /></span>
              <span className="btn__dot" />
            </a>
          </div>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <div className="hero__trust">
            {stats.map((stat, i) => (
              <div className="hero__trust-item" key={i}>
                <span className="hero__trust-number">{stat.number}</span>
                <span className="hero__trust-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}

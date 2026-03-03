import { testimonials } from '../data/siteData';
import ScrollReveal from './ScrollReveal';
import './Testimonials.css';

function TestimonialCard({ author, text }) {
  return (
    <div className="tcard">
      <div className="tcard__header">
        <img
          className="tcard__avatar"
          src={author.avatar}
          alt={author.name}
          width="48"
          height="48"
          loading="lazy"
        />
        <div className="tcard__author-info">
          <span className="tcard__name">{author.name}</span>
          <span className="tcard__handle">{author.handle}</span>
        </div>
      </div>
      <p className="tcard__text">{text}</p>
    </div>
  );
}

export default function Testimonials() {
  /* Duplicate the array 4× so the marquee loops seamlessly */
  const items = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-tag">Client Voices</span>
            <h2 className="section-title" id="testimonials-heading">
              Trusted by Teams That <span className="text-gradient">Ship</span>
            </h2>
            <p className="section-desc">
              Don't take our word for it. Here's what our clients have to say
              about working with DevNautics.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width marquee strip */}
      <div className="testimonials__marquee-wrap">
        <div className="testimonials__marquee-track">
          {items.map((t, i) => (
            <TestimonialCard key={i} author={t.author} text={t.text} />
          ))}
        </div>

        {/* Edge fades */}
        <div className="testimonials__fade testimonials__fade--left" aria-hidden="true" />
        <div className="testimonials__fade testimonials__fade--right" aria-hidden="true" />
      </div>
    </section>
  );
}

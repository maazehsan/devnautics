import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header portfolio__teaser">
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title" id="portfolio-heading">
              Projects That Speak <span className="text-gradient">Volumes</span>
            </h2>
            <p className="section-desc">
              Explore our complete portfolio to see how we turn ambitious ideas
              into high-performing digital products.
            </p>
            <Link to="/portfolio" className="portfolio__link">
              View All Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

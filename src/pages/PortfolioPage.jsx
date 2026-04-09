import HeroBackground from '../components/HeroBackground';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioItems } from '../data/siteData';
import './PortfolioPage.css';

export default function PortfolioPage() {
  return (
    <main className="portfolio-page" aria-labelledby="portfolio-page-heading">
      <HeroBackground />

      <section className="portfolio-page__intro">
        <div className="container">
          <ScrollReveal>
            <div className="portfolio-page__intro-content">
              <span className="section-tag">Full Portfolio</span>
              <h1 className="portfolio-page__title" id="portfolio-page-heading">
                Projects Built To <span className="text-gradient">Perform</span>
              </h1>
              <p className="portfolio-page__subtitle">
                Explore the complete collection of client projects we have
                designed and developed across different industries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="portfolio-page__list" aria-label="Portfolio projects">
        <div className="container">
          <div className="portfolio-page__grid">
            {portfolioItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100} className="portfolio-page__card-wrap">
                <article className="portfolio-page__card">
                  <div className="portfolio-page__image">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="portfolio-page__img" />
                    ) : (
                      <div className="portfolio-page__image-placeholder" aria-hidden="true" />
                    )}
                    <div className="portfolio-page__overlay">
                      <span className="portfolio-page__outcome">{item.outcome}</span>
                    </div>
                  </div>

                  <div className="portfolio-page__info">
                    <span className="portfolio-page__category">{item.category}</span>
                    <h2 className="portfolio-page__project-title">{item.title}</h2>
                    <p className="portfolio-page__desc">{item.description}</p>
                    <a
                      className="portfolio-page__project-link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Project
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
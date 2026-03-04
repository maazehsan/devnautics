import { useLocation, useNavigate, Link } from 'react-router-dom';
import { navLinks, footerLinks } from '../data/siteData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTarget = (target) => {
    if (!target) return;
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFooterLink = (e, link) => {
    const { href, target } = link;
    if (!target) return; // let normal nav happen when no section target

    e.preventDefault();

    const go = () => scrollToTarget(target);
    if (location.pathname !== '/home') {
      navigate('/home');
      setTimeout(go, 120);
    } else {
      go();
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <Link to="/home" className="footer__brand" aria-label="DevNautics Home">
              <img src={new URL('/images/logo2.jpeg', import.meta.url).href} alt="DevNautics" className="footer__logo-img" />
            </Link>
            <a href="mailto:hello@devnautics.io" className="footer__email">
              hello@devnautics.io
            </a>
          </div>

          <div className="footer__links-col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__list">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleFooterLink(e, link)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__list">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleFooterLink(e, link)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h4 className="footer__col-title">Connect</h4>
            <ul className="footer__list">
              {footerLinks.social.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} DevNautics. All rights reserved.
          </p>
          <nav className="footer__bottom-nav" aria-label="Footer navigation">
            {navLinks.slice(0, 4).map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="footer__bottom-link"
                onClick={(e) => handleFooterLink(e, link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

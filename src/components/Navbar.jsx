import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import './Navbar.css';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navLinks[0].label);
  const isClickScrolling = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getSectionId = (link) => link.target || '#hero';

  /* Update active tab based on scroll position - ONLY on home page */
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveTab(''); // No active tab if not on home
      return;
    }

    const sections = navLinks
      .map((l) => ({ label: l.label, el: document.querySelector(getSectionId(l)) }))
      .filter((s) => s.el);

    const onScroll = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY + window.innerHeight / 3;

      /* If near top, always pick Home */
      if (window.scrollY < 100) {
        setActiveTab(navLinks[0].label);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= scrollY) {
          setActiveTab(sections[i].label);
          return;
        }
      }
      setActiveTab(navLinks[0].label);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const handleClick = (e, link) => {
    e.preventDefault();
    const { label, href } = link;
    const sectionId = getSectionId(link);

    const scrollToSection = () => {
      const target = document.querySelector(sectionId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    setActiveTab(label);
    isClickScrolling.current = true;
    setTimeout(() => { isClickScrolling.current = false; }, 900);

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(scrollToSection, 120);
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="tubenav" role="banner">
      <nav className="tubenav__pill" aria-label="Main navigation">
        {/* Logo inside the pill */}
        <Link to="/" className="tubenav__logo" aria-label="DevNautics Home">
          <img src={new URL('/images/logo1.png', import.meta.url).href} alt="DevNautics" />
        </Link>
        {navLinks.map((link) => {
          const isActive = activeTab === link.label;
          /* Hide Home & Testimonials on mobile */
          const mobileHide = link.label === 'Home' || link.label === 'Testimonials'
            ? ' tubenav__link--mobile-hide'
            : '';

          return (
            <Link
              key={link.label}
              to={link.href}
              className={`tubenav__link${mobileHide} ${isActive ? 'tubenav__link--active' : ''}`}
              onClick={(e) => handleClick(e, link)}
            >
              <span className="tubenav__label">{link.label}</span>

              {/* Animated "lamp" indicator */}
              {isActive && (
                <motion.div
                  layoutId="tubelamp"
                  className="tubenav__lamp"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <span className="tubenav__lamp-bar" />
                  <span className="tubenav__lamp-glow tubenav__lamp-glow--1" />
                  <span className="tubenav__lamp-glow tubenav__lamp-glow--2" />
                  <span className="tubenav__lamp-glow tubenav__lamp-glow--3" />
                </motion.div>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

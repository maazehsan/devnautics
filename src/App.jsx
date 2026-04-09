import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestProject from './pages/RequestProject';
import PortfolioPage from './pages/PortfolioPage';
import Footer from './components/Footer';
import './App.css';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // If there's a hash (anchor) try to scroll to it, otherwise ensure top
    if (hash) {
      // allow DOM to mount
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }

    // Normal navigation: ensure we're at top (prevent flashes from restored position)
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <ScrollHandler />
        {/* Grain texture overlay */}
        <div className="grain" aria-hidden="true" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<RequestProject />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { motion } from 'framer-motion';
import './HeroBackground.css';

function ElegantShape({ className = '', delay = 0, width = 400, height = 100, rotate = 0, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`elegant-shape ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width, height }}
        className="elegant-shape__inner"
      >
        <div className="elegant-shape__pill" style={{ background: gradient }} />
      </motion.div>
    </motion.div>
  );
}

export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      {/* Ambient gradient wash */}
      <div className="hero-bg__ambient" />

      {/* Floating geometric pill shapes */}
      <div className="hero-bg__shapes">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="linear-gradient(to right, rgba(220, 38, 38, 0.15), transparent)"
          className="shape--1"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="linear-gradient(to right, rgba(239, 68, 68, 0.15), transparent)"
          className="shape--2"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="linear-gradient(to right, rgba(153, 27, 27, 0.18), transparent)"
          className="shape--3"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="linear-gradient(to right, rgba(248, 113, 113, 0.12), transparent)"
          className="shape--4"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="linear-gradient(to right, rgba(185, 28, 28, 0.14), transparent)"
          className="shape--5"
        />
      </div>

      {/* Top/bottom vignette */}
      <div className="hero-bg__vignette" />
    </div>
  );
}

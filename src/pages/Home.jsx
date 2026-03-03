import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyDevNautics from '../components/WhyDevNautics';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyDevNautics />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CtaBanner />
    </main>
  );
}

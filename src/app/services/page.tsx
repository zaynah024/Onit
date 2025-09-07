import Header from '../home/components/header'
import HeroSection from '../services/components/hero';
import Cards from '../services/components/cards';
import Results from '../services/components/results';
import TestimonialsSection from './components/testimonials';
import BuildSection from '../home/components/build';
import Footer from '../home/components/footer';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    <Cards />
    <Results />
    <TestimonialsSection />
    <BuildSection />
    <Footer />
    </div>
  );
}

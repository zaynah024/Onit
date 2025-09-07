import Header from '../home/components/header'
import HeroSection from './components/hero';
import Results from '../services/components/results';
import TestimonialsSection from '../services/components/testimonials';
import BuildSection from '../home/components/build';
import Footer from '../home/components/footer';
import CardsSection from './components/cards';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    <CardsSection />
    <Results />
    <TestimonialsSection />
    <BuildSection />
    
    <Footer />
    </div>
  );
}

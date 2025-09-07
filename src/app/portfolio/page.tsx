import Header from '../home/components/header'
import HeroSection from '../portfolio/components/hero';
import BuildSection from '../home/components/build';
import Footer from '../home/components/footer';
import CaseStudyCards from './components/casestudy';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    <CaseStudyCards />
    <BuildSection />
    
    <Footer />
    
    </div>
  );
}

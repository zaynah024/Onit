import Header from '../home/components/header'
import HeroSection from './components/hero';

import ContactSection from '../industrydetail/components/contactus';
import BuildSection from '../home/components/build';
import FAQSection from './components/FAQ';
import Footer from '../home/components/footer';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    
    <ContactSection />
    <FAQSection />
    <BuildSection />
    <Footer />
    </div>
  );
}

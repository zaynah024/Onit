import Header from '../home/components/header'
import HeroSection from './components/hero';
import AboutUs from '../home/components/aboutus';
import ContactSection from '../servicedetail/components/contactus';
import StatsSection from '../home/components/stats';
import HollowText from './components/hollow';
import AwardsSection from './components/awards';
import TeamSection from './components/team';
import BlogSection from './components/blogs';
import BuildSection from '../home/components/build';
import Footer from '../home/components/footer';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    <AboutUs />
    <StatsSection />
    <HollowText />
    <AwardsSection />
    <TeamSection />
    <BlogSection />
    
    <ContactSection />
    <BuildSection />
    <Footer />
    </div>
  );
}

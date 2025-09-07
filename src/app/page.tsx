import Header from './home/components/header'
import HeroSection from './home/components/herosection';
import Companies from './home/components/companies';
import AboutUs from './home/components/aboutus';
import StatsSection from './home/components/stats';
import ServicesSection from './home/components/services';
import TechStackSection from './home/components/techstack';
import SolutionsSection from './home/components/solutions';
import WorkProcess from './home/components/workprocess';
import Results from './home/components/results';
import YourAdvantage from './home/components/advantage';
import Container from './home/components/container';
import MapSection from './home/components/map';
import BuildSection from './home/components/build';
import Footer from './home/components/footer';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    <Companies />
    <AboutUs />
    <StatsSection />
    <ServicesSection />
    <TechStackSection />
    <SolutionsSection />
    <WorkProcess />
    <Results />
        <YourAdvantage />
    <Container />
    <MapSection />
    <BuildSection />
    <Footer />
    </div>
  );
}

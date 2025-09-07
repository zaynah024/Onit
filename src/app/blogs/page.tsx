import Header from '../home/components/header'
import HeroSection from '../blogs/components/hero';
import BuildSection from '../home/components/build';
import InsightsSection from './components/insights';
import BlogSection from '../blogs/components/blogs';
import Footer from '../home/components/footer';
export default function App() {
  return (
    <div>
      <Header />
    <HeroSection />
    <InsightsSection />
    <BlogSection />
    <BuildSection />
    <Footer />
    </div>
  );
}

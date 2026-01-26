import { useLocation } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyMeSection from '@/components/WhyMeSection';
import ServicesSection from '@/components/ServicesSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import Footer from '@/components/Footer';

const ACCESS_TOKEN = 'j34589gdfh3987';

const Index = () => {
  const location = useLocation();
  const hasAccess = new URLSearchParams(location.search).get('t') === ACCESS_TOKEN;

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-2xl font-semibold">
        Coming soon...
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <WhyMeSection />
          <ServicesSection />
          <LeadMagnetSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

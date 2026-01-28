import { Navigate, useLocation, useParams } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyMeSection from '@/components/WhyMeSection';
import ServicesSection from '@/components/ServicesSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();
  const lower = lang?.toLowerCase();
  const normalizedLang = lower === 'pl' ? 'pl' : lower === 'en' ? 'en' : null;

  if (!normalizedLang) {
    return <Navigate to={`/en${location.search}`} replace />;
  }

  return (
    <LanguageProvider initialLanguage={normalizedLang}>
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

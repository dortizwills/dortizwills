import { FC, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ProductDesigns from './pages/ProductDesigns';
import MarketingDesigns from './pages/GraphicDesigns';
import NotFound from './pages/NotFound';
import QuickServices from './pages/QuickServices';
import CampingApp from './pages/CampingApp';
import GourmetRecipes from './pages/GourmetRecipes';
import MobileApps from './pages/MobileApps';
import Sidebar from './components/Sidebar';

// Marketing Designs inner pages
import DataDrivenEbooks from './pages/graphic-designs/DataDrivenEbooks';
import EmailMarketing from './pages/graphic-designs/EmailMarketing';
import EventDesigns from './pages/graphic-designs/EventDesigns';
import ProductIllustrations from './pages/graphic-designs/ProductIllustrations';
import SocialMedia from './pages/graphic-designs/SocialMedia';
import CaseStudies from './pages/graphic-designs/CaseStudies';

// UX/UI Designs inner pages
import AdherePlus from './pages/AdherePlus';
import GrammyMuseum from './pages/GrammyMuseum';

const App: FC = () => {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Sidebar />
      <div className="pt-16 sm:pt-0">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/product-designs" element={<ProductDesigns />} />
          <Route path="/product-designs/quick-services" element={<QuickServices />} />
          <Route path="/product-designs/camping-app" element={<CampingApp />} />
          <Route path="/product-designs/gourmet-recipes" element={<GourmetRecipes />} />
          <Route path="/product-designs/adhere-plus" element={<AdherePlus />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/product-designs/mobile-apps" element={<MobileApps />} />
          <Route path="/product-designs/grammy-museum" element={<GrammyMuseum />} />
          <Route path="/graphic-designs" element={<MarketingDesigns />} />
          <Route path="/graphic-designs/data-driven-ebooks" element={<DataDrivenEbooks />} />
          <Route path="/graphic-designs/email-marketing" element={<EmailMarketing />} />
          <Route path="/graphic-designs/product-illustrations" element={<ProductIllustrations />} />
          <Route path="/graphic-designs/social-media" element={<SocialMedia />} />
          <Route path="/graphic-designs/case-studies" element={<CaseStudies />} />
          <Route path="/graphic-designs/event-designs" element={<EventDesigns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

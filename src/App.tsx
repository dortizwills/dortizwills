
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProductDesigns from "./pages/ProductDesigns";
import GourmetRecipes from "./pages/GourmetRecipes";
import CampingApp from "./pages/CampingApp";
import QuickServices from "./pages/QuickServices";
import AdherePlus from "./pages/AdherePlus";
import MobileApps from "./pages/MobileApps";
import GrammyMuseum from "./pages/GrammyMuseum";
import GraphicDesigns from "./pages/GraphicDesigns";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

// Graphic Design Detail Pages
import DataDrivenEbooks from "./pages/graphic-designs/DataDrivenEbooks";
import EmailMarketing from "./pages/graphic-designs/EmailMarketing";
import ProductIllustrations from "./pages/graphic-designs/ProductIllustrations";
import SocialMedia from "./pages/graphic-designs/SocialMedia";
import CaseStudies from "./pages/graphic-designs/CaseStudies";
import EventDesigns from "./pages/graphic-designs/EventDesigns";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product-designs" element={<ProductDesigns />} />
          <Route path="/product-designs/gourmet-recipes" element={<GourmetRecipes />} />
          <Route path="/product-designs/camping-app" element={<CampingApp />} />
          <Route path="/product-designs/quick-services" element={<QuickServices />} />
          <Route path="/product-designs/adhere-plus" element={<AdherePlus />} />
          <Route path="/product-designs/mobile-apps" element={<MobileApps />} />
          <Route path="/product-designs/grammy-museum" element={<GrammyMuseum />} />
          <Route path="/graphic-designs" element={<GraphicDesigns />} />
          <Route path="/graphic-designs/data-driven-ebooks" element={<DataDrivenEbooks />} />
          <Route path="/graphic-designs/email-marketing" element={<EmailMarketing />} />
          <Route path="/graphic-designs/product-illustrations" element={<ProductIllustrations />} />
          <Route path="/graphic-designs/social-media" element={<SocialMedia />} />
          <Route path="/graphic-designs/case-studies" element={<CaseStudies />} />
          <Route path="/graphic-designs/event-designs" element={<EventDesigns />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

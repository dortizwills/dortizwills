
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

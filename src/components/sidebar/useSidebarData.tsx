
import { useState } from 'react';
import { 
  Home, 
  LayoutDashboard, 
  Image, 
  HelpCircle, 
  MessageSquare, 
  FileText
} from 'lucide-react';

export const useSidebarData = () => {
  const [productDesignsOpen, setProductDesignsOpen] = useState(false);
  const [marketingDesignsOpen, setMarketingDesignsOpen] = useState(false);

  const toggleProductDesigns = () => {
    if (!productDesignsOpen) {
      setMarketingDesignsOpen(false);
    }
    setProductDesignsOpen(!productDesignsOpen);
  };

  const toggleMarketingDesigns = () => {
    if (!marketingDesignsOpen) {
      setProductDesignsOpen(false);
    }
    setMarketingDesignsOpen(!marketingDesignsOpen);
  };
  
  const productDesigns = [
    { name: 'Quick Services', path: '/product-designs/quick-services' },
    { name: 'Camping App', path: '/product-designs/camping-app' },
    { name: 'Gourmet Recipes', path: '/product-designs/gourmet-recipes' },
    { name: 'Adhere Plus', path: '/product-designs/adhere-plus' },
    { name: 'Mobile Apps', path: '/mobile-apps' },
    { name: 'Non-Profit Redesign', path: '/product-designs/grammy-museum' }
  ];
  
  const marketingDesigns = [
    { name: 'Data-Driven eBooks', path: '/graphic-designs/data-driven-ebooks' },
    { name: 'Email Marketing', path: '/graphic-designs/email-marketing' },
    { name: 'Product Illustrations', path: '/graphic-designs/product-illustrations' },
    { name: 'Social Media', path: '/graphic-designs/social-media' },
    { name: 'Case Studies', path: '/graphic-designs/case-studies' },
    { name: 'Event Designs', path: '/graphic-designs/event-designs' }
  ];
  
  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'UXUI Designs', path: '/product-designs', icon: <LayoutDashboard size={20} />, hasDropdown: true, isOpen: productDesignsOpen, toggle: toggleProductDesigns, items: productDesigns },
    { name: 'Visual Designs', path: '/graphic-designs', icon: <Image size={20} />, hasDropdown: true, isOpen: marketingDesignsOpen, toggle: toggleMarketingDesigns, items: marketingDesigns },
    { name: 'About', path: '/about', icon: <HelpCircle size={20} /> },
    { name: 'Contact me', path: '/contact', icon: <MessageSquare size={20} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={20} /> },
  ];

  return { menuItems };
};

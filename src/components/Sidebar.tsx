import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  Image, 
  HelpCircle, 
  MessageSquare, 
  FileText,
  ChevronRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import logoFull from '@/assets/logo-full.png';
import logoMobile from '@/assets/logo-mobile.png';

const Sidebar: FC = () => {
  const location = useLocation();
  const [productDesignsOpen, setProductDesignsOpen] = useState(false);
  const [marketingDesignsOpen, setMarketingDesignsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Ensure the page scrolls to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Modified toggle functions to ensure only one dropdown is open at a time
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
    { name: 'Mobile Apps', path: '/mobile-apps' },
    { name: 'Adhere Plus', path: '/product-designs/adhere-plus' },
    { name: 'Grammy Museum MS Redesign', path: '/product-designs/grammy-museum' }
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
    { name: 'Graphic Designs', path: '/graphic-designs', icon: <Image size={20} />, hasDropdown: true, isOpen: marketingDesignsOpen, toggle: toggleMarketingDesigns, items: marketingDesigns },
    { name: 'About', path: '/about', icon: <HelpCircle size={20} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={20} /> },
  ];

  // Close mobile menu when navigation occurs
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Mobile Header Component with Full-Screen Drawer
  const MobileHeader = () => (
    <div className="block custom:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logoMobile} 
            alt="Logo" 
            className="h-8 w-auto object-contain"
          />
        </Link>
        <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DrawerTrigger asChild>
            <button className="p-2">
              <Menu size={24} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-full max-h-[100vh] bg-white">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <img 
                  src={logoMobile} 
                  alt="Logo" 
                  className="h-8 w-auto object-contain"
                />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const isParentActive = item.hasDropdown && (item.items?.some(subItem => location.pathname === subItem.path) || location.pathname === item.path);
                    
                    return (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <div>
                            <div className="flex items-center justify-between">
                              <Link 
                                to={item.path}
                                onClick={handleLinkClick}
                                className={`flex items-center gap-3 py-3 px-2 rounded-lg flex-1 ${
                                  isParentActive 
                                    ? 'text-designer-darkgray font-medium' 
                                    : 'text-gray-500'
                                }`}
                              >
                           <span className={`${isParentActive ? "bg-designer-red bg-opacity-15 p-2 rounded-lg text-designer-red" : "bg-opacity-15 p-2 rounded-lg"}`}>
                             {item.icon}
                           </span>
                                <span className="text-lg">{item.name}</span>
                              </Link>
                              <button 
                                onClick={item.toggle}
                                className="p-2"
                              >
                                {item.isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                              </button>
                            </div>
                            
                            {item.isOpen && (
                              <div className="ml-6 mt-2 space-y-1">
                                {item.items?.map((subItem) => {
                                  const isSubActive = location.pathname === subItem.path;
                                  return (
                                    <Link 
                                      key={subItem.name}
                                      to={subItem.path}
                                      onClick={handleLinkClick}
                                      className={`block py-2 px-3 rounded text-base ${
                                        isSubActive 
                                          ? 'text-designer-red font-medium bg-designer-red bg-opacity-10' 
                                          : 'text-gray-600'
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link 
                            to={item.path}
                            onClick={handleLinkClick}
                            className={`flex items-center gap-3 py-3 px-2 rounded-lg ${
                              isActive 
                                ? 'text-designer-darkgray font-medium' 
                                : 'text-gray-500'
                            }`}
                          >
                           <span className={`${isActive ? "bg-designer-red bg-opacity-15 p-2 rounded-lg text-designer-red" : "bg-opacity-15 p-2 rounded-lg"}`}>
                             {item.icon}
                           </span>
                            <span className="text-lg">{item.name}</span>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
  
  return (
    <>
      {/* Mobile Navigation with Full-Screen Drawer */}
      <MobileHeader />

      {/* Desktop Sidebar */}
      <aside className={`hidden custom:block fixed left-0 top-0 h-full w-[244px] bg-white border-r border-gray-200 flex flex-col py-8 px-4`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-center">
            <img 
              src={logoFull} 
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="h-12 w-12"></div>
        </div>
        
        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <ul className="space-y-6 pb-8">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isParentActive = item.hasDropdown && (item.items?.some(subItem => location.pathname === subItem.path) || location.pathname === item.path);
              
              return (
                <li key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div 
                        className={`flex items-center justify-between cursor-pointer ${
                          isParentActive 
                            ? 'text-designer-darkgray' 
                            : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                        }`}
                        onClick={item.toggle}
                      >
                        <Link 
                          to={item.path}
                          className="flex items-center gap-3 font-medium text-lg"
                        >
                           <span className={`${isParentActive ? "bg-designer-red bg-opacity-15 p-2 rounded-lg text-designer-red" : "bg-opacity-15 p-2 rounded-lg"}`}>
                             {item.icon}
                           </span>
                          <span>{item.name}</span>
                        </Link>
                        <button onClick={(e) => {
                          e.preventDefault();
                          item.toggle();
                        }}>
                          {item.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                      </div>
                      
                      {item.isOpen && (
                        <ul className="mt-2 space-y-2" style={{ marginLeft: '48px' }}>
                          {item.items?.map((subItem) => {
                            const isSubActive = location.pathname === subItem.path;
                            return (
                              <li key={subItem.name}>
                                <Link 
                                  to={subItem.path}
                                  className={`text-sm block py-1 ${
                                    isSubActive 
                                      ? 'text-designer-red font-medium' 
                                      : 'text-gray-500 hover:text-designer-darkgray'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`flex items-center gap-3 font-medium text-lg ${
                        isActive 
                          ? 'text-designer-darkgray' 
                          : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                      }`}
                    >
                       <span className={`${isActive ? "bg-designer-red bg-opacity-15 p-2 rounded-lg text-designer-red" : "bg-opacity-15 p-2 rounded-lg"}`}>
                         {item.icon}
                       </span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

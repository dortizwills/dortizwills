import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';

const TopNavigation: FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uxuiDropdownOpen, setUxuiDropdownOpen] = useState(false);
  const [graphicDropdownOpen, setGraphicDropdownOpen] = useState(false);
  
  const uxuiDesigns = [
    { name: 'Quick Services', path: '/product-designs/quick-services' },
    { name: 'Camping App', path: '/product-designs/camping-app' },
    { name: 'Gourmet Recipes', path: '/product-designs/gourmet-recipes' },
    { name: 'Mobile Apps', path: '/mobile-apps' },
    { name: 'Adhere Plus', path: '/product-designs/adhere-plus' },
    { name: 'Grammy Museum MS Redesign', path: '/product-designs/grammy-museum' }
  ];
  
  const graphicDesigns = [
    { name: 'Data-Driven eBooks', path: '/graphic-designs/data-driven-ebooks' },
    { name: 'Email Marketing', path: '/graphic-designs/email-marketing' },
    { name: 'Product Illustrations', path: '/graphic-designs/product-illustrations' },
    { name: 'Social Media', path: '/graphic-designs/social-media' },
    { name: 'Case Studies', path: '/graphic-designs/case-studies' },
    { name: 'Event Designs', path: '/graphic-designs/event-designs' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setUxuiDropdownOpen(false);
    setGraphicDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-6 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/src/assets/new-logo.png" 
              alt="DOW Logo" 
              className="h-7"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {/* UXUI Designs Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setUxuiDropdownOpen(true)}
                onMouseLeave={() => setUxuiDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors py-3 px-1"
              >
                UXUI Designs
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {uxuiDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setUxuiDropdownOpen(true)}
                  onMouseLeave={() => setUxuiDropdownOpen(false)}
                >
                  <Link 
                    to="/product-designs"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium border-b border-gray-100"
                  >
                    View All UXUI Designs
                  </Link>
                  {uxuiDesigns.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Graphic Designs Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setGraphicDropdownOpen(true)}
                onMouseLeave={() => setGraphicDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors py-3 px-1"
              >
                Graphic Designs
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {graphicDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setGraphicDropdownOpen(true)}
                  onMouseLeave={() => setGraphicDropdownOpen(false)}
                >
                  <Link 
                    to="/graphic-designs"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium border-b border-gray-100"
                  >
                    View All Graphic Designs
                  </Link>
                  {graphicDesigns.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <Link 
              to="/about" 
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname === '/about' ? 'text-gray-900 font-medium' : ''
              }`}
            >
              About Me
            </Link>
            <Link 
              to="/resume" 
              className={`text-gray-600 hover:text-gray-900 transition-colors ${
                location.pathname === '/resume' ? 'text-gray-900 font-medium' : ''
              }`}
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/6c29bf1f-d5a7-4d54-9891-d6c2fdf36bb5.png" 
              alt="DOW Logo" 
              className="h-6 w-6"
            />
            <div className="text-sm font-bold text-blue-600">DOW</div>
          </Link>
          
          <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu size={20} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-h-[100vh] bg-white">
              <div className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
                    <img 
                      src="/src/assets/new-logo.png" 
                      alt="DOW Logo" 
                      className="h-7"
                    />
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <Link 
                      to="/product-designs"
                      onClick={handleLinkClick}
                      className="block text-lg font-medium text-gray-900 mb-3"
                    >
                      UXUI Designs
                    </Link>
                    <div className="pl-4 space-y-2">
                      {uxuiDesigns.map((item) => (
                        <Link 
                          key={item.name}
                          to={item.path}
                          onClick={handleLinkClick}
                          className="block text-gray-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link 
                      to="/graphic-designs"
                      onClick={handleLinkClick}
                      className="block text-lg font-medium text-gray-900 mb-3"
                    >
                      Graphic Designs
                    </Link>
                    <div className="pl-4 space-y-2">
                      {graphicDesigns.map((item) => (
                        <Link 
                          key={item.name}
                          to={item.path}
                          onClick={handleLinkClick}
                          className="block text-gray-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/about"
                    onClick={handleLinkClick}
                    className="block text-lg font-medium text-gray-900"
                  >
                    About Me
                  </Link>
                  <Link 
                    to="/resume"
                    onClick={handleLinkClick}
                    className="block text-lg font-medium text-gray-900"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;

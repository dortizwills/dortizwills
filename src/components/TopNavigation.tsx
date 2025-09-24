import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from '@/assets/logo.png';

const TopNavigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const uxuiItems = [
    { label: 'All UXUI Projects', path: '/product-designs' },
    { label: 'Grammy Museum', path: '/product-designs/grammy-museum' },
    { label: 'Express Lane', path: '/product-designs/quick-services' },
    { label: 'Gourmet Recipes', path: '/product-designs/gourmet-recipes' },
    { label: 'Mobile Apps', path: '/mobile-apps' },
    { label: 'Camping Buddy', path: '/product-designs/camping-app' },
    { label: 'Adhere Plus', path: '/product-designs/adhere-plus' },
  ];

  const graphicDesignItems = [
    { label: 'All Graphic Designs', path: '/graphic-designs' },
    { label: 'Data-Driven eBooks', path: '/graphic-designs/data-driven-ebooks' },
    { label: 'Email Marketing', path: '/graphic-designs/email-marketing' },
    { label: 'Social Media', path: '/graphic-designs/social-media' },
    { label: 'Product Illustrations', path: '/graphic-designs/product-illustrations' },
    { label: 'Event Designs', path: '/graphic-designs/event-designs' },
    { label: 'Case Studies', path: '/graphic-designs/case-studies' },
  ];

  const DesktopDropdown = ({ title, items, isActive }: { title: string; items: typeof uxuiItems; isActive: boolean }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`text-lg font-medium hover:bg-transparent hover:text-blue-600 transition-colors ${
            isActive ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          {title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {items.map((item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link 
              to={item.path}
              className="cursor-pointer"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileNavItems = () => (
    <div className="flex flex-col space-y-4 p-6">
      <Link 
        to="/" 
        className={`text-lg font-medium ${isActive('/') && location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </Link>
      
      <div>
        <div className="text-lg font-medium text-gray-700 mb-2">UXUI Designs</div>
        <div className="ml-4 space-y-2">
          {uxuiItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className={`block text-base ${isActive(item.path) ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="text-lg font-medium text-gray-700 mb-2">Graphic Designs</div>
        <div className="ml-4 space-y-2">
          {graphicDesignItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className={`block text-base ${isActive(item.path) ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <Link 
        to="/about" 
        className={`text-lg font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About Me
      </Link>
      
      <Link 
        to="/resume" 
        className={`text-lg font-medium ${isActive('/resume') ? 'text-blue-600' : 'text-gray-700'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Resume
      </Link>
    </div>
  );

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Daniel Ortiz-Wills Freelance Designs" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DesktopDropdown 
              title="UXUI Designs" 
              items={uxuiItems}
              isActive={isActive('/product-designs') || isActive('/mobile-apps')}
            />
            
            <DesktopDropdown 
              title="Graphic Designs" 
              items={graphicDesignItems}
              isActive={isActive('/graphic-designs')}
            />
            
            <Link 
              to="/about" 
              className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              About Me
            </Link>
            
            <Link 
              to="/resume" 
              className={`text-lg font-medium hover:text-blue-600 transition-colors ${
                isActive('/resume') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <MobileNavItems />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
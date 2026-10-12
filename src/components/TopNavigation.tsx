import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import logoFull from '@/assets/logo-full.png';
import logoMobile from '@/assets/logo-mobile.png';

const TopNavigation: FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: "Let's Talk", path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/work') {
      return location.pathname === '/work' || location.pathname === '/mobile-apps' || location.pathname.startsWith('/product-designs') || location.pathname.startsWith('/graphic-designs');
    }

    return location.pathname === path;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-editorial-bg/95 backdrop-blur-sm border-b border-editorial-line z-50" style={{ height: '64px' }}>
        <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto px-8">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoFull} 
              alt="Daniel Ortiz-Wills" 
              className="h-7 w-auto"
            />
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-editorial-fg'
                    : 'text-editorial-muted hover:text-editorial-fg'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 w-full bg-editorial-bg/95 backdrop-blur-sm border-b border-editorial-line z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoMobile} 
              alt="Daniel Ortiz-Wills" 
              className="h-6 w-auto"
            />
          </Link>
          
          <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu size={20} className="text-editorial-fg" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-h-[100vh] bg-editorial-bg">
              <div className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
                    <img 
                      src={logoMobile} 
                      alt="Daniel Ortiz-Wills" 
                      className="h-7 w-auto"
                    />
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={20} className="text-editorial-fg" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path}
                      onClick={handleLinkClick}
                      className="block text-lg font-medium text-editorial-fg"
                    >
                      {link.name}
                    </Link>
                  ))}
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

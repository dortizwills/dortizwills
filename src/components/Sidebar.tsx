
import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MobileHeader from './sidebar/MobileHeader';
import MobileMenu from './sidebar/MobileMenu';
import SidebarMenu from './sidebar/SidebarMenu';
import { useSidebarData } from './sidebar/useSidebarData';

const Sidebar: FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { menuItems } = useSidebarData();
  
  // Ensure the page scrolls to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      {/* Mobile Navigation */}
      <MobileHeader mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} menuItems={menuItems} />

      {/* Desktop Sidebar */}
      <aside className={`hidden sm:block fixed left-0 top-0 h-full w-[220px] bg-white border-r border-gray-200 flex flex-col py-8 px-4`}>
        <div className="flex items-center justify-between mb-8">
          <div className="h-10 w-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/6c29bf1f-d5a7-4d54-9891-d6c2fdf36bb5.png" 
              alt="Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="h-12 w-12"></div>
        </div>
        
        <SidebarMenu menuItems={menuItems} />
      </aside>
    </>
  );
};

export default Sidebar;

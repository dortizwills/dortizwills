
import { FC } from 'react';
import SidebarMenu from './SidebarMenu';

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
  hasDropdown?: boolean;
  isOpen?: boolean;
  toggle?: () => void;
  items?: { name: string; path: string }[];
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  menuItems: MenuItem[];
}

const MobileMenu: FC<MobileMenuProps> = ({ mobileMenuOpen, menuItems }) => {
  return (
    <div className={`block sm:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="pt-16 px-4 h-full overflow-y-auto">
        <SidebarMenu menuItems={menuItems} isMobile={true} />
      </div>
    </div>
  );
};

export default MobileMenu;

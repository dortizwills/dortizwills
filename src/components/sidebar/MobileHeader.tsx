
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface MobileHeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileHeader: FC<MobileHeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <div className="block sm:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6c29bf1f-d5a7-4d54-9891-d6c2fdf36bb5.png" 
            alt="Logo" 
            className="h-8 w-8 object-contain"
          />
        </Link>
        <button onClick={toggleMobileMenu} className="p-2">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;

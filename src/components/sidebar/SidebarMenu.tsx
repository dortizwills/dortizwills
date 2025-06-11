
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
  hasDropdown?: boolean;
  isOpen?: boolean;
  toggle?: () => void;
  items?: { name: string; path: string }[];
}

interface SidebarMenuProps {
  menuItems: MenuItem[];
  isMobile?: boolean;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ menuItems, isMobile = false }) => {
  const location = useLocation();

  return (
    <nav className={`${isMobile ? 'space-y-4 pb-8' : 'flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'}`}>
      <ul className={`${isMobile ? 'space-y-4 pb-8' : 'space-y-6 pb-8'}`}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isParentActive = item.hasDropdown && (item.items?.some(subItem => location.pathname === subItem.path) || location.pathname === item.path);
          
          return (
            <li key={item.name} className={isMobile ? 'border-b border-gray-100 pb-4' : ''}>
              {item.hasDropdown ? (
                <div>
                  <div 
                    className={`flex items-center justify-between ${isMobile ? 'py-3' : 'cursor-pointer'} ${
                      isParentActive 
                        ? 'text-designer-darkgray' 
                        : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                    }`}
                    onClick={item.toggle}
                  >
                    <Link 
                      to={item.path}
                      className={`flex items-center gap-3 font-medium ${isMobile ? 'text-lg' : 'text-lg'}`}
                    >
                      <span className={`${isParentActive ? "bg-designer-red bg-opacity-15 p-2 rounded-lg text-designer-red" : ""}`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                    <button onClick={(e) => {
                      e.preventDefault();
                      if (isMobile) e.stopPropagation();
                      item.toggle?.();
                    }}>
                      {item.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>
                  </div>
                  
                  {item.isOpen && (
                    <div className={`${isMobile ? 'ml-6 mt-2' : 'mt-2 ml-8'} space-y-2`}>
                      {item.items?.map((subItem) => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <Link 
                            key={subItem.name}
                            to={subItem.path}
                            className={`${isMobile ? 'block py-2 text-base' : 'text-sm block py-1'} ${
                              isSubActive 
                                ? 'text-designer-red font-medium' 
                                : 'text-gray-500 hover:text-designer-darkgray'
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
                  className={`flex items-center gap-3 font-medium text-lg ${isMobile ? 'py-3' : ''} ${
                    isActive 
                      ? 'text-designer-darkgray' 
                      : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                  }`}
                >
                  <span className={`${isActive ? "bg-designer-red bg-opacity-15 p-2 rounded-lg text-designer-red" : ""}`}>
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
  );
};

export default SidebarMenu;

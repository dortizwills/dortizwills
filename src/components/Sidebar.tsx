
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  Image, 
  HelpCircle, 
  MessageSquare, 
  FileText,
  ChevronRight,
  ChevronDown,
  Expand,
  Minimize
} from 'lucide-react';

const Sidebar: FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [productDesignsOpen, setProductDesignsOpen] = useState(false);
  const [marketingDesignsOpen, setMarketingDesignsOpen] = useState(false);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (!collapsed) {
      setProductDesignsOpen(false);
      setMarketingDesignsOpen(false);
    }
  };
  
  const productDesigns = [
    { name: 'Quick Services', path: '/product-designs/quick-services' },
    { name: 'Camping App', path: '/product-designs/camping-app' },
    { name: 'Gourmet Recipes', path: '/product-designs/gourmet-recipes' },
    { name: 'Adhere Plus', path: '/product-designs/adhere-plus' },
    { name: 'Mobile Apps', path: '/product-designs/mobile-apps' },
    { name: 'Grammy Museum', path: '/product-designs/grammy-museum' }
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
    { name: 'UXUI Designs', path: '/product-designs', icon: <LayoutDashboard size={20} />, hasDropdown: true, isOpen: productDesignsOpen, toggle: () => setProductDesignsOpen(!productDesignsOpen), items: productDesigns },
    { name: 'Marketing Designs', path: '/graphic-designs', icon: <Image size={20} />, hasDropdown: true, isOpen: marketingDesignsOpen, toggle: () => setMarketingDesignsOpen(!marketingDesignsOpen), items: marketingDesigns },
    { name: 'About', path: '/about', icon: <HelpCircle size={20} /> },
    { name: 'Contact me', path: '/contact', icon: <MessageSquare size={20} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={20} /> },
  ];
  
  return (
    <aside className={`fixed left-0 top-0 h-full ${collapsed ? 'w-[70px]' : 'w-[220px]'} bg-white border-r border-gray-200 flex flex-col py-8 px-4 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-8">
        <div className={`h-12 w-12 bg-designer-red rounded-full flex items-center justify-center text-white text-xl font-bold ${collapsed ? 'mx-auto' : ''}`}>
          UX
        </div>
        {!collapsed && <div className="h-12 w-12"></div>}
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-6">
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
                          ? 'text-designer-darkgray active-nav-item' 
                          : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                      }`}
                      onClick={!collapsed ? item.toggle : undefined}
                    >
                      <Link 
                        to={item.path}
                        className="flex items-center gap-3 font-medium text-lg"
                      >
                        <span className={isParentActive ? "border-b-2 border-designer-red pb-1" : ""}>{item.icon}</span>
                        {!collapsed && <span>{item.name}</span>}
                      </Link>
                      {!collapsed && (
                        <button onClick={(e) => {
                          e.preventDefault();
                          item.toggle();
                        }}>
                          {item.isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                      )}
                    </div>
                    
                    {!collapsed && item.isOpen && (
                      <ul className="mt-2 ml-8 space-y-2">
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
                        ? 'text-designer-darkgray active-nav-item' 
                        : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                    }`}
                  >
                    <span className={isActive ? "border-b-2 border-designer-red pb-1" : ""}>{item.icon}</span>
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="mt-auto pt-4">
        <button 
          onClick={toggleCollapsed} 
          className="w-full flex justify-center text-gray-500 hover:text-designer-darkgray py-2"
        >
          {collapsed ? <Expand size={20} /> : <Minimize size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

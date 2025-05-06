
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { 
  Home, 
  LayoutDashboard, 
  Image, 
  HelpCircle, 
  MessageSquare, 
  FileText 
} from 'lucide-react';

const Sidebar: FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'UXUI Designs', path: '/product-designs', icon: <LayoutDashboard size={20} /> },
    { name: 'Graphic Designs', path: '/graphic-designs', icon: <Image size={20} /> },
    { name: 'About', path: '/about', icon: <HelpCircle size={20} /> },
    { name: 'Contact me', path: '/contact', icon: <MessageSquare size={20} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={20} /> },
  ];
  
  return (
    <aside className="fixed left-0 top-0 h-full w-[220px] bg-white border-r border-gray-200 flex flex-col py-8 px-4">
      <div className="mb-8">
        <div className="h-12 w-12 bg-designer-red rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
          UX
        </div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className={`flex items-center gap-3 font-medium text-lg ${
                    isActive 
                      ? 'text-designer-darkgray active-nav-item' 
                      : 'text-gray-500 hover:text-designer-darkgray transition-colors'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="mt-auto">
        <Link 
          to="/subscribe"
          className="flex items-center gap-3 font-medium text-lg text-gray-500 hover:text-designer-darkgray transition-colors"
        >
          Subscribe
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

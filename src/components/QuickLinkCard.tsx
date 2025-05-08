
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface QuickLinkCardProps {
  title: string;
  description?: string;
  href: string;
  imagePath?: string;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
  title,
  description,
  href,
  imagePath
}) => {
  return (
    <a 
      href={href}
      className="block p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group min-w-[280px]"
    >
      {imagePath && (
        <div className="aspect-[3/2] mb-4 bg-designer-gray rounded-md overflow-hidden">
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <h3 className="font-display text-xl font-medium mb-2 group-hover:text-designer-red transition-colors">
        {title}
      </h3>
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600 group-hover:text-designer-red transition-colors">View Project</span>
        <div className="bg-designer-gray rounded-full p-2 group-hover:bg-designer-red transition-colors">
          <ArrowRight size={18} className="text-gray-700 group-hover:text-white transition-colors" />
        </div>
      </div>
    </a>
  );
};

export default QuickLinkCard;

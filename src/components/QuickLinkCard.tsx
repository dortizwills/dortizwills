
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface QuickLinkCardProps {
  title: string;
  description?: string;
  href: string;
}

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
  title,
  description,
  href
}) => {
  return (
    <a 
      href={href}
      className="block p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-xl font-medium mb-2 group-hover:text-designer-red transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
        <div className="bg-designer-gray rounded-full p-2 group-hover:bg-designer-red transition-colors">
          <ArrowRightIcon size={18} className="text-gray-700 group-hover:text-white transition-colors" />
        </div>
      </div>
    </a>
  );
};

export default QuickLinkCard;

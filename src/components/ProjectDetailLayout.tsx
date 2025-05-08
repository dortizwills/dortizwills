
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectDetailLayoutProps {
  title: string;
  children: React.ReactNode;
  backTo: string;
  backLabel: string;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ 
  title, 
  children,
  backTo,
  backLabel
}) => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Link to={backTo} className="flex items-center text-designer-red mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2" />
          <span>{backLabel}</span>
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-12">{title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailLayout;

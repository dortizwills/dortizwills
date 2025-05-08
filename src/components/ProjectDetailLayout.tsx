
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectDetailLayoutProps {
  title: string;
  children: React.ReactNode;
  backTo: string;
  backLabel: string;
  headerImage?: string;
  projectDetails?: {
    timeline?: string;
    responsibilities?: string;
    results?: string;
  };
  relatedProjects?: Array<{
    title: string;
    description: string;
    path: string;
    image?: string;
  }>;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ 
  title, 
  children,
  backTo,
  backLabel,
  headerImage,
  projectDetails,
  relatedProjects
}) => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Link to={backTo} className="flex items-center text-designer-red mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2" />
          <span>{backLabel}</span>
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">{title}</h1>
        
        {headerImage && (
          <div className="mb-8">
            <img 
              src={headerImage} 
              alt={title} 
              className="w-full rounded-lg object-cover h-[400px]" 
              style={{ aspectRatio: '2.25/1', objectPosition: 'center' }}
            />
          </div>
        )}
        
        {projectDetails && (
          <div className="bg-gray-50 p-6 rounded-lg mb-10">
            <div className="grid grid-cols-3 gap-6">
              {projectDetails.timeline && (
                <div className="flex flex-col">
                  <div className="font-medium text-gray-900 text-sm">Team</div>
                  <div className="text-gray-600 text-sm mt-2">{projectDetails.timeline}</div>
                </div>
              )}
              
              {projectDetails.responsibilities && (
                <div className="flex flex-col">
                  <div className="font-medium text-gray-900 text-sm">Responsibilities</div>
                  <div className="text-gray-600 text-sm mt-2">{projectDetails.responsibilities}</div>
                </div>
              )}
              
              {projectDetails.results && (
                <div className="flex flex-col">
                  <div className="font-medium text-gray-900 text-sm">Results</div>
                  <div className="text-gray-600 text-sm mt-2">{projectDetails.results}</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {children}
        </div>
        
        {relatedProjects && relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold mb-6">Similar Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((project, index) => (
                <Link 
                  key={index}
                  to={project.path}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="aspect-video bg-designer-gray overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-gray-400">Image coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <span className="text-designer-red font-medium">
                      View Case Study
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetailLayout;

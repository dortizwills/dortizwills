
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  darkMode?: boolean;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ 
  title, 
  children,
  backTo,
  backLabel,
  headerImage,
  projectDetails,
  relatedProjects,
  darkMode = false
}) => {
  // Ensure the page scrolls to top when mounted
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textColorClass = darkMode ? "text-white" : "text-foreground";
  const linkColorClass = darkMode ? "text-designer-red hover:text-red-300" : "text-designer-red hover:underline";
  const cardBgClass = darkMode ? "bg-gray-800" : "bg-gray-50";
  const cardBorderClass = darkMode ? "border-gray-700" : "border-gray-200";
  const cardTextClass = darkMode ? "text-gray-300" : "text-gray-600";
  const labelClass = darkMode ? "text-gray-200" : "text-gray-900";

  return (
    <div className={darkMode ? "" : "pl-[220px]"}>
      <main className={`max-w-7xl mx-auto px-6 py-12 ${textColorClass}`}>
        <Link to={backTo} className={`flex items-center mb-8 ${linkColorClass}`}>
          <ArrowLeft size={20} className="mr-2" />
          <span>{backLabel}</span>
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">{title}</h1>
        
        {/* Hero image with 1:2.25 aspect ratio */}
        <div className="mb-8">
          {headerImage ? (
            <img 
              src={headerImage} 
              alt={title} 
              className="w-full rounded-lg object-cover object-top" 
              style={{ aspectRatio: '2.25/1' }}
            />
          ) : (
            <div 
              className="w-full rounded-lg bg-designer-gray flex items-center justify-center"
              style={{ aspectRatio: '2.25/1' }}
            >
              <p className="text-gray-500">Project image coming soon</p>
            </div>
          )}
        </div>
        
        {/* Project details section immediately after hero image */}
        {projectDetails && (
          <div className={`${cardBgClass} p-6 rounded-lg mb-10`}>
            <h2 className="text-2xl font-display font-semibold mb-6">Project Details</h2>
            <div className="space-y-6">
              {projectDetails.timeline && (
                <div className={`border-b ${cardBorderClass} pb-4`}>
                  <div className={`font-medium ${labelClass} text-lg`}>Timeline</div>
                  <div className={cardTextClass}>{projectDetails.timeline}</div>
                </div>
              )}
              
              {projectDetails.responsibilities && (
                <div className={`border-b ${cardBorderClass} pb-4`}>
                  <div className={`font-medium ${labelClass} text-lg`}>Responsibilities</div>
                  <div className={cardTextClass}>{projectDetails.responsibilities}</div>
                </div>
              )}
              
              {projectDetails.results && (
                <div>
                  <div className={`font-medium ${labelClass} text-lg`}>Results</div>
                  <div className={cardTextClass}>{projectDetails.results}</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {children}
        
        {relatedProjects && relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold mb-6">Similar Projects</h2>
            <div className="grid grid-cols-3 gap-8">
              {/* First project */}
              {relatedProjects[0] && (
                <div className="col-span-1">
                  <Link 
                    to={relatedProjects[0].path}
                    className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${darkMode ? 'border-gray-700' : 'border border-gray-100'} block h-full`}
                  >
                    <div className="bg-designer-gray overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      {relatedProjects[0].image ? (
                        <img 
                          src={relatedProjects[0].image} 
                          alt={relatedProjects[0].title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <span className="text-gray-400">Image coming soon</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-medium mb-2">{relatedProjects[0].title}</h3>
                      <p className={darkMode ? "text-gray-300 mb-4" : "text-gray-600 mb-4"}>
                        {relatedProjects[0].description}
                      </p>
                      <div className="flex items-center text-designer-red font-medium">
                        <span className="mr-2">View Project</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </div>
              )}
              
              {/* Empty middle column */}
              <div className="col-span-1"></div>
              
              {/* Second project */}
              {relatedProjects[1] && (
                <div className="col-span-1">
                  <Link 
                    to={relatedProjects[1].path}
                    className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${darkMode ? 'border-gray-700' : 'border border-gray-100'} block h-full`}
                  >
                    <div className="bg-designer-gray overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      {relatedProjects[1].image ? (
                        <img 
                          src={relatedProjects[1].image} 
                          alt={relatedProjects[1].title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <span className="text-gray-400">Image coming soon</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-medium mb-2">{relatedProjects[1].title}</h3>
                      <p className={darkMode ? "text-gray-300 mb-4" : "text-gray-600 mb-4"}>
                        {relatedProjects[1].description}
                      </p>
                      <div className="flex items-center text-designer-red font-medium">
                        <span className="mr-2">View Project</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetailLayout;

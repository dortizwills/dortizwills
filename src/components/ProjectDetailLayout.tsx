
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
  // Ensure the page scrolls to top when mounted
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sm:pl-[220px] pl-0 group" data-sidebar-collapsed="false">
      <main className="max-w-7xl mx-auto px-6 py-12 max-sm:px-4 max-sm:max-w-full transition-all duration-300 group-[data-sidebar-collapsed=true]:sm:pl-[70px] group-[data-sidebar-collapsed=true]:sm:max-w-none">
        <Link to={backTo} className="flex items-center text-designer-red mb-8 hover:underline">
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
          <div className="bg-gray-50 p-6 rounded-lg mb-10">
            <h2 className="text-2xl font-display font-semibold mb-6">Project Details</h2>
            <div className="space-y-6">
              {projectDetails.timeline && (
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-medium text-gray-900 text-lg">Timeline</div>
                  <div className="text-gray-600 mt-1">{projectDetails.timeline}</div>
                </div>
              )}
              
              {projectDetails.responsibilities && (
                <div className="border-b border-gray-200 pb-4">
                  <div className="font-medium text-gray-900 text-lg">Responsibilities</div>
                  <div className="text-gray-600 mt-1">{projectDetails.responsibilities}</div>
                </div>
              )}
              
              {projectDetails.results && (
                <div>
                  <div className="font-medium text-gray-900 text-lg">Results</div>
                  <div className="text-gray-600 mt-1">{projectDetails.results}</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {children}
        
        {relatedProjects && relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-semibold mb-6">Similar Projects</h2>
            <div className="grid grid-cols-3 max-[819px]:grid-cols-1 gap-8 max-[819px]:gap-6">
              {/* First project */}
              {relatedProjects[0] && (
                <div className="col-span-1">
                  <Link 
                    to={relatedProjects[0].path}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 block h-full"
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
                      <p className="text-gray-600 mb-4">
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
              
              {/* Empty middle column on desktop only */}
              <div className="col-span-1 max-[819px]:hidden"></div>
              
              {/* Second project */}
              {relatedProjects[1] && (
                <div className="col-span-1">
                  <Link 
                    to={relatedProjects[1].path}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 block h-full"
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
                      <p className="text-gray-600 mb-4">
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

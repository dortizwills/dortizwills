
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
  showWipTag?: boolean;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ 
  title, 
  children,
  backTo,
  backLabel,
  headerImage,
  projectDetails,
  relatedProjects,
  showWipTag = false
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
          <div className="bg-gray-50 rounded-lg mb-10">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-display font-semibold">Project Details</h2>
                {showWipTag && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    WIP
                  </span>
                )}
              </div>
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
          </div>
        )}
        
        {children}
        
        {relatedProjects && relatedProjects.length > 0 && (
          <div className="mt-16">
            {/* Layout for 820px and above - box format */}
            <div className="hidden min-[820px]:block bg-white border border-black rounded-lg">
              <div className="p-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* Left text section - top left aligned */}
                  <div className="col-span-1 flex flex-col justify-start">
                    <h1 className="font-display text-4xl font-bold mb-4 text-left">Similar Projects</h1>
                    <p className="text-gray-600 text-left">Like what you see? Check out some of my other projects</p>
                  </div>
                  
                  {/* Right projects section */}
                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    {relatedProjects.slice(0, 2).map((project, index) => (
                      <Link 
                        key={index}
                        to={project.path}
                        className="block transition-all duration-300 cursor-pointer"
                      >
                        <div className="bg-white rounded-lg overflow-hidden">
                          <div className="bg-designer-gray overflow-hidden rounded-lg mb-4 transition-transform duration-300 hover:scale-105" style={{ aspectRatio: '16/9' }}>
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
                          <div>
                            <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">
                              {project.description}
                            </p>
                            <div className="flex items-center text-blue-600 font-medium">
                              <span className="mr-2">View Project</span>
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Layout for 819px and below - current format with new text */}
            <div className="min-[820px]:hidden">
              <h1 className="font-display text-4xl font-bold mb-2">Similar Projects</h1>
              <p className="text-gray-600 mb-6">Like what you see? Check out some of my other projects</p>
              
              <div className="grid grid-cols-1 gap-6">
                {relatedProjects.slice(0, 2).map((project, index) => (
                  <Link 
                    key={index}
                    to={project.path}
                    className="bg-white rounded-lg overflow-hidden transition-all duration-300 block h-full cursor-pointer"
                  >
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="bg-designer-gray overflow-hidden transition-transform duration-300 hover:scale-105" style={{ aspectRatio: '16/9' }}>
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
                      <div className="p-2">
                        <h3 className="font-display text-xl font-medium mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center text-designer-red font-medium">
                          <span className="mr-2">View Project</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetailLayout;


import React, { useState } from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const MobileApps = () => {
  const [selectedApp, setSelectedApp] = useState("app1");
  
  const relatedProjects = [
    {
      title: "Adhere Plus",
      description: "0 to 1 web and branding design for Adhere Plus's flagship app.",
      path: "/product-designs/adhere-plus",
      image: "/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png"
    },
    {
      title: "Non-Profit Redesign",
      description: "Redesigning the Non-Profit's digital experience to showcase history and education.",
      path: "/product-designs/grammy-museum",
      image: "/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png"
    }
  ];

  return (
    <ProjectDetailLayout 
      title="Mobile App Explorations" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/01e339c9-3a76-4ecb-9a6b-5e9aeb6592a7.png"
      projectDetails={{
        timeline: "4 Weeks Total: 1-3 weeks per app, 2 apps",
        responsibilities: "Branding, User flows, Mobile iOS Design, Prototyping, User Testing",
        results: "Securing future client partnerships following project funding"
      }}
      showWipTag={true}
      relatedProjects={relatedProjects}
    >
        {/* Overview Section */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold">Overview</h2>
        </div>
        <div className="col-span-2">
          <p className="text-gray-700 leading-relaxed mb-6">
            These apps are a selection of mobile app designs created as promotional apps for 2 potential investing companies. The focus of each app was to provide a vision and brief demonstration of our agency's services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each mobile app was delivered to our CEO who would propose these apps to our prospect to secure additional funding for our agency. Following each project we would debrief on the successes and failures of the presentation.
          </p>
        </div>
      </div>
      

        {/* App Toggle Section */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          {/* Empty left column */}
        </div>
        <div className="col-span-2">
          {/* Video Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder 1</span>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder 2</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-8 w-full">
            <ToggleGroup 
              type="single" 
              value={selectedApp} 
              onValueChange={(value) => value && setSelectedApp(value)} 
              className="contents"
            >
              <ToggleGroupItem value="app1" className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 data-[state=on]:bg-designer-red data-[state=on]:text-white w-full">
                App 1: School Safety
              </ToggleGroupItem>
              <ToggleGroupItem value="app2" className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 data-[state=on]:bg-designer-red data-[state=on]:text-white w-full">
                App 2: Coming Soon
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>

        {/* The Process Section */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-6">The Process: Quick & <span className="line-through">Dirty</span> Clean</h2>
        </div>  
        <div className="col-span-2">
          {/* paragraph Content */}  
        
          <p className="text-gray-700 leading-relaxed mb-4">
            This project was a proposal, consequently every hour spent was technically unfunded so time was of the essence. Of course there's a lot of pieces working behind the scenes, but here's the gist of the requirements:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>End Goal</strong> – Secure funding from a non-profit during an unprompted meeting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Challenges</strong> – Skip user flow diagrams, personas, modernize branding, and rely design intuition.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>My Choices</strong> – Create a rough map of how to simplify the interactions from their existing app, update the UI, and rough prototype to visualize new interactions.
          </p>
        </div>
      </div>

      {selectedApp === "app1" && (
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">

          {/* School Safety: The Presentation */}
          <div className="col-span-1">
            <h3 className="text-xl font-display font-medium mb-3">The Presentation</h3>
          </div>
          <div className="col-span-2 max-sm:col-span-1">    
            <p className="text-gray-700 leading-relaxed mb-6">
              After 2 iterations, we had a few key changes from their original app
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>1.</strong> Our version in set in dark mode to reduce attention from others, which is especially important when an active shooter is searching for staff/students.
                </p>
                <img 
                  src="/lovable-uploads/ceca1e9c-3557-46c6-a57d-ef03fc4e1eae.png" 
                  alt="School Safety App - Dark Mode Interface"
                  className="w-full rounded-lg max-h-96 object-contain"
                />
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>2.</strong> Create consistent actions on each page. Previously users had 3-4 options for where to request help, give status updates, and react to emergencies.
                </p>
                <img 
                  src="/lovable-uploads/b180fea0-d98d-4083-b9c6-a697467ca196.png" 
                  alt="School Safety App - Map View with Consistent Actions"
                  className="w-full rounded-lg max-h-96 object-contain"
                />
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>3.</strong> Modernize chats, navigation, statuses, and homepage – Before this redesign the navigation was difficult to locate and distinguish from other actions in app.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/4b299b51-b0a6-444d-806c-70ad04977516.png" 
                    alt="School Safety App - Modernized Chat Interface"
                    className="w-full rounded-lg max-h-96 object-contain"
                  />
                  <img 
                    src="/lovable-uploads/7ed31d0d-9541-4942-bfcc-f435c331dee2.png" 
                    alt="School Safety App - Alert Creation Interface"
                    className="w-full rounded-lg max-h-96 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* The Results */}
          <div className="col-span-1">
            <h3 className="text-xl font-display font-medium mb-3">The Results</h3>
          </div>
          <div className="col-span-2 max-sm:col-span-1">    
            <p className="text-gray-700 leading-relaxed mb-4">
              We delivered these designs and explained the benefits of each alteration to our prospect and quickly discovered his funding was not adequate to back our vision.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We instead entered into a verbal agreement that when his non-profit secured funding that we would be able to develop these changes into their app
            </p>
          </div>
        </div>
      )}

      {selectedApp === "app2" && (
        <div className="space-y-8">
          <p className="text-gray-700 leading-relaxed">
            <strong>App 2 content coming soon!</strong> Check back for details on the second mobile app project.
          </p>
        </div>
      )}
    </ProjectDetailLayout>
  );
};

export default MobileApps;

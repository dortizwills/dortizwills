
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
      title: "Grammy Museum MS Redesign",
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
      tagType="NEW"
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
          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full object-cover bg-white rounded-lg"
              >
                <source src="/lovable-uploads/School-Defense.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-lg overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full object-cover bg-white rounded-lg"
              >
                <source src="/lovable-uploads/Pickle Ball.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <ToggleGroup 
            type="single" 
            value={selectedApp} 
            onValueChange={(value) => setSelectedApp(value || "app1")}
            className="grid grid-cols-2 gap-2 mb-8 w-full"
          >
            <ToggleGroupItem 
              value="app1" 
              className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 data-[state=on]:bg-designer-red data-[state=on]:text-white w-full"
            >
              App 1: School Safety
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="app2" 
              className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 data-[state=on]:bg-designer-red data-[state=on]:text-white w-full"
            >
              App 2: Pickle Planner
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {selectedApp === "app1" && (
        <div>
          {/* The Process Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-6">The Process</h2>
          </div>
          
          {/* Div Block 9 */}
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
            <div className="col-span-1">
              <h3 className="text-xl font-display font-medium mb-3">Quick & <span className="line-through">Dirty</span> Clean</h3>
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
                    src="/lovable-uploads/Mobile 1.1.png" 
                    alt="School Safety App - Mobile Interface 1.1"
                    className="w-full rounded-lg object-contain"
                  />
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>2.</strong> Create consistent actions on each page. Previously users had 3-4 options for where to request help, give status updates, and react to emergencies.
                  </p>
                  <img 
                    src="/lovable-uploads/Mobile 1.2.png" 
                    alt="School Safety App - Mobile Interface 1.2"
                    className="w-full rounded-lg object-contain"
                  />
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>3.</strong> Modernize chats, navigation, statuses, and homepage – Before this redesign the navigation was difficult to locate and distinguish from other actions in app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Mobile 1.3 Image */}
          <div className="w-full mb-10">
            <img 
              src="/lovable-uploads/Mobile 1.3.png" 
              alt="School Safety App - Mobile Interface 1.3"
              className="w-full rounded-lg object-contain"
            />
          </div>

          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
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
        </div>
      )}

      {selectedApp === "app2" && (
        <div>
          {/* The Process Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-6">The Process</h2>
          </div>
          
          {/* Div Block 9 */}
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
            <div className="col-span-1">
              <h3 className="text-xl font-display font-medium mb-3">Meet Short Timelines</h3>
            </div>  
            <div className="col-span-2">
              {/* paragraph Content */}  
              <p className="text-gray-700 leading-relaxed mb-4">
                This project was an unprompted proposal, consequently every hour spent was technically unfunded so time was of the essence. I was handed branding by our graphic design team and given the following responsibilities:
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>End Goal</strong> – Design and demonstrate a pickleball scheduling app from  0→1 for a potential client.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Overcome Challenges</strong> – Our team was presenting our proposal at an impromptu meeting with no expressed interest from the target client.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Deliver A Brand</strong> – Create a visually stunning interface based on other booking apps, modern branding, and rely on design intuition in 2 days. I delivered 2 primary screens and following this I illustrated how they’d be interacted in a short video.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
            {/* School Safety: The Presentation */}
            <div className="col-span-1">
              <h3 className="text-xl font-display font-medium mb-3">The Changes</h3>
            </div>
            <div className="col-span-2 max-sm:col-span-1">    
              <p className="text-gray-700 leading-relaxed mb-6">
                Below are some of the apps I pulled inspiration from alongside the proposed app for our target client
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>1.</strong> I offered 2 versions of the homepage to my director and we decided that version 1 would be more appropriate for this client. Distinct, visible, and concise sections that would help users focus on booking courts and view upcoming events quickly.

                  </p>
                  <img 
                    src="/lovable-uploads/Pickle 1.1.png" 
                    alt="School Safety App - Mobile Interface 1.1"
                    className="w-full rounded-lg object-contain"
                  />
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>2.</strong> I increased visibility and flexibility to the booking section. The user’s primary goal is to find a time that fits their needs, by allowing them to interact with the booking section they can see live changes based on the times they choose. The options we chose were based on flexible lengths, reactive start times, and mapped out court locations – because players prefer some courts to others.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Mobile 1.2 Image */}
          <div className="w-full mb-10">
            <img 
              src="/lovable-uploads/Pickle 1.2.png" 
              alt="Pickleball App - Mobile Interface 1.2"
              className="w-full rounded-lg object-contain"
            />
          </div>

          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
            {/* The Results */}
            <div className="col-span-1">
              <h3 className="text-xl font-display font-medium mb-3">The Results</h3>
            </div>
            <div className="col-span-2 max-sm:col-span-1">    
              <p className="text-gray-700 leading-relaxed mb-4">
                Our CEO pitched these designs alongside our branding and explained the benefits of a personalized booking experience for their members. The target buyer agreed to have further conversations after this initial conversation – no contract was made, but we did secure future meetings to discuss our agency’s potential.
              </p>
            </div>
          </div>
        </div>
      )}
    </ProjectDetailLayout>
  );
};

export default MobileApps;

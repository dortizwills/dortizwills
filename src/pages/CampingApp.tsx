
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const CampingApp = () => {
  return (
    <ProjectDetailLayout 
      title="Camping Made Easy" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
    >
      <div className="md:col-span-8">
        <img 
          src="/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png" 
          alt="Camping App" 
          className="w-full rounded-lg mb-8"
        />
        
        <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        <p className="mb-6">
          Camping shouldn't be hard, or that's what this app helps users to think. This application helps users camp no matter their skill level, from beginners to seasoned outdoor enthusiasts.
        </p>
        
        <p className="mb-8">
          This case study explores how we made camping accessible to everyone by simplifying the process of finding and booking campsites based on experience level and needed amenities.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Problem Statement</h2>
        <p className="mb-6">
          Many potential campers are intimidated by the complexity of planning a camping trip. They worry about choosing the right location, packing the correct gear, and ensuring they'll have access to necessary facilities.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Solution</h2>
        <p className="mb-6">
          We created a camping app that categorizes campsites by difficulty level, provides customized packing lists based on the chosen campsite and weather conditions, and offers step-by-step guides for setting up camp.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Design Process</h2>
        <p className="mb-6">
          Our design process included extensive user research, competitive analysis, and iterative design cycles with continuous user testing.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Campsite difficulty ratings (Beginner, Intermediate, Advanced)</li>
          <li>Custom packing lists based on campsite facilities and weather</li>
          <li>Step-by-step setup guides with AR visualization</li>
          <li>Offline access to maps and guides</li>
          <li>Emergency assistance feature with GPS location sharing</li>
        </ul>
        
        <h2 className="text-2xl font-display font-semibold mb-4">User Testing Insights</h2>
        <p className="mb-6">
          User testing revealed that beginners particularly valued the difficulty ratings and guided setup instructions, while experienced campers appreciated the detailed information about facilities and trail conditions.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        <p className="mb-6">
          The app has successfully reduced the barrier to entry for new campers, with 78% of beginner users reporting they felt more confident about camping after using the app. Booking conversions increased by 45% compared to the previous booking system.
        </p>
      </div>
      
      <aside className="md:col-span-4 space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-display text-xl font-medium mb-4">Project Details</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Timeline</h4>
              <p className="text-gray-600">3 Months</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Responsibilities</h4>
              <p className="text-gray-600">UX Research, UI Design, User Testing, Interaction Design</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Results</h4>
              <p className="text-gray-600">45% increase in booking conversions, 78% increase in user confidence</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default CampingApp;

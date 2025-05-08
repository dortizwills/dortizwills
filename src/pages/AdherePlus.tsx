
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const AdherePlus = () => {
  return (
    <ProjectDetailLayout 
      title="Adhere+" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
    >
      <div className="md:col-span-8">
        <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-500">Project image coming soon</p>
        </div>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <p className="mb-6">
          0 to 1 web and branding design for Adhere Plus's flagship app. This project involved creating a complete brand identity and user experience for a new product in the market.
        </p>
        
        <div className="p-8 bg-gray-50 rounded-lg mb-8 text-center">
          <p className="text-lg text-gray-500 italic">Detailed case study content coming soon.</p>
        </div>
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
              <p className="text-gray-600">Branding, UX/UI Design, Design System Creation</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default AdherePlus;

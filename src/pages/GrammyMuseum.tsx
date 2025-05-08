
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const GrammyMuseum = () => {
  return (
    <ProjectDetailLayout 
      title="Grammy Museum" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
    >
      <div className="md:col-span-8">
        <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-500">Project image coming soon</p>
        </div>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <p className="mb-6">
          Redesigning the Grammy Museum's digital experience to showcase music history and education. This project focuses on creating an engaging and interactive platform that brings the museum's rich collection to life online.
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
              <p className="text-gray-600">In Progress</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Responsibilities</h4>
              <p className="text-gray-600">UX/UI Design, Interactive Experience Design, Content Strategy</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default GrammyMuseum;

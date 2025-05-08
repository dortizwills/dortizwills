
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const QuickServices = () => {
  return (
    <ProjectDetailLayout 
      title="Redesigning 'Quick Services'" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
    >
      <div className="md:col-span-8">
        <img 
          src="/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png" 
          alt="Quick Services App" 
          className="w-full rounded-lg mb-8"
        />
        
        <h2 className="text-2xl font-display font-semibold mb-4">Problem Statement</h2>
        <p className="mb-6">
          Quick service transactions were taking 10-15 minutes, creating frustration for both customers and staff. Our goal was to reduce checkout times to 2-3 minutes without sacrificing quality or accuracy.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">The Challenge</h2>
        <p className="mb-6">
          The existing system was bogged down by a complex interface requiring multiple steps and screens to complete basic transactions. Staff needed extensive training, and even experienced users struggled with the workflow during peak hours.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Research Process</h2>
        <p className="mb-6">
          We conducted extensive field research, including:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>15 hours of on-site observation</li>
          <li>Interviews with 8 staff members across different experience levels</li>
          <li>Analysis of transaction time data for 1,500+ orders</li>
          <li>Competitive analysis of similar quick-service systems</li>
        </ul>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Key Insights</h2>
        <p className="mb-6">
          Our research revealed several critical pain points:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Staff needed to navigate through 7+ screens for common transactions</li>
          <li>The most frequently used functions were buried in submenus</li>
          <li>The interface didn't adapt to different service contexts (morning rush vs. afternoon lull)</li>
          <li>Payment processing was unnecessarily complex</li>
        </ul>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Solution</h2>
        <p className="mb-6">
          We redesigned the interface with a focus on:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Context-aware screens that prioritize relevant functions based on time of day</li>
          <li>Single-screen workflow for 80% of common transactions</li>
          <li>Streamlined payment processing with intelligent defaults</li>
          <li>Clear visual hierarchy and improved information architecture</li>
        </ul>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        <p className="mb-6">
          After implementation and a four-week testing period:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Average transaction time decreased from 12 minutes to just under 3 minutes</li>
          <li>Staff training time reduced by 65%</li>
          <li>Transaction errors decreased by 48%</li>
          <li>Customer satisfaction scores increased by 27%</li>
        </ul>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Lessons Learned</h2>
        <p className="mb-6">
          The project reinforced that efficiency doesn't have to come at the cost of quality. By deeply understanding the context of use and focusing on streamlining the most common paths, we were able to dramatically improve the experience for both staff and customers.
        </p>
      </div>
      
      <aside className="md:col-span-4 space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-display text-xl font-medium mb-4">Project Details</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Timeline</h4>
              <p className="text-gray-600">4 Months</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Responsibilities</h4>
              <p className="text-gray-600">UX Research, Business Analysis, Interface Design, User Testing</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Results</h4>
              <p className="text-gray-600">75% reduction in transaction time, 48% reduction in errors</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default QuickServices;

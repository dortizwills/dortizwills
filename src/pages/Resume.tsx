
import React from 'react';
import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-5xl font-bold">Resume</h1>
          <button className="flex items-center gap-2 bg-designer-red hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            <FileText size={18} />
            Download PDF
          </button>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl mb-4 pb-2 border-b">Experience</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Senior UX Designer</h3>
                  <span className="text-designer-red">2020 - Present</span>
                </div>
                <h4 className="text-gray-600 mb-3">TechDesign Inc., San Francisco</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Led UX design for the company's flagship product, improving user satisfaction by 35%</li>
                  <li>Conducted user research and created personas, user flows, and wireframes</li>
                  <li>Collaborated with product managers to define feature requirements</li>
                  <li>Mentored junior designers and established design system guidelines</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">UX/UI Designer</h3>
                  <span className="text-designer-red">2017 - 2020</span>
                </div>
                <h4 className="text-gray-600 mb-3">DigitalCraft Studio, New York</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Designed user interfaces for web and mobile applications</li>
                  <li>Created interactive prototypes using Figma and Adobe XD</li>
                  <li>Conducted usability testing sessions and implemented design iterations</li>
                  <li>Worked closely with development team to ensure design feasibility</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-display text-2xl mb-4 pb-2 border-b">Education</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Master of Fine Arts, Design</h3>
                  <span className="text-designer-red">2015 - 2017</span>
                </div>
                <h4 className="text-gray-600">California Institute of Design</h4>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Bachelor of Arts, Graphic Design</h3>
                  <span className="text-designer-red">2011 - 2015</span>
                </div>
                <h4 className="text-gray-600">University of Creative Arts</h4>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-display text-2xl mb-4 pb-2 border-b">Skills</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision', 'Principle'].map((tool) => (
                    <span key={tool} className="bg-designer-gray px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Design Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing', 'Information Architecture', 'Design Systems'].map((skill) => (
                    <span key={skill} className="bg-designer-gray px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;


import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-4xl mx-auto px-6 py-12 max-sm:px-4 max-sm:pt-20">
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-gray-600 text-lg">Download my resume or view it below.</p>
        </div>
        
        <div className="mb-8">
          {/* <Button className="bg-designer-red hover:bg-red-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button> */}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center border-b border-gray-200 pb-6">
              <h2 className="font-display text-3xl font-bold mb-2">Your Name</h2>
              <p className="text-gray-600 mb-2">UX/UI Designer & Visual Designer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span>email@example.com</span>
                <span>•</span>
                <span>(555) 123-4567</span>
                <span>•</span>
                <span>Portfolio Website</span>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">Senior UX/UI Designer</h4>
                      <p className="text-gray-600">Company Name</p>
                    </div>
                    <span className="text-gray-500 text-sm">2022 - Present</span>
                  </div>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Led design initiatives for multiple product lines</li>
                    <li>• Collaborated with cross-functional teams</li>
                    <li>• Conducted user research and usability testing</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">UX Designer</h4>
                      <p className="text-gray-600">Previous Company</p>
                    </div>
                    <span className="text-gray-500 text-sm">2020 - 2022</span>
                  </div>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Designed user interfaces for web and mobile applications</li>
                    <li>• Created wireframes, prototypes, and user flows</li>
                    <li>• Worked closely with development teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Education</h3>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Bachelor of Design</h4>
                    <p className="text-gray-600">University Name</p>
                  </div>
                  <span className="text-gray-500 text-sm">2016 - 2020</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Design Tools</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Adobe Creative Suite</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technical</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Other</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>User Research</li>
                    <li>Prototyping</li>
                    <li>Design Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;

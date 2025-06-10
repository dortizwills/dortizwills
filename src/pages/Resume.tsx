
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  // Function to handle the PDF download
  const handleDownloadPDF = () => {
    // Open resume PDF in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="font-display text-5xl font-bold mb-4 sm:mb-0">Resume</h1>
          <Button 
            onClick={handleDownloadPDF}
            className="bg-gradient-primary text-white border-none hover:opacity-90"
          >
            <Download size={18} className="mr-2" />
            Download PDF
          </Button>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl mb-4 pb-2 border-b">Experience</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Freelance UXUI Product Designer</h3>
                  <span className="text-designer-red">2023 - Present</span>
                </div>
                <h4 className="text-gray-600 mb-3">Shopmonkey | Higharc | Raborn Media | & More, Remote</h4>
                <h5 className="font-medium mb-2">Ux/Ui Designs</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Performed seamless dev handoffs, QA, and content management using basic HTML, CSS, and AI-assisted development environments for dozens launches.</li>
                  <li>Designed and prototyped 2 mobile applications from 0 to 1 for B2C companies.</li>
                  <li>Provided mobile-first responsive designs for multiple clients during overlapping deadlines to ensure timely releases and meet client contract agreements.</li>
                  <li>Contributed to WordPress development, addressing minor updates and UX/UI improvements.</li>
                  <li>Designed and delivered component libraries, icons, colors, and graphics for custom client websites.</li>
                  <li>Applied accessible design principles (WCAG 2.1) to website design systems.</li>
                </ul>
                <h5 className="font-medium mt-4 mb-2">Product Designs</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>I designed product mockups and deliverables, conducted user interviews, and finalized web and mobile app designs for 4 B2B startups.</li>
                  <li>80% increase in client satisfaction after delivering dozens of responsive website launches from mobile-first responsive designed apps.</li>
                  <li>Produced two 0-1 quick service app experiences by delivering 2 distinct workflows for administrators and technician users.</li>
                  <li>I strengthened client relationships by maintaining regular communication, delivering projects on time, and providing tailored design solutions for technical needs.</li>
                  <li>Reduced duplicate work by standardizing the design processes company wide by authoring style guides included graphics, typography, logos, and icons.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Graphic Designer & Illustrator</h3>
                  <span className="text-designer-red">2020 - 2023</span>
                </div>
                <h4 className="text-gray-600 mb-3">Shopmonkey, Morgan Hill, CA</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>11% increased click rates through the implementation of email marketing campaigns, branding strategies, and social media ads.</li>
                  <li>3 time Team Player Award winner for exceptional contributions to the design team's quarterly fiscal goals.</li>
                  <li>7% conversion rates boosting user engagement and up to 28% increase in ROI for demo bookings via user personas and current design trends.</li>
                  <li>Supported $25M Series C funding efforts by executing and developing a successful brand redesign.</li>
                  <li>Created 100+ digital and print materials for developing marketing assets including new product launches, reports, slideshows, customer stories, and promotional campaigns.</li>
                  <li>I created A/B-tested advertisements tailored to user personas and aligned with current design trends.</li>
                  <li>Led company's brand execution and maintenance across email, social media, digital advertisements, blogs, deliverables, and landing pages, engaging over 3K users and generating 12K+ leads.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Jr. Product Designer</h3>
                  <span className="text-designer-red">2019 - 2020</span>
                </div>
                <h4 className="text-gray-600 mb-3">Shopmonkey, San Jose, CA</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Collaborated with internal teams to recognize needs, strategize solutions, and align them with company objectives. Executed large-scale events with tens of thousands of attendees by articulating design strategies and core principles to cross-functional teams.</li>
                  <li>Launched two UX MVPs by conducting future-focused feature research, presenting mockups, prototyping, and testing designs.</li>
                  <li>Generated 1K + valuable leads by introducing booth graphics and promotional materials for the company's debut trade show in 2019.</li>
                  <li>Boosted social media engagement and follower base from 50 to 400 within a year via a cohesive visual style and engaging content.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-display text-2xl mb-4 pb-2 border-b">Education</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">Bachelors in Humanities & Minor in Fine Arts</h3>
                  <span className="text-designer-red">2009 - 2017</span>
                </div>
                <h4 className="text-gray-600">San Jose State University</h4>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-display text-2xl mb-4 pb-2 border-b">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision', 'Principle', 'Chat GPT', 'Lovable.ai', 'Bolt.new'].map((tool) => (
                    <span key={tool} className="bg-designer-gray px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Design Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'UI Design', 
                    'UX Research', 
                    'Wireframing', 
                    'Prototyping', 
                    'User Testing', 
                    'Information Architecture', 
                    'Design Systems',
                    'Iconography',
                    'Print Design',
                    'Email Design',
                    'User Interviews',
                    'Responsive Design',
                    'Branding',
                    'Basic CSS',
                    'Basic HTML'
                  ].map((skill) => (
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

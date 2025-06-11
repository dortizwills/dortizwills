
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="aspect-square bg-designer-gray rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/86e81dce-2aa1-4abc-84f0-62b609afe349.png" 
                alt="Profile" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing', 'Figma', 'Adobe XD', 'Sketch', 
                    'Photoshop', 'Illustrator', 'Lovalbe.ai', 'HTML', 'Basic CSS', 'Bolt.new', 'ChatGPT'].map((skill) => (
                    <span key={skill} className="bg-designer-gray px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-3xl mb-6">Hello there!</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a uxui product designer with over 4 years of experience crafting digital experiences that delight users and solve real problems.
              </p>
              
              <p>
                My approach combines research-driven insights with intuitive design thinking. I believe in creating delightful products that not only look beautiful but also serve an ongoing need for the people who use them.
              </p>
              
              <p>
                I believe that great design is invisible. It should feel so natural and intuitive that users don't even notice it. Every pixel matters, but what matters more is how those pixels make people feel.
              </p>
              
              <p>
                When I'm not designing, I spend a majority of my time hiking with my wife & daughter, researching what's new in AI, serving my local community, riding the closest waves, and baking sweet treats. On special occasions I get to do all of them in the same week.
              </p>
              
              <div className="mt-8">
                <Button 
                  className="bg-gradient-primary text-white border-none hover:opacity-90 flex items-center gap-2" 
                  onClick={() => window.open('https://www.linkedin.com/in/dortiz-wills', '_blank')}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

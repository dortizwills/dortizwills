
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const About = () => {
  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl mb-6">Hello there!</h2>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                I'm Daniel, a UXUI product designer with over 4 years of experience crafting digital experiences that solve real problems.
              </p>
              
              <p>
                Although I got my start in the classical art world bringing scenes to life, I moved into tech and discovered my passion for helping people through product design. I thrive knowing my designs made a difference in user's lives and I'm driven to achieve excellence, clarity, and beauty through crafting cohesive design systems.
              </p>
              
              <p>
                I believe that great design is invisible. It should feel so natural and intuitive that users don't even notice it. Every pixel matters, but what matters more is how those pixels make people feel.
              </p>
              
              <p>
                When I'm not designing, I spend a majority of my time hiking with my wife & daughter, researching what's new in AI, serving my local community, riding the closest waves, and baking sweet treats. On special occasions I get to do all of them in the same week.
              </p>
            </div>
            
            <div className="mb-8">
              <Button 
                className="bg-gradient-primary text-white border-none hover:opacity-90 flex items-center gap-2" 
                onClick={() => window.open('https://www.linkedin.com/in/dortiz-wills', '_blank')}
              >
                <Linkedin size={20} />
                Let's connect on LinkedIn!
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing', 'Figma', 'Adobe XD', 'Sketch', 
                    'Photoshop', 'Illustrator', 'Lovable.ai', 'HTML', 'Basic CSS', 'Bolt.new', 'ChatGPT'].map((skill) => (
                    <span key={skill} className="bg-designer-gray px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="aspect-square bg-designer-gray rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/86e81dce-2aa1-4abc-84f0-62b609afe349.png" 
                alt="Profile" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

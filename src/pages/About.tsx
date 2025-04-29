
import React from 'react';

const About = () => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="aspect-square bg-designer-gray rounded-lg flex items-center justify-center mb-6">
              <span className="text-gray-400">Profile Image</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing', 'Figma', 'Adobe XD', 'Sketch'].map((skill) => (
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
                I'm a product designer with over 5 years of experience crafting digital experiences that delight users and solve real problems.
              </p>
              
              <p>
                My approach combines research-driven insights with intuitive design thinking. I believe in creating products that not only look beautiful but also work seamlessly for the people who use them.
              </p>
              
              <p>
                When I'm not designing, you can find me hiking in nature, experimenting with new cooking recipes, or reading about emerging technology trends.
              </p>
              
              <h3 className="font-display text-2xl mt-8 mb-4">My Design Philosophy</h3>
              
              <p>
                I believe that great design is invisible. It should feel so natural and intuitive that users don't even notice it. My goal is to create experiences that remove friction and empower people to achieve their goals effortlessly.
              </p>
              
              <p>
                Every pixel matters, but what matters more is how those pixels make people feel. I design with empathy at the heart of everything I do.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

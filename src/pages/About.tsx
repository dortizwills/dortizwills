
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const About = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Set default subject if empty
    if (!formData.get('subject') || formData.get('subject') === '') {
      formData.set('subject', 'Reaching Out');
    }

    try {
      await fetch('https://formsubmit.co/d4ddafc4feecd5d121fc719063293c2c', {
        method: 'POST',
        body: formData,
      });
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-display text-3xl mb-6">Hello there!</h2>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                I'm Daniel, a uxui product designer with over 4 years of experience crafting digital experiences that solve real problems.
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

            <Button 
              className="bg-gradient-primary text-white border-none hover:opacity-90 flex items-center gap-2" 
              onClick={() => window.open('https://www.linkedin.com/in/dortiz-wills', '_blank')}
            >
              <Linkedin size={20} />
              Let's connect on LinkedIn!
            </Button>
          </div>
          
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
        </div>

        {/* Contact Me Section */}
        <div className="bg-white border border-black rounded-lg p-8">
          <div className="flex items-start mb-6">
            <Mail className="text-black mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-display font-semibold">Contact Me</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            Interested in working with me or have a project in mind? I'd love to hear from you.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-designer-red" 
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-primary text-white border-none hover:opacity-90 w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Thank you for reaching out!</p>
              <p className="text-gray-600 mb-4">
                You can expect a message from me in the next 24 hours. I'm happy to explore 
                the vision you have for your next project.
              </p>
              <p className="text-gray-600 font-medium mb-6">Talk soon!</p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-primary text-white border-none hover:opacity-90"
              >
                Send Another Message
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default About;

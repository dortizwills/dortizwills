
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const About = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      author: "Kyle Marks",
      title: "Creative Director, Shopmonkey",
      text: "Daniel's presence enhances both the creative output and the culture of the workplace. He has contributed to a wide variety of design teams, gaining a rare breadth of experience and perspectives that make him stand out in the creative field. His versatile skill set reflects not only his technical ability but also a deep understanding of design across disciplines."
    },
    {
      author: "Steven Chic",
      title: "VP, Alvys",
      text: "I was consistently impressed by Danny's creativity and technical abilities. His designs were always innovative and well-executed, and he had a great eye for detail... creating graphics for marketing materials, or developing new ideas, Danny consistently produced high-quality work that exceeded expectations."
    },
    {
      author: "Kelsey McAuley",
      title: "Director of Web, Raborn Media",
      text: "Daniel has shown a growing curiosity about how design and development intersect, which positions him well for creating designs that are both thoughtful and practical. His eagerness to expand his skill set will no doubt continue to serve him and his future teams well."
    },
    {
      author: "Samantha Lane",
      title: "Head of UX Design, Raborn Media",
      text: "One highlight from our time together was a safety-focused web concept he helped design — his ideas showed real empathy and a strong understanding of user needs in high-stakes contexts. It was a great example of how he combines creative thinking with purpose-driven design."
    },
    {
      author: "Matt Stratton",
      title: "COO, Raborn Media",
      text: "I have no doubt that Danny would be a valuable asset to any organization requiring someone who's willing to work hard and pay attention to detail. His dedication, integrity, and work ethic make him an excellent candidate for any position he would pursue."
    }
  ];

  const handlePrevious = () => {
    setCurrentQuote((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentQuote((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-16">
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <h1 className="font-heading text-5xl md:text-6xl font-medium mb-12 text-editorial-fg">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="space-y-4 text-editorial-muted text-lg leading-relaxed">
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
            
            <div>
              <Button 
                className="bg-editorial-fg text-editorial-bg hover:bg-editorial-fg/90 rounded-full flex items-center gap-2" 
                onClick={() => window.open('https://www.linkedin.com/in/dortiz-wills', '_blank')}
              >
                <Linkedin size={20} />
                Let's connect on LinkedIn!
              </Button>
            </div>

            <div>
              <h3 className="font-heading font-medium text-xl mb-4 text-editorial-fg">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing', 'Figma', 'Adobe XD', 'Sketch', 
                  'Photoshop', 'Illustrator', 'Lovable.ai', 'HTML', 'Basic CSS', 'Bolt.new', 'ChatGPT'].map((skill) => (
                  <span key={skill} className="bg-editorial-soft px-4 py-2 rounded-full text-sm text-editorial-fg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="aspect-square bg-editorial-soft rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/86e81dce-2aa1-4abc-84f0-62b609afe349.png" 
                alt="Profile" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 pt-16 border-t border-editorial-line">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-10 text-editorial-fg">What colleagues say</h2>
          <div className="bg-editorial-card rounded-2xl p-8 md:p-12 border border-editorial-line">
            <blockquote className="text-xl md:text-2xl leading-relaxed text-editorial-fg mb-8">
              “{quotes[currentQuote].text}”
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading font-medium text-lg text-editorial-fg">{quotes[currentQuote].author}</div>
                <div className="text-editorial-muted">{quotes[currentQuote].title}</div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrevious}
                  className="w-10 h-10 rounded-full border border-editorial-line flex items-center justify-center hover:bg-editorial-soft transition-colors"
                  aria-label="Previous quote"
                >
                  <ChevronLeft size={18} className="text-editorial-fg" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-editorial-line flex items-center justify-center hover:bg-editorial-soft transition-colors"
                  aria-label="Next quote"
                >
                  <ChevronRight size={18} className="text-editorial-fg" />
                </button>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuote(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentQuote === i ? 'w-8 bg-editorial-fg' : 'w-2 bg-editorial-line'
                  }`}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24 pt-16 border-t border-editorial-line">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4 text-editorial-fg">Interested in working together?</h2>
            <p className="text-editorial-muted mb-8 text-lg">
              If you'd like to discuss opportunities or have any questions about my experience, 
              I'd love to hear from you. Let's connect!
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

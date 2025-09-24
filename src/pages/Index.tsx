import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBackground from '@/assets/hero-background.png';

const Index = () => {
  const portfolioProjects = [
    {
      title: 'Grammy Museum MS Redesign',
      company: 'Raborn Media',
      tags: ['Web App'],
      href: '/product-designs/grammy-museum',
      imagePath: '/lovable-uploads/01-Adhere/Evidence-1.png',
      buttonText: 'View Project'
    },
    {
      title: 'Express Lane — Lightning Quick Services',
      company: 'Shopmonkey',
      tags: ['Mobile App'],
      href: '/product-designs/quick-services',
      imagePath: '/lovable-uploads/01-express-lane/display-express-lane.png',
      buttonText: 'View Project'
    },
    {
      title: 'Gourmet Recipes',
      company: 'Freelance Case Study',
      tags: ['Mobile App'],
      href: '/product-designs/gourmet-recipes',
      imagePath: '/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png',
      buttonText: 'View Project'
    },
    {
      title: 'Mobile App Portfolio',
      company: 'Raborn Media',
      tags: ['Mobile Apps'],
      href: '/mobile-apps',
      imagePath: '/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png',
      buttonText: 'View Project'
    }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8"
            style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Danny Ortiz-Wills' Portfolio | 2019-2025
                </h1>
                <p className="text-xl text-white/80">
                  Product Designer, UXUI Designer, Web Designer, Vibe Coder, AI Enthusiast
                </p>
              </div>
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              >
                <Link to="/product-designs">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
            style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Illustration */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/lovable-uploads/self-photo@2x.png" 
                  alt="Daniel Ortiz-Wills Illustration" 
                  className="max-w-full max-h-[300px] object-contain"
                />
              </div>
              
              {/* Quote Content */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-left bg-gradient-to-r from-[#E35CC3] via-[#F287D9] via-[#A888DA] to-[#6988DC] bg-clip-text text-transparent">
                  Collaboration is my middle name, prior managers and peers agree.
                </h2>
                <blockquote className="text-white/90 mb-4 text-lg">
                  "One highlight from our time together was a safety-focused web concept 
                  he helped design — his ideas showed real empathy and a strong 
                  understanding of user needs in high-stakes contexts. It was a great 
                  example of how he combines creative thinking with purpose-driven design."
                </blockquote>
                <footer className="text-white/80">
                  <strong>Samantha Lane</strong> Head of UX Design, Raborn Media
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
            style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Portfolio Highlights | 2019-2021
              </h2>
              <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioProjects.map((project, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <img 
                      src={project.imagePath} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      {project.company}
                    </p>
                    <Button 
                      asChild
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Link to={project.href}>
                        {project.buttonText}
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections can be added here as separate sections with the same styling pattern */}
    </div>
  );
};

export default Index;
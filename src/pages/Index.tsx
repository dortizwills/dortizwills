import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import heroBackground from '@/assets/hero-background.png';

const Index = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const workSections = [
    {
      title: "Raborn Media",
      subtitle: "UXUI Designer, Project Manager",
      dateRange: "2024-2025",
      projects: [
        {
          title: 'Grammy Museum MS Redesign',
          company: 'Raborn Media',
          tags: ['Web App', '2 months', 'NEW'],
          href: '/product-designs/grammy-museum',
          videoPath: '/lovable-uploads/Grammy Museum/Grammy Museum 2.mp4',
          description: 'Redesigning interactions to engage visitors of all ages and encourage donations and event bookings.'
        },
        {
          title: 'Mobile App Portfolio',
          company: 'Raborn Media',
          tags: ['Web App', '2 months', 'NEW'],
          href: '/mobile-apps',
          imagePath: '/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png',
          description: 'View a collection of my mobile app design work across various industries and platforms.'
        }
      ]
    },
    {
      title: "DOW Freelance Designer",
      subtitle: "Product Designer, Mobile Designer, UXUI Designer",
      dateRange: "2023-2025",
      projects: [
        {
          title: 'Camping Made Easy',
          company: 'DOW Freelance Designer',
          tags: ['Web App', '2 months', 'NEW'],
          href: '/product-designs/camping-app',
          imagePath: '/lovable-uploads/01-camping-buddy/primary-happy-path-1.png',
          description: "Camping shouldn't be hard, or that's what this app helps users to think. Camp no matter your skill level."
        },
        {
          title: 'Gourmet Recipes',
          company: 'DOW Freelance Designer',
          tags: ['Web App', '2 months', 'NEW'],
          href: '/product-designs/gourmet-recipes',
          imagePath: '/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png',
          description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are."
        }
      ]
    },
    {
      title: "Shopmonkey",
      subtitle: "Product Designer, Jr. Product Designer",
      dateRange: "2021-2023",
      projects: [
        {
          title: 'Express Lane — Lightning Quick Services',
          company: 'Shopmonkey',
          tags: ['Web App', '3 Months'],
          href: '/product-designs/quick-services',
          imagePath: '/lovable-uploads/01-express-lane/display-express-lane.png',
          description: 'Reduce checkout times to 2-3 minutes for automotive shops.'
        }
      ],
      graphicDesigns: [
        {
          title: 'Data-Driven eBooks',
          tags: ['2 Months', '2.5 Wks Each'],
          imagePath: '/lovable-uploads/Grammy Museum/Slide 1.png',
          description: 'Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less'
        }
      ]
    }
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % workSections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + workSections.length) % workSections.length);
  };

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
                onClick={scrollToPortfolio}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              >
                View Work
                <ArrowRight className="ml-2 h-4 w-4" />
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
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section id="portfolio-section" className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
            style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
          >
            <Collapsible open={isPortfolioOpen} onOpenChange={setIsPortfolioOpen}>
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between mb-6 cursor-pointer">
                  <h2 className="text-2xl font-bold text-white">
                    Portfolio Highlights | 2019-2025
                  </h2>
                  <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
                    {isPortfolioOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden">
                      <video 
                        src="/lovable-uploads/Grammy Museum/Grammy Museum 2.mp4"
                        controls
                        className="w-full h-full object-cover"
                        poster="/lovable-uploads/Grammy Museum/Slide 1.png"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Grammy Museum MS Redesign
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        Raborn Media
                      </p>
                      <Button 
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link to="/product-designs/grammy-museum">
                          View Project
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/01-express-lane/display-express-lane.png"
                        alt="Express Lane — Lightning Quick Services" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Express Lane — Lightning Quick Services
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        Shopmonkey
                      </p>
                      <Button 
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link to="/product-designs/quick-services">
                          View Project
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
                        alt="Gourmet Recipes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Gourmet Recipes
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        Freelance Case Study
                      </p>
                      <Button 
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link to="/product-designs/gourmet-recipes">
                          View Project
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                    <div className="aspect-video bg-gray-800 relative overflow-hidden">
                      <img 
                        src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png"
                        alt="Mobile App Portfolio" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Mobile App Portfolio
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        Raborn Media
                      </p>
                      <Button 
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link to="/mobile-apps">
                          View Project
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Work Sections Carousel */}
      <section className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              onClick={prevSection}
              variant="ghost" 
              size="icon"
              className="text-white hover:text-white/80 hover:bg-white/10"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            
            <Button 
              onClick={nextSection}
              variant="ghost" 
              size="icon"
              className="text-white hover:text-white/80 hover:bg-white/10"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
            style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {workSections[activeSection].title.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {workSections[activeSection].title} | {workSections[activeSection].dateRange}
                  </h2>
                  <p className="text-white/80">
                    {workSections[activeSection].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  onClick={prevSection}
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:text-white/80"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button 
                  onClick={nextSection}
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:text-white/80"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {workSections[activeSection].projects.map((project, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="bg-white/20 text-white border-white/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 text-lg">
                        {project.description}
                      </p>
                      <Button 
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Link to={project.href}>
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      {project.videoPath ? (
                        <video 
                          src={project.videoPath}
                          controls
                          className="w-full h-full object-cover"
                          poster="/lovable-uploads/Grammy Museum/Slide 1.png"
                        />
                      ) : (
                        <img 
                          src={project.imagePath}
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {workSections[activeSection].graphicDesigns && (
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
                      <h3 className="text-xl font-bold text-white">
                        Graphic Designer | 2019-2021
                      </h3>
                      <ChevronDown className="w-5 h-5 text-white" />
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="mt-6 space-y-6">
                      {workSections[activeSection].graphicDesigns.map((design, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
                          <div className="grid lg:grid-cols-2 gap-6 items-center">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-4">
                                {design.title}
                              </h4>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {design.tags.map((tag, tagIndex) => (
                                  <Badge 
                                    key={tagIndex} 
                                    variant="secondary" 
                                    className="bg-white/20 text-white border-white/20"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-white/80 mb-6 text-lg">
                                {design.description}
                              </p>
                              <Button 
                                asChild
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                              >
                                <Link to="/graphic-designs/data-driven-ebooks">
                                  View Project
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                            
                            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                              <img 
                                src={design.imagePath}
                                alt={design.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
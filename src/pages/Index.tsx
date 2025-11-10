import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCard {
  id: string;
  title: string;
  company: string;
  category: string;
  duration: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  link: string;
  tabs?: string[];
}

const projectsData: ProjectCard[] = [
  {
    id: 'collaboration',
    title: 'Collaboration is my middle name, prior managers and peers agree.',
    company: 'Testimonials',
    category: 'View Quotes',
    duration: 'from peers, managers, and leadership >>',
    description: 'View Quotes from peers, managers, and leadership >>',
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/Grammy Museum/Slide 1.png',
    link: '#quotes',
  },
  {
    id: 'grammy',
    title: 'Grammy Museum MS Redesign',
    company: 'Raborn Media',
    category: 'Responsive Web',
    duration: '6 weeks',
    description: "Redesigning the Non-Profit's digital experience to showcase history and education",
    mediaType: 'video',
    mediaSrc: '/lovable-uploads/Grammy Museum/Grammy Museum 2.mp4',
    link: '/product-designs/grammy-museum',
    tabs: ['Raborn Media', 'Responsive Web', '6 weeks'],
  },
  {
    id: 'securing',
    title: 'Securing 100+ shops via Enterprise partnerships',
    company: 'Shopmonkey',
    category: 'Responsive Web',
    duration: '2 months',
    description: 'Reducing checkout times to 2–3 minutes – a 200% efficiency increase',
    mediaType: 'video',
    mediaSrc: '/lovable-uploads/01-express-lane/Express-Lane-Admin.mp4',
    link: '/product-designs/quick-services',
    tabs: ['Shopmonkey', 'Responsive Web', '2 months'],
  },
  {
    id: 'pitching',
    title: 'Pitching & Developing Future Partnerships',
    company: 'Raborn Media',
    category: 'Responsive Web',
    duration: '4 weeks',
    description: '2 Mobile app designs promoted to potential clients.',
    mediaType: 'video',
    mediaSrc: '/lovable-uploads/School-Defense.mp4',
    link: '/mobile-apps',
    tabs: ['Raborn Media', 'Mobile Apps', '4 weeks'],
  },
  {
    id: 'camping',
    title: 'Camping Made Easy',
    company: 'Freelance',
    category: 'Mobile App',
    duration: '3 months',
    description: "Camping shouldn't be hard, or that's what this app helps users to think",
    mediaType: 'video',
    mediaSrc: '/lovable-uploads/01-camping-buddy/Final-Demo-Camp-Buddy.mp4',
    link: '/product-designs/camping-app',
    tabs: ['Freelance', 'Mobile App', '3 months'],
  },
  {
    id: 'recipes',
    title: 'Gourmet Recipes Anytime',
    company: 'Blue Apron',
    category: 'Mobile App',
    duration: '2 months',
    description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are",
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png',
    link: '/product-designs/gourmet-recipes',
    tabs: ['Blue Apron', 'Mobile App', '2 months'],
  },
  {
    id: 'adhere',
    title: 'Adhere full website rebrand & design system',
    company: 'Raborn Media',
    category: 'Responsive Web',
    duration: '2 months',
    description: 'Complete website redesign with comprehensive design system',
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png',
    link: '/product-designs/adhere-plus',
    tabs: ['Raborn Media', 'Responsive Web', '2 months'],
  },
  {
    id: 'data-driven-ebooks',
    title: 'Data-Driven eBooks',
    company: 'Shopmonkey',
    category: 'Graphic Design',
    duration: '3 months',
    description: 'Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less',
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png',
    link: '/graphic-designs/data-driven-ebooks',
    tabs: ['Shopmonkey', 'Graphic Design', '3 months'],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Campaigns',
    company: 'Shopmonkey',
    category: 'Graphic Design',
    duration: '6 months',
    description: 'Email marketing campaigns for an audience that is not reading inclined',
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/3b9e02c1-446c-48b1-9c63-d01152ab0b67.png',
    link: '/graphic-designs/email-marketing',
    tabs: ['Shopmonkey', 'Graphic Design', '6 months'],
  },
  {
    id: 'product-illustrations',
    title: 'Refining Product Illustrations',
    company: 'Shopmonkey',
    category: 'Graphic Design',
    duration: '2 months',
    description: "Rebranding assets for Series C funding that refined Shopmonkey's brand",
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png',
    link: '/graphic-designs/product-illustrations',
    tabs: ['Shopmonkey', 'Graphic Design', '2 months'],
  },
  {
    id: 'social-media',
    title: 'Social Media Campaigns',
    company: 'Shopmonkey',
    category: 'Graphic Design',
    duration: '1 year',
    description: 'Social media and advertising campaigns that separated Shopmonkey in the Automotive software community',
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png',
    link: '/graphic-designs/social-media',
    tabs: ['Shopmonkey', 'Graphic Design', '1 year'],
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    company: 'Shopmonkey',
    category: 'Graphic Design',
    duration: '4 months',
    description: 'Story telling case studies that encapsulate success stories from different automotive shops – from repair to custom builds',
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png',
    link: '/graphic-designs/case-studies',
    tabs: ['Shopmonkey', 'Graphic Design', '4 months'],
  },
  {
    id: 'event-designs',
    title: 'Event Designs',
    company: 'Shopmonkey',
    category: 'Graphic Design',
    duration: '2 months',
    description: "Booth and event designs displaying Shopmonkey's friendly brand towards a skeptical crowd at SEMA – The largest tradeshow in the automotive sphere",
    mediaType: 'image',
    mediaSrc: '/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png',
    link: '/graphic-designs/event-designs',
    tabs: ['Shopmonkey', 'Graphic Design', '2 months'],
  },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(2);
  const [currentQuote, setCurrentQuote] = useState(0);

  // Testimonial quotes data
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

  // Preload videos for instant playback
  React.useEffect(() => {
    const videos = [
      '/lovable-uploads/Grammy Museum/Grammy Museum 2.mp4',
      '/lovable-uploads/01-camping-buddy/Final-Demo-Camp-Buddy.mp4'
    ];
    videos.forEach(src => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    });
  }, []);

  const handlePreviousQuote = () => {
    setCurrentQuote((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNextQuote = () => {
    setCurrentQuote((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const renderProjectContent = (project: ProjectCard, index: number) => {
    if (index === 0) {
      return (
        <div 
          id="quotes"
          className="relative rounded-2xl p-8 backdrop-blur-md bg-white/40 border border-white/60 shadow-lg h-[420px] flex flex-col"
          style={{
            background: 'linear-gradient(135deg, rgba(249, 108, 215, 0.1), rgba(143, 99, 211, 0.1), rgba(29, 64, 161, 0.1))',
          }}
        >
          <div className="flex-1 overflow-y-auto">
            <h2 
              className="text-2xl md:text-3xl font-bold font-unbounded mb-2"
              style={{
                background: 'linear-gradient(135deg, #F96CD7, #8F63D3, #1D40A1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {quotes[currentQuote].author}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{quotes[currentQuote].title}</p>
            <p className="text-gray-800 leading-relaxed" style={{ fontSize: '1.1em' }}>
              "{quotes[currentQuote].text}"
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-white/30">
            <button
              onClick={handlePreviousQuote}
              className="w-10 h-10 rounded-full bg-white/50 hover:bg-white/70 flex items-center justify-center transition-colors"
              aria-label="Previous quote"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextQuote}
              className="w-10 h-10 rounded-full bg-white/50 hover:bg-white/70 flex items-center justify-center transition-colors"
              aria-label="Next quote"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      );
    }

    if (project.id === 'pitching' || project.id === 'camping') {
      return (
        <>
          <div className="flex items-center justify-center max-h-[70vh]">
            {project.id === 'pitching' ? (
              <div className="grid grid-cols-2 gap-6 max-w-[600px] w-full">
                <video
                  src="/lovable-uploads/School-Defense.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                <video
                  src="/lovable-uploads/Pickle Ball.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            ) : (
              <video
                src={project.mediaSrc}
                autoPlay
                muted
                loop
                playsInline
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            )}
          </div>
          <div className="flex justify-center gap-2 pt-6">
            {projectsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedProject(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  selectedProject === i
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
          <Link to={project.link}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl mt-4">
              View Project
            </Button>
          </Link>
        </>
      );
    }

    return (
      <>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 max-h-[70vh]">
          {project.mediaType === 'video' ? (
            <video
              src={project.mediaSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          ) : (
            <img
              src={project.mediaSrc}
              alt={project.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          )}
        </div>
        <div className="flex justify-center gap-2 pt-6">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedProject(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                selectedProject === i
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <Link to={project.link}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl mt-4">
            View Project
          </Button>
        </Link>
      </>
    );
  };

  return (
    <div className="h-screen bg-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[#DD16EB] opacity-20 blur-[150px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#16A7EB] opacity-20 blur-[150px] animate-[float_25s_ease-in-out_infinite_5s]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-[#16EB28] opacity-20 blur-[150px] animate-[float_30s_ease-in-out_infinite_10s]" />
      </div>

      <div className="h-full max-w-[1600px] mx-auto px-4 md:px-8 py-8 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          {/* Left Column */}
          <div className="flex flex-col h-[calc(100vh-56px)]">
            {/* Fixed Title */}
            <div className="flex-shrink-0 mb-8 mt-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-unbounded mb-4">
                Daniel Ortiz Wills Portfolio
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Product Designer, UXUI Designer, Web Designer, Vibe Coder, AI Enthusiast
              </p>
            </div>

            {/* Scrollable Project Cards */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 pb-8"
              style={{ 
                maskImage: 'linear-gradient(to bottom, black calc(100% - 40px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 40px), transparent 100%)'
              }}
            >
              {projectsData.map((project, index) => (
                <div key={project.id}>
                  <button
                    onClick={() => setSelectedProject(index)}
                    className={`w-full text-left rounded-2xl p-6 transition-all duration-300 relative group z-10 ${
                      selectedProject === index
                        ? 'border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                        : 'border border-gray-200 hover:shadow-lg'
                    }`}
                  >
                    {/* Arrow Button */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        selectedProject === index ? 'bg-blue-500' : 'bg-gray-200 group-hover:bg-gray-300'
                      }`}>
                        <ArrowRight className={`w-5 h-5 ${selectedProject === index ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold font-unbounded mb-4 pr-14">
                      {project.title}
                    </h3>

                    {/* Tabs */}
                    {project.tabs && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tabs.map((tab, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                          >
                            {tab}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </button>

                  {/* Mobile/Tablet Content - Shows below selected card */}
                  {selectedProject === index && (
                    <div className="lg:hidden mt-4 space-y-4 pointer-events-auto">
                      {renderProjectContent(project, index)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="hidden lg:flex flex-col justify-center h-[calc(100vh-56px)] space-y-6 pointer-events-none">
            <div className="pointer-events-auto">
              {renderProjectContent(projectsData[selectedProject], selectedProject)}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;

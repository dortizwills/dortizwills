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

  return (
    <div className="h-screen bg-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[#DD16EB] opacity-20 blur-[150px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#16A7EB] opacity-20 blur-[150px] animate-[float_25s_ease-in-out_infinite_5s]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full bg-[#16EB28] opacity-20 blur-[150px] animate-[float_30s_ease-in-out_infinite_10s]" />
      </div>

      <div className="h-full max-w-[1600px] mx-auto px-4 md:px-8 py-8 pb-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          {/* Left Column */}
          <div className="flex flex-col h-[calc(100vh-104px)]">
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
                <button
                  key={project.id}
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
              ))}
            </div>
          </div>

          {/* Right Column - Static, Vertically Centered, Always Visible */}
          <div className="flex flex-col justify-center h-[calc(100vh-104px)] space-y-6 pointer-events-none">
            <div className="pointer-events-auto">
            {/* Show Testimonial or Media based on selected project */}
            {selectedProject === 0 ? (
              /* Testimonial Quote with Glass Effect and Navigation */
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
            ) : projectsData[selectedProject].id === 'pitching' || projectsData[selectedProject].id === 'camping' ? (
              /* Special case for Pitching and Camping projects - centered videos */
              <div className="flex items-center justify-center h-[500px]">
                {projectsData[selectedProject].id === 'pitching' ? (
                  <div className="grid grid-cols-2 gap-4 max-w-full h-full">
                    <video
                      src="/lovable-uploads/School-Defense.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain rounded-lg"
                    />
                    <video
                      src="/lovable-uploads/Pickle Ball.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <video
                    src={projectsData[selectedProject].mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-auto object-contain rounded-lg"
                  />
                )}
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                {projectsData[selectedProject].mediaType === 'video' ? (
                  <video
                    src={projectsData[selectedProject].mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src={projectsData[selectedProject].mediaSrc}
                    alt={projectsData[selectedProject].title}
                    className="w-full h-auto"
                  />
                )}
              </div>
            )}

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 pt-6">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedProject === index
                      ? 'bg-blue-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* View Project Button - Only show if not testimonial */}
            {selectedProject !== 0 && (
              <Link to={projectsData[selectedProject].link}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl mt-4">
                  View Project
                </Button>
              </Link>
            )}
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

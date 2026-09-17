import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedProject {
  id: string;
  title: string;
  company: string;
  categories: string[];
  description: string;
  meta: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  posterSrc?: string;
  secondaryMediaSrc?: string;
  secondaryPosterSrc?: string;
  link: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'securing',
    title: 'Securing 100+ shops via Enterprise partnerships',
    company: 'Shopmonkey',
    categories: ['B2B SaaS', 'Product Design'],
    description: 'An express checkout experience for quick-service auto shops, designed to cut minutes out of every order.',
    meta: 'Product Designer · 2 months',
    mediaSrc: '/lovable-uploads/01-express-lane/Express-Lane-Admin.mp4',
    mediaType: 'video',
    posterSrc: '/lovable-uploads/01-express-lane/dashboard-3.png',
    link: '/product-designs/quick-services',
  },
  {
    id: 'grammy',
    title: '+15% Ticket Sales from +30% Donate Page Views',
    company: 'Grammy Museum Mississippi',
    categories: ['Web', 'Brand & Product Design'],
    description: "A redesign of a non-profit music museum's digital experience, built to make donating, booking, and exploring effortless.",
    meta: 'Designer · 6 weeks',
    mediaSrc: '/lovable-uploads/Grammy Museum/Grammy Museum Homepage.mp4',
    mediaType: 'video',
    posterSrc: '/lovable-uploads/Grammy Museum/Slide 1.png',
    link: '/product-designs/grammy-museum',
  },
  {
    id: 'pitching',
    title: 'Pitching & Developing Future Partnerships',
    company: 'Raborn Media',
    categories: ['Mobile Apps', 'Concept Design'],
    description: 'Two mobile app designs promoted to potential clients, balancing clarity with visual energy.',
    meta: 'Product Designer · 4 weeks',
    mediaSrc: '/lovable-uploads/School-Defense.mp4',
    posterSrc: '/lovable-uploads/Mobile 1.3.png',
    secondaryMediaSrc: '/lovable-uploads/Pickle Ball.mp4',
    secondaryPosterSrc: '/lovable-uploads/Pickle 1.2.png',
    mediaType: 'video',
    link: '/mobile-apps',
  },
  {
    id: 'adhere',
    title: '20% Conversions Increase',
    company: 'Adhere+',
    categories: ['Healthcare SaaS', 'Brand & Web'],
    description: 'A full website rebrand and design system for a healthcare SaaS platform that helps patients stay on their recovery plans.',
    meta: 'Branding, UX/UI · 2 months',
    mediaSrc: '/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png',
    mediaType: 'image',
    link: '/product-designs/adhere-plus',
  },
];

const trustLogos = ['Shopmonkey', 'Raborn Media', 'Grammy Museum Mississippi', 'Adhere+'];

const Index = () => {
  return (
    <div className="pt-16">
      <main className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-editorial-muted mb-6">
                Product Designer
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-editorial-fg mb-6">
                Design that drives clarity, speed, and{' '}
                <span className="text-editorial-gold">real impact.</span>
              </h1>
              <p className="text-lg md:text-xl text-editorial-muted leading-relaxed max-w-xl mb-8">
                I partner with ambitious teams to turn complex product problems into clear, useful, and scalable digital experiences.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link to="/work">
                  <Button className="bg-editorial-fg text-editorial-bg hover:bg-editorial-fg/90 rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2">
                    View my work
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <a href="/resume">
                  <Button variant="outline" className="border-editorial-line text-editorial-fg hover:bg-editorial-soft rounded-full px-6 py-3 text-sm font-medium">
                    Download resume
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-5">
                <a 
                  href="https://www.linkedin.com/in/dortiz-wills" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-editorial-line flex items-center justify-center text-editorial-muted hover:text-editorial-fg hover:bg-editorial-soft transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:dortizwills@gmail.com" 
                  className="w-10 h-10 rounded-full border border-editorial-line flex items-center justify-center text-editorial-muted hover:text-editorial-fg hover:bg-editorial-soft transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-editorial-soft">
                <video
                  src="/lovable-uploads/01-express-lane/Express-Lane-Admin.mp4"
                  poster="/lovable-uploads/01-express-lane/dashboard-3.png"
                  aria-label="Express Lane product design walkthrough"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Row */}
        <section className="py-10 border-t border-editorial-line">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-editorial-muted mb-6">
            Trusted by early-stage teams
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustLogos.map((logo) => (
              <span key={logo} className="text-editorial-fg font-medium text-lg">
                {logo}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-16 md:py-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-editorial-fg">Featured work</h2>
            <Link to="/work" className="hidden sm:flex items-center gap-2 text-sm font-medium text-editorial-muted hover:text-editorial-fg transition-colors">
              See all work
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id}
                to={project.link}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl bg-editorial-soft aspect-[4/3] mb-6">
                  {project.secondaryMediaSrc ? (
                    <div className="grid h-full grid-cols-2 gap-3 p-3 md:gap-4 md:p-4">
                      {[
                        { src: project.mediaSrc, poster: project.posterSrc },
                        { src: project.secondaryMediaSrc, poster: project.secondaryPosterSrc },
                      ].map((media, mediaIndex) => (
                        <video
                          key={media.src}
                          src={media.src}
                          poster={media.poster}
                          aria-label={`${project.title}, app concept ${mediaIndex + 1}`}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="h-full w-full min-w-0 object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      ))}
                    </div>
                  ) : project.mediaType === 'video' ? (
                    <video
                      src={project.mediaSrc}
                      poster={project.posterSrc}
                      aria-label={project.title}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img 
                      src={project.mediaSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((cat) => (
                    <span key={cat} className="text-xs font-semibold tracking-wider uppercase text-editorial-muted">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-2xl font-medium text-editorial-fg mb-2 group-hover:text-editorial-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-editorial-muted mb-3">{project.company}</p>
                <p className="text-editorial-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-editorial-muted">{project.meta}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-editorial-muted hover:text-editorial-fg transition-colors">
              See all work
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Bottom Cards */}
        <section className="py-16 md:py-24 border-t border-editorial-line">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-editorial-card rounded-2xl p-8 md:p-10 border border-editorial-line">
              <h2 className="font-heading text-2xl md:text-3xl font-medium text-editorial-fg mb-4">About Daniel</h2>
              <p className="text-editorial-muted leading-relaxed mb-6">
                A product designer who simplifies complex digital products: research, systems, and interface work for B2B platforms, healthcare, and consumer apps.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sm font-medium text-editorial-fg hover:text-editorial-accent transition-colors"
              >
                Read more
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="bg-editorial-fg rounded-2xl p-8 md:p-10 text-editorial-bg">
              <h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">Let's talk</h2>
              <p className="text-editorial-bg/70 leading-relaxed mb-6">
                Open to product design roles and partnerships with early- and mid-stage startups.
              </p>
              <Link to="/contact">
                <Button className="bg-editorial-bg text-editorial-fg hover:bg-editorial-bg/90 rounded-full px-5 py-2 text-sm font-medium">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Index;

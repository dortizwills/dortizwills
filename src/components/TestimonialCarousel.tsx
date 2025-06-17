
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

interface TestimonialCarouselProps {
  testimonials?: TestimonialProps[];
}

const defaultTestimonials = [
  {
    quote: "Daniel's presence enhances both the creative output and the culture of the workplace. He has contributed to a wide variety of design teams, gaining a rare breadth of experience and perspectives that make him stand out in the creative field. His versatile skill set reflects not only his technical ability but also a deep understanding of design across disciplines.",
    author: "Kyle Marks",
    title: "Creative Director, Shopmonkey"
  },
  {
    quote: "I was consistently impressed by Danny's creativity and technical abilities. His designs were always innovative and well-executed, and he had a great eye for detail... creating graphics for marketing materials, or developing new ideas, Danny consistently produced high-quality work that exceeded expectations.",
    author: "Steven Chic",
    title: "VP, Alvys"
  },
  {
    quote: "Daniel has shown a growing curiosity about how design and development intersect, which positions him well for creating designs that are both thoughtful and practical. His eagerness to expand his skill set will no doubt continue to serve him and his future teams well.",
    author: "Kelsey McAuley",
    title: "Director of Web, Raborn Media"
  },
  {
    quote: "One highlight from our time together was a safety-focused web concept he helped design — his ideas showed real empathy and a strong understanding of user needs in high-stakes contexts. It was a great example of how he combines creative thinking with purpose-driven design.",
    author: "Samantha Lane",
    title: "Head of UX Design, Raborn Media"
  },
  {
    quote: "Danny adapted well to our remote work environment, communicated proactively, and delivered quality results. His ability to manage responsibilities independently while still being a collaborative team player was truly commendable.",
    author: "Matt Stratton",
    title: "COO, Raborn Media"
  }
];

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials = defaultTestimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <blockquote className="text-base md:text-lg mb-6 italic text-white">
            "{testimonials[activeIndex].quote}"
          </blockquote>
          <div className="inline-flex flex-col items-center">
            <div className="font-medium text-lg text-white">{testimonials[activeIndex].author}</div>
            <div className="text-gray-300">{testimonials[activeIndex].title}</div>
          </div>
        </div>
        
        <div className="flex justify-center items-center space-x-2 mb-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
            className="border-white/20 bg-white text-black hover:bg-white/90 hover:text-black"
          >
            <ArrowLeft size={16} />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="border-white/20 bg-white text-black hover:bg-white/90 hover:text-black"
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

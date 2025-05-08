
import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
  avatarUrl?: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Daniel's design work completely transformed our product. The user experience is now seamless and our customer satisfaction has gone up by 40%.",
      name: "Sarah Johnson",
      title: "Product Manager, TechCorp",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    },
    {
      quote: "Working with Daniel was a game-changer for our startup. His ability to translate complex ideas into intuitive interfaces helped us secure our Series A funding.",
      name: "Michael Chen",
      title: "Founder, StartupX",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    },
    {
      quote: "The UX research Daniel conducted gave us insights we never would have discovered ourselves. His methodology is thorough and his recommendations were spot-on.",
      name: "Priya Sharma",
      title: "UX Director, DesignFirm",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    },
    {
      quote: "We hired Daniel to redesign our e-commerce platform and saw conversion rates increase by 28% within the first month after launch.",
      name: "James Wilson",
      title: "CMO, RetailBrand",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    },
    {
      quote: "Daniel's attention to detail and user-centered approach made all the difference in our product redesign. Highly recommended for any UX project.",
      name: "Elena Rodriguez",
      title: "VP of Product, SoftwareCo",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="py-8">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mx-2 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-designer-gray rounded-full mr-3 overflow-hidden">
                    {testimonial.avatarUrl && (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={`${testimonial.name}'s avatar`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-0" />
          <CarouselNext className="absolute right-0" />
        </div>
      </Carousel>
      
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </div>
  );
};

export default TestimonialCarousel;

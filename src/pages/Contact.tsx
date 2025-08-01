
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: (formData.get('subject') as string) || 'Reaching Out',
      message: formData.get('message') as string
    };

    console.log('Contact form submission started with data:', contactData);

    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: contactData
      });

      console.log('Supabase function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Contact form submitted successfully');
      form.reset(); // Clear the form immediately after successful submission
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Show appropriate success message based on response
      if (data?.warning) {
        toast.success(data.message || 'Message sent successfully!', {
          description: data.warning
        });
      } else {
        toast.success(data?.message || 'Message sent successfully! I\'ll get back to you within 24 hours.');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show more specific error messages
      let errorMessage = 'Failed to send message. Please try again.';
      if (error?.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      setIsSubmitting(false); // Only reset submitting state on error, keep form data
    }
  };

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">Contact me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Got an idea you'd like to bring to life or a growing team that's ready for one more? <br></br>
              You can count on me to bring excitement, resilience, a spirit of collaboration, and logical thinking to the conversation to achieve your goals. <br></br>
              Let's connect!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-designer-red mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600">dortizwills@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-designer-red mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">4083343882</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-designer-red mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-600">Rhonert Park, CA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-designer-red mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday to Friday, 9:00 AM - 5:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white border border-black p-8 rounded-lg">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-display font-semibold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                        placeholder="Email Address"
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
                      placeholder="Subject (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-medium mb-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-designer-red" 
                      placeholder="Your Message"
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
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-display font-semibold mb-6">Message Sent!</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">Thank you for reaching out!</p>
                  <p className="text-gray-600">
                    You can expect a message from me in the next 24 hours. I'm happy to explore 
                    the vision you have for your next project.
                  </p>
                  <p className="text-gray-600 font-medium">Talk soon!</p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-primary text-white border-none hover:opacity-90 mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

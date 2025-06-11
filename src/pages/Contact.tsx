
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
          
          {/* Contact Form with FormSubmit */}
          <div className="bg-white border border-black p-8 rounded-lg">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-display font-semibold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_next" value={window.location.href} />
                  <input type="hidden" name="_captcha" value="false" />
                  
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
                <h2 className="text-2xl font-display font-semibold mb-6">Message Sent</h2>
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

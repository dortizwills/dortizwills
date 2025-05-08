
import React from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-12">Contact me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions. Feel free to reach out!
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
                  <p className="text-gray-600">Petaluma, CA</p>
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
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-display font-semibold mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-designer-red" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-designer-red" 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-designer-red text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

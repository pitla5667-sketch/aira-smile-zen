import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield, Award, Users, Star, Circle, Heart, Sparkles } from 'lucide-react';
import heroImage from '@/assets/dental-hero.jpg';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    { name: 'Teeth Cleaning', icon: Sparkles, description: 'Professional dental hygiene' },
    { name: 'Fillings', icon: Circle, description: 'Cavity restoration treatment' },
    { name: 'Root Canal', icon: Heart, description: 'Advanced endodontic care' },
    { name: 'Crowns & Bridges', icon: Award, description: 'Prosthetic dental solutions' },
    { name: 'Braces & Aligners', icon: Star, description: 'Orthodontic treatments' },
    { name: 'Dental Implants', icon: Shield, description: 'Permanent tooth replacement' },
    { name: 'Extractions', icon: Circle, description: 'Safe tooth removal' },
    { name: 'Wisdom Tooth Care', icon: Heart, description: 'Specialized wisdom tooth services' },
    { name: 'Dentures', icon: Award, description: 'Complete and partial dentures' },
    { name: 'Pediatric Dentistry', icon: Users, description: 'Child-friendly dental care' },
    { name: 'Gum Treatment', icon: Sparkles, description: 'Periodontal therapy' },
    { name: 'Smile Makeover', icon: Star, description: 'Cosmetic dentistry solutions' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const preferredTime = (form.elements.namedItem('preferredTime') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    const whatsappMessage = `Hello Aira Dental Care! 

I would like to book an appointment:
Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Time: ${preferredTime}
Message: ${message || 'No additional message'}

Thank you!`;
    
    const whatsappUrl = `https://wa.me/917995598212?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callNow = () => {
    window.location.href = 'tel:+917995598212';
  };

  const whatsappDirect = () => {
    const message = 'Hi! I would like to book an appointment at Aira Dental Care.';
    const whatsappUrl = `https://wa.me/917995598212?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Aira Dental Care",
            "image": "https://airadental.com/logo.jpg",
            "telephone": "+91-7995598212",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Trinethra Diagnostic Centre Building, 1st Floor, Near Bus Stand",
              "addressLocality": "Downal Bukthapur",
              "addressRegion": "Adilabad, Telangana",
              "postalCode": "504001",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Su 09:30-21:00",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Aira Dental Care
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-medium">
              Trusted Smiles for Your Family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={callNow} className="btn-call">
                <Phone size={20} />
                Call Now
              </button>
              <button onClick={whatsappDirect} className="btn-whatsapp">
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Dental Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care with modern techniques and compassionate service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-card group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">{service.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">Why Choose Aira Dental Care?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Strict Hygiene Standards</h3>
              <p className="text-muted-foreground">We maintain the highest levels of sterilization and cleanliness for your safety</p>
            </div>
            
            <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Modern Equipment</h3>
              <p className="text-muted-foreground">State-of-the-art dental technology for precise and comfortable treatments</p>
            </div>
            
            <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Same-Day Slots</h3>
              <p className="text-muted-foreground">Convenient scheduling with same-day appointment availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Timings Section */}
      <section id="location" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Visit Our Clinic</h2>
            <p className="text-lg text-muted-foreground">Conveniently located in the heart of Adilabad</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trinethra Diagnostic Centre Building,<br />
                    1st Floor, Near Bus Stand,<br />
                    Downal Bukthapur, Adilabad,<br />
                    Telangana 504001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Timing</h3>
                  <p className="text-muted-foreground">
                    Open: 9:30 AM – 9:00 PM<br />
                    All Days of the Week
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-2 h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.123!2d78.5372!3d19.6727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQwJzIxLjciTiA3OMKwMzInMTQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aira Dental Care Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Book Your Appointment</h2>
            <p className="text-lg text-muted-foreground">Send us your details and we'll get back to you quickly</p>
          </div>
          
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                    Service Required
                  </label>
                  <select id="service" name="service" className="form-select">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>{service.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-card-foreground mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="preferredTime"
                    name="preferredTime"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Any additional information or special requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-whatsapp justify-center text-lg py-4"
              >
                <MessageCircle size={24} />
                Send via WhatsApp
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">Or contact us directly</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={callNow} className="btn-call">
                  <Phone size={20} />
                  +91 7995598212
                </button>
                <button onClick={whatsappDirect} className="btn-whatsapp">
                  <MessageCircle size={20} />
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-card-foreground mb-2">Aira Dental Care</h3>
          <p className="text-muted-foreground mb-4">Trusted Smiles for Your Family</p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>Open: 9:30 AM – 9:00 PM</span>
            <span>•</span>
            <span>Phone: +91 7995598212</span>
            <span>•</span>
            <span>Adilabad, Telangana</span>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2024 Aira Dental Care. All rights reserved. | Professional dental services in Adilabad
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
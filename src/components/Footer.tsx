import { Brain, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import indiaPostLogo from "@/assets/india-post-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background" id="contact">
      {/* Tricolor stripe */}
      <div className="h-1.5 tricolor-stripe" />
      
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-background rounded-lg p-2">
                <img 
                  src={indiaPostLogo} 
                  alt="India Post Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl block text-background">INDIA POST</span>
                <span className="text-xs text-background/70">डाक विभाग</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Government of India - Department of Posts. 
              Serving the nation with AI-powered smart logistics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Track Parcel</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Calculate Postage</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Find Post Office</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Services</a></li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2 text-background">
              <Brain className="w-4 h-4" />
              AI Features
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Predictive Delay Analysis</li>
              <li>Real-time Tracking</li>
              <li>Proactive Notifications</li>
              <li>Weather & Traffic Integration</li>
              <li>Smart Route Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-background">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Dak Bhawan, Sansad Marg, New Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@indiapost.gov.in" className="hover:text-background transition-colors">
                  support@indiapost.gov.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:1800-11-2011" className="hover:text-background transition-colors">
                  1800-11-2011 (Toll Free)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50 text-center md:text-left">
              © 2024 Department of Posts, Ministry of Communications, Government of India. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-background/50">
              <a href="#" className="hover:text-background transition-colors flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                indiapost.gov.in
              </a>
              <span>|</span>
              <span>AI Predictive Delivery System - Hackathon Demo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

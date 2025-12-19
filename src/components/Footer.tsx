import { Brain, Mail, Phone } from "lucide-react";
import indiaPostLogo from "@/assets/india-post-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={indiaPostLogo} 
                alt="India Post Logo" 
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <span className="font-bold text-lg block">IPS</span>
                <span className="text-xs text-background/70">Indian Postal Service</span>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              AI-powered parcel tracking with predictive delivery intelligence. 
              Serving India with smart logistics solutions.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Features
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Predictive Delay Analysis</li>
              <li>Real-time Tracking</li>
              <li>Proactive Notifications</li>
              <li>Weather & Traffic Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@indiapost.gov.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1800-11-2011
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© 2024 IPS - Indian Postal Service | AI Predictive Delivery System. Hackathon Demo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

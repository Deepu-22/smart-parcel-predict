import { Package, Brain, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">SmartParcel</span>
            </div>
            <p className="text-background/70 text-sm">
              AI-powered parcel tracking with predictive delivery intelligence. 
              Know before delays happen.
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
                support@smartparcel.ai
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1-800-PARCEL
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© 2024 SmartParcel - AI Predictive Delivery System. Hackathon Demo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

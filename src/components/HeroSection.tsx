import { Brain, Bell, TrendingUp, Shield, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onTrackClick: () => void;
}

const HeroSection = ({ onTrackClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background with government pattern */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gov-pattern" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 border-4 border-primary-foreground/10 rounded-full" />
      <div className="absolute top-20 right-20 w-48 h-48 border-4 border-primary-foreground/10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-primary-foreground/10 rounded-full" />
      
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-primary-foreground">
            {/* Government badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-in backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Government of India Initiative</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
              AI-Powered
              <span className="block text-gold mt-2">Smart Parcel Tracking</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up max-w-lg" style={{ animationDelay: "0.2s" }}>
              Predictive delivery intelligence with proactive delay alerts. 
              Track your parcels with India Post's advanced AI technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onTrackClick}
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-xl"
              >
                <Truck className="w-5 h-5 group-hover:animate-bounce-subtle" />
                Track Your Parcel
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
              >
                <Brain className="w-5 h-5" />
                Learn About AI
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <StatItem value="155K+" label="Post Offices" />
              <StatItem value="5B+" label="Parcels Yearly" />
              <StatItem value="99.2%" label="AI Accuracy" />
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Predictive Analytics"
              description="AI analyzes traffic patterns, weather conditions & hub congestion data in real-time"
              color="bg-primary-foreground"
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="Proactive Alerts"
              description="Receive notifications before delays occur, not after"
              color="bg-primary-foreground"
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Smart Insights"
              description="Understand why delays happen with AI-powered explanations"
              color="bg-primary-foreground"
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="Real-time Tracking"
              description="Track your parcel across 155,000+ post offices nationwide"
              color="bg-primary-foreground"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45.8C96 41.7 192 33.3 288 33.3C384 33.3 480 41.7 576 50C672 58.3 768 66.7 864 66.7C960 66.7 1056 58.3 1152 50C1248 41.7 1344 33.3 1392 29.2L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-2xl md:text-3xl font-black text-primary-foreground">{value}</p>
    <p className="text-xs md:text-sm text-primary-foreground/70">{label}</p>
  </div>
);

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  color
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: string;
}) => (
  <div className={`flex items-start gap-4 p-5 rounded-xl ${color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default HeroSection;

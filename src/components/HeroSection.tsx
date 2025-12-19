import { Package, Brain, Bell, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onTrackClick: () => void;
}

const HeroSection = ({ onTrackClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-in">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">AI-Powered Delivery Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Smart Parcel Tracking &{" "}
            <span className="text-gradient">Predictive Delivery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            AI-powered parcel tracking with delay prediction and proactive alerts. 
            Know before delays happen, stay informed every step of the way.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onTrackClick}
              className="group"
            >
              <Package className="w-5 h-5 group-hover:animate-bounce-subtle" />
              Track Your Parcel
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Predictive Analytics"
              description="AI analyzes traffic, weather & hub data"
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6" />}
              title="Proactive Alerts"
              description="Get notified before delays occur"
            />
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Smart Insights"
              description="Understand why delays happen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground text-center">{description}</p>
  </div>
);

export default HeroSection;

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import TrackingSection from "@/components/TrackingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const trackingSectionRef = useRef<HTMLElement>(null);

  const scrollToTracking = () => {
    trackingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onTrackClick={scrollToTracking} />
      <TrackingSection ref={trackingSectionRef} />
      <Footer />
    </main>
  );
};

export default Index;

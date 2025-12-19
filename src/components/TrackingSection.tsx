import { forwardRef, useState } from "react";
import { Package, SearchX } from "lucide-react";
import TrackingInput from "./TrackingInput";
import ParcelStatusCard from "./ParcelStatusCard";
import { getParcelByTrackingId, type ParcelData } from "@/data/mockParcels";

const TrackingSection = forwardRef<HTMLElement>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [parcelData, setParcelData] = useState<ParcelData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (trackingId: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = getParcelByTrackingId(trackingId);

    if (result) {
      setParcelData(result);
      setError(null);
    } else {
      setParcelData(null);
      setError(`No parcel found with tracking ID: ${trackingId}`);
    }

    setIsLoading(false);
  };

  return (
    <section ref={ref} className="py-20 bg-muted/30" id="tracking">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-4">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Real-time Tracking</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Track Your Parcel
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter your tracking ID to get real-time updates and AI-powered delivery predictions
          </p>
        </div>

        {/* Tracking Input */}
        <TrackingInput onTrack={handleTrack} isLoading={isLoading} />

        {/* Loading State */}
        {isLoading && (
          <div className="mt-12 flex flex-col items-center justify-center gap-4 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center">
              <Package className="w-8 h-8 text-primary-foreground animate-bounce" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">Fetching parcel details...</p>
              <p className="text-sm text-muted-foreground">Running AI analysis on delivery prediction</p>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="mt-12 max-w-md mx-auto animate-fade-in">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border text-center">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
                <SearchX className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Parcel Not Found</h3>
              <p className="text-sm text-muted-foreground mb-4">{error}</p>
              <p className="text-xs text-muted-foreground">
                Try one of the demo IDs: PKG-2024-001, PKG-2024-002, or PKG-2024-003
              </p>
            </div>
          </div>
        )}

        {/* Parcel Status Card */}
        {parcelData && !isLoading && (
          <div className="mt-12">
            <ParcelStatusCard parcel={parcelData} />
          </div>
        )}

        {/* Empty State - Before Search */}
        {!hasSearched && !isLoading && (
          <div className="mt-12 max-w-md mx-auto animate-fade-in">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
              <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mb-4 opacity-50">
                <Package className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Enter a Tracking ID</h3>
              <p className="text-sm text-muted-foreground">
                Your parcel status and AI predictions will appear here
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

TrackingSection.displayName = "TrackingSection";

export default TrackingSection;

import { useState } from "react";
import { Search, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TrackingInputProps {
  onTrack: (trackingId: string) => void;
  isLoading: boolean;
}

const TrackingInput = ({ onTrack, isLoading }: TrackingInputProps) => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      onTrack(trackingId.trim());
    }
  };

  const sampleIds = ["PKG-2024-001", "PKG-2024-002", "PKG-2024-003"];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="bg-card rounded-2xl shadow-xl border-2 border-primary/10 p-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <Input
                type="text"
                placeholder="Enter your tracking ID (e.g., PKG-2024-001)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="pl-12 h-14 text-base border-0 bg-muted/50 focus:bg-muted font-medium"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              disabled={isLoading || !trackingId.trim()}
              className="h-14 px-8 text-base font-bold"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Track Parcel
                </>
              )}
            </Button>
          </div>
        </div>
      </form>

      {/* Sample tracking IDs */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-3 font-medium">Try these demo tracking IDs:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {sampleIds.map((id) => (
            <button
              key={id}
              onClick={() => {
                setTrackingId(id);
                onTrack(id);
              }}
              className="px-4 py-2 text-sm font-mono font-semibold bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg transition-all duration-200 border border-primary/20"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingInput;

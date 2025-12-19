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
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter your tracking ID (e.g., PKG-2024-001)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="pl-12 h-14 text-base"
            />
          </div>
          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading || !trackingId.trim()}
            className="h-14 px-8"
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
      </form>

      {/* Sample tracking IDs */}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground mb-2">Try these demo tracking IDs:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {sampleIds.map((id) => (
            <button
              key={id}
              onClick={() => {
                setTrackingId(id);
                onTrack(id);
              }}
              className="px-3 py-1.5 text-xs font-mono bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg transition-colors duration-200"
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

import { Brain, CloudRain, Car, Building, Zap } from "lucide-react";

interface AIInsightSectionProps {
  delayReason: string;
  delayExplanation: string;
  riskPercentage: number;
}

const AIInsightSection = ({ delayReason, delayExplanation, riskPercentage }: AIInsightSectionProps) => {
  const getReasonIcon = () => {
    const reason = delayReason.toLowerCase();
    if (reason.includes("weather") || reason.includes("fog") || reason.includes("rain")) {
      return <CloudRain className="w-6 h-6" />;
    }
    if (reason.includes("traffic") || reason.includes("congestion")) {
      return <Car className="w-6 h-6" />;
    }
    if (reason.includes("hub") || reason.includes("facility")) {
      return <Building className="w-6 h-6" />;
    }
    return <Zap className="w-6 h-6" />;
  };

  const confidenceLevel = riskPercentage <= 30 ? "High" : riskPercentage <= 60 ? "Medium" : "High";

  return (
    <div className="w-full p-6 rounded-2xl bg-accent/50 border border-border/50 animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0 shadow-lg">
          <Brain className="w-7 h-7 text-primary-foreground" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-lg font-semibold text-foreground">AI Insight</h3>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
              {confidenceLevel} Confidence
            </span>
          </div>

          {/* Reason badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border mb-4">
            <span className="text-primary">{getReasonIcon()}</span>
            <span className="text-sm font-medium text-foreground">{delayReason}</span>
          </div>

          {/* Explanation */}
          <p className="text-muted-foreground leading-relaxed">
            {delayExplanation}
          </p>

          {/* AI Factors */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Analysis factors:</p>
            <div className="flex flex-wrap gap-2">
              {["Historical Data", "Real-time Traffic", "Weather Patterns", "Hub Capacity"].map((factor) => (
                <span
                  key={factor}
                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {factor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightSection;

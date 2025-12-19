import { useEffect, useState } from "react";

interface DelayRiskBarProps {
  riskPercentage: number;
}

const DelayRiskBar = ({ riskPercentage }: DelayRiskBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(riskPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [riskPercentage]);

  const getRiskLevel = () => {
    if (riskPercentage <= 30) return { label: "Low Risk", color: "risk-bar-low", textColor: "text-success" };
    if (riskPercentage <= 60) return { label: "Medium Risk", color: "risk-bar-medium", textColor: "text-warning" };
    return { label: "High Risk", color: "risk-bar-high", textColor: "text-destructive" };
  };

  const { label, color, textColor } = getRiskLevel();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">AI Delay Prediction</span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            riskPercentage <= 30 ? "bg-success/10 text-success" :
            riskPercentage <= 60 ? "bg-warning/10 text-warning" :
            "bg-destructive/10 text-destructive"
          }`}>
            {label}
          </span>
        </div>
        <span className={`text-2xl font-bold ${textColor}`}>
          {riskPercentage}%
        </span>
      </div>

      {/* Progress bar background */}
      <div className="h-4 bg-muted rounded-full overflow-hidden">
        {/* Animated progress bar */}
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${animatedWidth}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
               style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>

      {/* Risk scale markers */}
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>0%</span>
        <span>On Time</span>
        <span>Slight Delay</span>
        <span>Significant Delay</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default DelayRiskBar;

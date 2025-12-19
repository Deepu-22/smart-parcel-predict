import { AlertTriangle, Clock, MapPin } from "lucide-react";

interface ProactiveAlertProps {
  riskPercentage: number;
  delayReason: string;
  predictedDate: string;
  originalDate: string;
}

const ProactiveAlert = ({ riskPercentage, delayReason, predictedDate, originalDate }: ProactiveAlertProps) => {
  if (riskPercentage <= 60) return null;

  const calculateDelayDays = () => {
    const original = new Date(originalDate);
    const predicted = new Date(predictedDate);
    const diffTime = predicted.getTime() - original.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const delayDays = calculateDelayDays();

  return (
    <div className="w-full p-5 rounded-2xl bg-destructive/10 border-2 border-destructive/30 animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-6 h-6 text-destructive animate-bounce-subtle" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-destructive mb-1 flex items-center gap-2">
            <span>Proactive Delay Alert</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground">
              {riskPercentage}% Risk
            </span>
          </h4>
          
          <p className="text-foreground font-medium mb-3">
            Your parcel may be delayed by {delayDays} day{delayDays > 1 ? 's' : ''} due to {delayReason.toLowerCase()}.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Original: {new Date(originalDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5 text-destructive font-medium">
              <Clock className="w-4 h-4" />
              <span>New ETA: {new Date(predictedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProactiveAlert;

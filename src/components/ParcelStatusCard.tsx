import { Package, MapPin, Calendar, ArrowRight, Clock, CheckCircle2, Truck, AlertCircle } from "lucide-react";
import type { ParcelData } from "@/data/mockParcels";
import DelayRiskBar from "./DelayRiskBar";
import AIInsightSection from "./AIInsightSection";
import ProactiveAlert from "./ProactiveAlert";

interface ParcelStatusCardProps {
  parcel: ParcelData;
}

const ParcelStatusCard = ({ parcel }: ParcelStatusCardProps) => {
  const getStatusConfig = () => {
    switch (parcel.status) {
      case 'delivered':
        return { icon: CheckCircle2, color: "text-success", bg: "bg-success/10", borderColor: "border-success", label: "Delivered" };
      case 'out-for-delivery':
        return { icon: Truck, color: "text-primary", bg: "bg-primary/10", borderColor: "border-primary", label: "Out for Delivery" };
      case 'delayed':
        return { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10", borderColor: "border-destructive", label: "Delayed" };
      default:
        return { icon: Package, color: "text-primary", bg: "bg-primary/10", borderColor: "border-primary", label: "In Transit" };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in-up">
      {/* Proactive Alert - shows only for high risk */}
      <ProactiveAlert
        riskPercentage={parcel.delayRisk}
        delayReason={parcel.delayReason}
        predictedDate={parcel.aiPredictedDeliveryDate}
        originalDate={parcel.originalDeliveryDate}
      />

      {/* Main Status Card */}
      <div className="bg-card rounded-2xl border-2 border-border shadow-xl overflow-hidden">
        {/* Header with government stripe */}
        <div className="h-1 tricolor-stripe" />
        <div className="gradient-hero p-6 text-primary-foreground">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm font-medium">Tracking ID</p>
                <p className="text-2xl font-black font-mono tracking-wide">{parcel.trackingId}</p>
              </div>
            </div>
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card ${statusConfig.borderColor} border-2`}>
              <StatusIcon className={`w-5 h-5 ${statusConfig.color}`} />
              <span className={`font-bold ${statusConfig.color}`}>{statusConfig.label}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Route Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-xl bg-muted/50 border border-border">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Origin</span>
              </div>
              <p className="font-bold text-foreground text-lg">{parcel.source}</p>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-20">
              <div className="w-full h-1 bg-primary/20 relative rounded-full">
                <div className="absolute inset-0 bg-primary/60 rounded-full" style={{ width: '60%' }} />
                <ArrowRight className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-8 h-8 text-primary bg-card rounded-full p-1.5 border-2 border-primary" />
              </div>
            </div>

            <div className="flex-1 md:text-right">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1 md:justify-end">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Destination</span>
              </div>
              <p className="font-bold text-foreground text-lg">{parcel.destination}</p>
            </div>
          </div>

          {/* Current Location */}
          <div className="p-5 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Current Location</p>
                <p className="font-bold text-foreground text-lg">{parcel.currentLocation}</p>
              </div>
            </div>
          </div>

          {/* Delivery Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Original Delivery Date</span>
              </div>
              <p className="text-xl font-bold text-foreground">
                {new Date(parcel.originalDeliveryDate).toLocaleDateString('en-IN', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className={`p-5 rounded-xl ${parcel.delayRisk > 30 ? 'bg-warning/10 border-2 border-warning' : 'bg-success/10 border-2 border-success'}`}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">AI Predicted Delivery</span>
              </div>
              <p className={`text-xl font-black ${parcel.delayRisk > 30 ? 'text-warning' : 'text-success'}`}>
                {new Date(parcel.aiPredictedDeliveryDate).toLocaleDateString('en-IN', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* Delay Risk Bar */}
          <DelayRiskBar riskPercentage={parcel.delayRisk} />

          {/* Timeline */}
          <div className="pt-6 border-t-2 border-border">
            <h4 className="font-bold text-foreground mb-5 flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-primary" />
              Tracking Timeline
            </h4>
            <div className="space-y-4">
              {parcel.timeline.map((event, index) => (
                <div key={index} className="flex gap-4 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${index === 0 ? 'bg-primary border-primary animate-pulse' : 'bg-muted border-muted-foreground/30'}`} />
                    {index < parcel.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border min-h-[50px]" />
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 font-medium">
                      <span>{event.date}</span>
                      <span className="text-primary">•</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="font-bold text-foreground">{event.status}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Insight Section */}
      <AIInsightSection
        delayReason={parcel.delayReason}
        delayExplanation={parcel.delayExplanation}
        riskPercentage={parcel.delayRisk}
      />
    </div>
  );
};

export default ParcelStatusCard;

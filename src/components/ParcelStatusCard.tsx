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
        return { icon: CheckCircle2, color: "text-success", bg: "bg-success/10", label: "Delivered" };
      case 'out-for-delivery':
        return { icon: Truck, color: "text-secondary", bg: "bg-secondary/10", label: "Out for Delivery" };
      case 'delayed':
        return { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10", label: "Delayed" };
      default:
        return { icon: Package, color: "text-primary", bg: "bg-primary/10", label: "In Transit" };
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
      <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
        {/* Header */}
        <div className="gradient-hero p-6 text-primary-foreground">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <Package className="w-7 h-7" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm">Tracking ID</p>
                <p className="text-xl font-bold font-mono">{parcel.trackingId}</p>
              </div>
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${statusConfig.bg}`}>
              <StatusIcon className={`w-5 h-5 ${statusConfig.color}`} />
              <span className={`font-semibold ${statusConfig.color}`}>{statusConfig.label}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Route Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl bg-muted/50">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span>Origin</span>
              </div>
              <p className="font-semibold text-foreground">{parcel.source}</p>
            </div>
            
            <div className="hidden md:flex items-center justify-center w-16">
              <div className="w-full h-0.5 bg-border relative">
                <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary bg-muted rounded-full p-1" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Destination</span>
              </div>
              <p className="font-semibold text-foreground">{parcel.destination}</p>
            </div>
          </div>

          {/* Current Location */}
          <div className="p-4 rounded-2xl border-2 border-dashed border-primary/30 bg-accent/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Current Location</p>
                <p className="font-semibold text-foreground">{parcel.currentLocation}</p>
              </div>
            </div>
          </div>

          {/* Delivery Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-muted/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>Original Delivery Date</span>
              </div>
              <p className="text-lg font-semibold text-foreground">
                {new Date(parcel.originalDeliveryDate).toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className={`p-4 rounded-2xl ${parcel.delayRisk > 30 ? 'bg-warning/10 border-2 border-warning/30' : 'bg-success/10 border-2 border-success/30'}`}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                <span>AI Predicted Delivery</span>
              </div>
              <p className={`text-lg font-bold ${parcel.delayRisk > 30 ? 'text-warning' : 'text-success'}`}>
                {new Date(parcel.aiPredictedDeliveryDate).toLocaleDateString('en-US', { 
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
          <div className="pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Tracking Timeline
            </h4>
            <div className="space-y-4">
              {parcel.timeline.map((event, index) => (
                <div key={index} className="flex gap-4 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`} />
                    {index < parcel.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="font-medium text-foreground">{event.status}</p>
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

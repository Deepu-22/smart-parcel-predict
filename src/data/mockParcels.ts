export interface ParcelData {
  trackingId: string;
  source: string;
  destination: string;
  currentLocation: string;
  originalDeliveryDate: string;
  aiPredictedDeliveryDate: string;
  delayRisk: number;
  delayReason: string;
  delayExplanation: string;
  status: 'in-transit' | 'out-for-delivery' | 'delayed' | 'delivered';
  timeline: {
    date: string;
    time: string;
    location: string;
    status: string;
  }[];
}

export const mockParcels: Record<string, ParcelData> = {
  "PKG-2024-001": {
    trackingId: "PKG-2024-001",
    source: "Mumbai, Maharashtra",
    destination: "Delhi, NCR",
    currentLocation: "Jaipur Distribution Hub",
    originalDeliveryDate: "2024-12-20",
    aiPredictedDeliveryDate: "2024-12-21",
    delayRisk: 72,
    delayReason: "Heavy Traffic Congestion",
    delayExplanation: "Our AI has detected unusual traffic patterns on the NH48 highway corridor due to ongoing road construction near Gurgaon. Historical data suggests a 72% likelihood of 1-day delay based on current conditions and vehicle movement patterns.",
    status: 'in-transit',
    timeline: [
      { date: "Dec 17", time: "09:00 AM", location: "Mumbai Sorting Facility", status: "Package picked up" },
      { date: "Dec 17", time: "11:30 PM", location: "Mumbai Airport Hub", status: "In transit to destination" },
      { date: "Dec 18", time: "06:00 AM", location: "Jaipur Distribution Hub", status: "Arrived at hub" },
      { date: "Dec 18", time: "02:00 PM", location: "Jaipur Distribution Hub", status: "Processing for dispatch" },
    ]
  },
  "PKG-2024-002": {
    trackingId: "PKG-2024-002",
    source: "Bangalore, Karnataka",
    destination: "Chennai, Tamil Nadu",
    currentLocation: "Vellore Transit Point",
    originalDeliveryDate: "2024-12-19",
    aiPredictedDeliveryDate: "2024-12-19",
    delayRisk: 15,
    delayReason: "Normal Operations",
    delayExplanation: "Your package is progressing smoothly through our network. Weather conditions are favorable and all transit hubs are operating at optimal capacity. AI analysis indicates on-time delivery with high confidence.",
    status: 'out-for-delivery',
    timeline: [
      { date: "Dec 18", time: "08:00 AM", location: "Bangalore Sorting Center", status: "Package picked up" },
      { date: "Dec 18", time: "02:00 PM", location: "Hosur Transit Hub", status: "In transit" },
      { date: "Dec 18", time: "06:00 PM", location: "Vellore Transit Point", status: "Package scanned" },
      { date: "Dec 19", time: "07:00 AM", location: "Chennai Local Hub", status: "Out for delivery" },
    ]
  },
  "PKG-2024-003": {
    trackingId: "PKG-2024-003",
    source: "Kolkata, West Bengal",
    destination: "Patna, Bihar",
    currentLocation: "Dhanbad Sorting Facility",
    originalDeliveryDate: "2024-12-19",
    aiPredictedDeliveryDate: "2024-12-20",
    delayRisk: 85,
    delayReason: "Severe Weather Alert",
    delayExplanation: "Dense fog conditions have been detected across the Bihar-Jharkhand corridor affecting visibility and road transport. Our weather prediction model, combined with historical delay data, indicates a high probability of 1-day delay. Safety protocols have been activated.",
    status: 'delayed',
    timeline: [
      { date: "Dec 17", time: "10:00 AM", location: "Kolkata Central Hub", status: "Package received" },
      { date: "Dec 17", time: "08:00 PM", location: "Asansol Junction", status: "In transit" },
      { date: "Dec 18", time: "03:00 AM", location: "Dhanbad Sorting Facility", status: "Weather delay - holding" },
    ]
  }
};

export const getParcelByTrackingId = (trackingId: string): ParcelData | null => {
  const normalizedId = trackingId.toUpperCase().trim();
  return mockParcels[normalizedId] || null;
};

export const getRandomDelayVariation = (): number => {
  return Math.floor(Math.random() * 10) - 5; // -5 to +5 variation
};

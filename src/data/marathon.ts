export interface MarathonPrize {
  rank: number;
  label: string;
  badge: string;
  amountNPR: string;
  amountNumber: number;
  tier: "gold" | "silver" | "bronze";
  description: string;
  perks: string[];
}

export interface RouteCheckpoint {
  distance: string;
  title: string;
  description: string;
  type: "start" | "water" | "medical" | "checkpoint" | "finish";
  landmark: string;
}

export interface PreparationTip {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface MarathonFAQ {
  question: string;
  answer: string;
}

export const MARATHON_DETAILS = {
  eventName: "Rakesh Marathon",
  tagline: "Run Together. Build a Better Tomorrow.",
  distance: "15 KM",
  distanceFull: "15 Kilometers (Single-Distance Race)",
  category: "Community Marathon",
  location: "Parsa, Nepal",
  currency: "NPR",
  totalPrizePool: "NPR 50,000",
  campaignLeader: "Rakesh Ray",
  
  // Official parameters - marked as To Be Announced where pending
  schedule: {
    eventDate: "Date To Be Announced (Coming Soon)",
    assemblyTime: "6:00 AM NPT (Tentative)",
    flagOffTime: "6:30 AM NPT (Tentative)",
    reportingVenue: "Parsa, Nepal (Official Landmark TBA)",
    finishVenue: "Parsa, Nepal (Official Landmark TBA)",
    registrationPeriod: "Open Now — Closing Date TBA",
    eligibility: "Open to running enthusiasts aged 16 and above. No prior marathon certification required.",
  },

  prizesHeading: "RUN FOR GLORY. RACE FOR THE PRIZE.",
  prizesSubheading: "Cash prizes for the top three, medals for the top ten, and a certificate for every participant.",
};

export const MARATHON_PRIZES: MarathonPrize[] = [
  {
    rank: 1,
    label: "Champion",
    badge: "1st Place",
    amountNPR: "NPR 25,000",
    amountNumber: 25000,
    tier: "gold",
    description: "First place in the 15 KM Rakesh Marathon.",
    perks: [
      "Cash prize: NPR 25,000",
      "Medal for a top-ten finisher",
      "Certificate for every participant",
    ],
  },
  {
    rank: 2,
    label: "Runner-Up",
    badge: "2nd Place",
    amountNPR: "NPR 15,000",
    amountNumber: 15000,
    tier: "silver",
    description: "Second place in the 15 KM Rakesh Marathon.",
    perks: [
      "Cash prize: NPR 15,000",
      "Medal for a top-ten finisher",
      "Certificate for every participant",
    ],
  },
  {
    rank: 3,
    label: "Third Place",
    badge: "3rd Place",
    amountNPR: "NPR 10,000",
    amountNumber: 10000,
    tier: "bronze",
    description: "Third place in the 15 KM Rakesh Marathon.",
    perks: [
      "Cash prize: NPR 10,000",
      "Medal for a top-ten finisher",
      "Certificate for every participant",
    ],
  },
];

export const ROUTE_CHECKPOINTS: RouteCheckpoint[] = [
  {
    distance: "0.0 KM",
    title: "Starting Line & Staging Hub",
    landmark: "Parsa Staging Area (Official Location TBA)",
    description: "Warm-up zones, timing chip sync, bag drop facilities, and official race flag-off.",
    type: "start",
  },
  {
    distance: "3.5 KM",
    title: "First Hydration Point & Timing Mat",
    landmark: "Parsa Route (Landmark TBA)",
    description: "Mineral water, energy electrolytes, sponge stations, and live timing tracking split.",
    type: "water",
  },
  {
    distance: "7.5 KM",
    title: "Midway Checkpoint & Medical Hub",
    landmark: "Parsa Mid-Course (Landmark TBA)",
    description: "Full paramedic assistance, physio spray stations, timing check mat, and hydration replenishment.",
    type: "medical",
  },
  {
    distance: "11.5 KM",
    title: "Crucial Climb & Fueling Station",
    landmark: "Parsa Route (Landmark TBA)",
    description: "Energy gels, hydration replenishment, cheering volunteers, and pacing support.",
    type: "water",
  },
  {
    distance: "15.0 KM",
    title: "Official Finish Line & Winners' Podium",
    landmark: "Parsa Finish Area (Official Location TBA)",
    description: "Participant certificates, top-ten medals, and official podium ceremony.",
    type: "finish",
  },
];

export const PREPARATION_GUIDELINES: PreparationTip[] = [
  {
    category: "15 KM Training",
    title: "Progressive Mileage & Pacing",
    description: "Build endurance gradually with weekend long runs reaching 12-14 KM. Focus on keeping a steady, sustainable pace rather than sprinting early.",
    iconName: "Activity",
  },
  {
    category: "Hydration & Fueling",
    title: "Strategic Fluid Intake",
    description: "Hydrate well in the 48 hours leading up to race day. Drink small sips of water or electrolyte solution at every station rather than gulping.",
    iconName: "Capsule",
  },
  {
    category: "Footwear & Gear",
    title: "Proper Running Shoes",
    description: "Run in tested, comfortable shoes with at least 50 KM of prior wear. Avoid trying brand-new shoes or cotton socks on race morning to prevent blisters.",
    iconName: "CheckCircle",
  },
  {
    category: "Race-Day Safety",
    title: "Listen to Your Body",
    description: "Follow marshal instructions, look out for fellow runners, and stop at any of our paramedic aid stations if you experience dizziness or sharp pain.",
    iconName: "Shield",
  },
];

export const MARATHON_FAQS: MarathonFAQ[] = [
  {
    question: "Is there any shorter distance category like 3 KM, 5 KM, or 10 KM?",
    answer: "No. The Rakesh Marathon is exclusively a 15 KM race. We are dedicated to providing a unified, high-quality, single-distance challenge for all participating athletes and fitness enthusiasts.",
  },
  {
    question: "What is the total prize pool and how are prizes distributed?",
    answer: "The NPR 50,000 prize pool is distributed as: 1st Place (NPR 25,000), 2nd Place (NPR 15,000), and 3rd Place (NPR 10,000). The top 10 finishers receive medals, and every participant receives a certificate.",
  },
  {
    question: "Is there any registration fee?",
    answer: "Registration is open online free of charge as part of Rakesh Ray's community wellness and youth sports initiative. There are no hidden fees.",
  },
  {
    question: "When will the official race date and route map be confirmed?",
    answer: "The official race date, route, and venue in Parsa will be announced when confirmed.",
  },
  {
    question: "Where and when will race bibs and timing chips be distributed?",
    answer: "Bib collection and registration verification details for Parsa will be announced closer to race day.",
  },
  {
    question: "What medical assistance is available along the 15 KM route?",
    answer: "The planned emergency support includes one ambulance, first-aid kits, and a support bike following the runners to assist in an emergency.",
  },
];

export const COMMUNITY_PILLARS = [
  {
    title: "Healthy Living",
    description: "Inspiring community members of all backgrounds to embrace cardiovascular fitness, endurance sports, and preventive wellness.",
  },
  {
    title: "Youth Participation",
    description: "Providing energetic platforms for young Nepali athletes to showcase their discipline, compete constructively, and build self-confidence.",
  },
  {
    title: "Community Unity",
    description: "Bringing together runners, families, volunteers, and local neighborhoods in a shared spirit of sportsmanship and mutual encouragement.",
  },
  {
    title: "Active Lifestyles",
    description: "Promoting consistent physical activity and outdoor recreation as essential pillars for mental clarity and physical vitality.",
  },
  {
    title: "Positive Civic Engagement",
    description: "Fostering collective pride in our cities, public spaces, and social development through active community collaboration.",
  },
];

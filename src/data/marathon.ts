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

export const MARATHON_REGISTRATION_URL = "#register";

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

  // Official parameters - Event Completed on 15 Nov 2026
  schedule: {
    eventDate: "15th November, 2026",
    status: "Completed",
    assemblyTime: "6:00 AM NPT",
    flagOffTime: "6:30 AM NPT",
    reportingVenue: "Parsa RM, Sarlahi, Nepal",
    finishVenue: "Parsa RM, Sarlahi, Nepal",
    registrationPeriod: "Concluded • Certificates Available Online",
    eligibility: "Completed with energetic youth & community participation.",
  },

  prizesHeading: "RUN FOR GLORY. RACE FOR THE PRIZE.",
  prizesSubheading: "1st: NPR 25,000/- • 2nd: NPR 15,000/- • 3rd: NPR 10,000/- • Medals for Top 10 🏅 • Certificate for Every Participant.",
};

export const MARATHON_PRIZES: MarathonPrize[] = [
  {
    rank: 1,
    label: "Champion",
    badge: "1st Place",
    amountNPR: "NPR 25,000",
    amountNumber: 25000,
    tier: "gold",
    description: "Champion of the 15 KM Rakesh Marathon.",
    perks: [
      "Cash Prize: NPR 25,000/-",
      "Champion Gold Trophy & Gold Medal",
      "Top 10 Finisher Medal 🏅",
      "Official Certificate for Every Participant",
      "Official Winner Kit & T-Shirt",
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
      "Cash Prize: NPR 15,000/- (15k)",
      "Runner-Up Silver Trophy & Silver Medal",
      "Top 10 Finisher Medal 🏅",
      "Official Certificate for Every Participant",
      "Official Runner Kit & T-Shirt",
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
      "Cash Prize: NPR 10,000/- (10k)",
      "Third Place Bronze Trophy & Bronze Medal",
      "Top 10 Finisher Medal 🏅",
      "Official Certificate for Every Participant",
      "Official Runner Kit & T-Shirt",
    ],
  },
];

export const MARATHON_SPECIAL_AWARDS = {
  topTen: {
    title: "Top 10 Finishers",
    badge: "Rank 1 to 10",
    reward: "Official Finisher Medal 🏅",
    description: "Every runner finishing in the Top 10 receives a prestigious medal and official podium recognition.",
    perks: [
      "Official Top 10 Finisher Medal 🏅",
      "Certificate of High Achievement",
      "Recognition on the Official Leaderboard",
    ],
  },
  allParticipants: {
    title: "Every Participant",
    badge: "All Runners",
    reward: "Certificate of Participation",
    description: "Every single registered runner who participates receives an official Certificate of Participation / Finisher Certificate.",
    perks: [
      "Official Certificate for Every Participant",
      "Rakesh Marathon Event T-Shirt Kit",
      "Digital Runner Pass Card & Refreshments",
    ],
  },
};

export const MARATHON_SAFETY_FLEET = [
  {
    id: "ambulance",
    title: "1 Dedicated Emergency Ambulance",
    subtitle: "Required mobile medical unit on active standby",
    description: "A fully equipped emergency ambulance with oxygen and vital life support stationed along the route to respond immediately to any medical emergency.",
    badge: "Required for Emergency",
  },
  {
    id: "first-aid",
    title: "First Aid Kits & Paramedic Hubs",
    subtitle: "Available at start, finish & midway checkpoints",
    description: "Complete first aid kits, emergency physio sprays, electrolyte hydration, and trained medical volunteers ready at every station.",
    badge: "Medical Assistance",
  },
  {
    id: "bike-escort",
    title: "Emergency Support Bike Behind Runners",
    subtitle: "Trailing escort for instant on-course rescue",
    description: "A designated emergency motorcycle/bike rides right behind the runners throughout the 15 KM course to provide immediate help to anyone in distress.",
    badge: "Mobile Rescue Support",
  },
];

export const ROUTE_CHECKPOINTS: RouteCheckpoint[] = [
  {
    distance: "0.0 KM",
    title: "Starting Line & Staging Hub",
    landmark: "Parsa Staging Area (Official Location TBA)",
    description: "Warm-up zones, timing check, bag drop facilities, ambulance standby, and official race flag-off.",
    type: "start",
  },
  {
    distance: "3.5 KM",
    title: "First Hydration Point & Timing Mat",
    landmark: "Parsa Route (Landmark TBA)",
    description: "Mineral water, energy electrolytes, sponge stations, and support bike escort passing.",
    type: "water",
  },
  {
    distance: "7.5 KM",
    title: "Midway Checkpoint & Medical Aid Hub",
    landmark: "Parsa Mid-Course (Landmark TBA)",
    description: "First aid kit station, paramedic assistance, physio spray, ambulance link, and hydration replenishment.",
    type: "medical",
  },
  {
    distance: "11.5 KM",
    title: "Crucial Stage & Fueling Station",
    landmark: "Parsa Route (Landmark TBA)",
    description: "Energy replenishment, water, cheering volunteers, and pacing monitoring.",
    type: "water",
  },
  {
    distance: "15.0 KM",
    title: "Official Finish Line & Winners' Podium",
    landmark: "Parsa Finish Area (Official Location TBA)",
    description: "Prize distribution (1st: 25k, 2nd: 15k, 3rd: 10k), Top 10 medals 🏅, and certificates for every participant.",
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
    category: "Medical & Safety Support",
    title: "On-Route Safety Assured",
    description: "A dedicated ambulance, first-aid kits, and an emergency support bike following behind all runners are active throughout the race for your complete safety.",
    iconName: "Shield",
  },
  {
    category: "Footwear & Gear",
    title: "Proper Running Shoes & Kit",
    description: "Wear comfortable, tested running shoes. Collect your official event T-shirt and BIB pass at the reporting counter on race morning.",
    iconName: "CheckCircle",
  },
];

export const MARATHON_FAQS: MarathonFAQ[] = [
  {
    question: "What is the prize distribution for the 15 KM race?",
    answer: "The total prize pool is NPR 50,000 awarded as: 1st Place (NPR 25,000/-), 2nd Place (NPR 15,000/-), and 3rd Place (NPR 10,000/-). Additionally, the Top 10 finishers receive an official Medal 🏅, and Every Participant receives an official Certificate of Participation.",
  },
  {
    question: "Does every participant get a certificate?",
    answer: "Yes! Every single registered runner who takes part in the 15 KM Rakesh Marathon receives an official Certificate of Participation (Finisher Certificate) acknowledging their achievement.",
  },
  {
    question: "Who receives medals in the marathon?",
    answer: "All Top 10 finishers (Rank 1 through 10) receive prestigious official Rakesh Marathon Medals 🏅 during the podium ceremony.",
  },
  {
    question: "What emergency and medical safety measures are in place?",
    answer: "Runner safety is our highest priority. The event is supported by: 1) A dedicated Ambulance required on active standby for any emergency, 2) Complete First Aid Kits and paramedic aid hubs, and 3) An emergency support motorcycle/bike riding directly behind the runners for immediate on-the-spot assistance.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, registration is 100% free of charge as part of Rakesh Ray's community wellness and youth empowerment initiative. There are no entry fees.",
  },
  {
    question: "Is there any shorter distance category like 3 KM or 5 KM?",
    answer: "No. The Rakesh Marathon is exclusively a 15 KM race. It provides a unified, single-distance athletic challenge for the whole community.",
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

export interface MarathonGalleryItem {
  id: string;
  src: string;
  title: string;
  titleNe: string;
  description: string;
  descriptionNe: string;
  category: "all" | "race" | "ceremony" | "community";
}

export const MARATHON_GALLERY_PHOTOS: MarathonGalleryItem[] = [
  {
    id: "photo-01",
    src: "/images/marathon-complete/marathon-event-01.jpg",
    title: "15 KM Flag-off & Runner Rally",
    titleNe: "१५ किमी दौड प्रारम्भ तथा र्‍याली",
    description: "Athletes, youth, and organizers assembled for the historic Rakesh Marathon 15 KM race in Parsa.",
    descriptionNe: "पर्सामा आयोजित ऐतिहासिक १५ किमी राकेश म्याराथनमा सहभागी धावकहरू।",
    category: "race",
  },
  {
    id: "photo-02",
    src: "/images/marathon-complete/marathon-event-02.jpg",
    title: "Community Spirit & Warm-Up",
    titleNe: "सामुदायिक ऊर्जा तथा वार्म-अप",
    description: "Enthusiastic runners and local supporters gathered at the starting arena in Parsa RM, Sarlahi.",
    descriptionNe: "पर्सा, सर्लाहीमा सुरुवाती विन्दुमा भेला भएका ऊर्जावान धावकहरू।",
    category: "community",
  },
  {
    id: "photo-03",
    src: "/images/marathon-complete/marathon-event-03.jpg",
    title: "Er Rakesh Ray with Participants",
    titleNe: "ई. राकेश राय धावकहरूसँग",
    description: "Chief Patron Er Rakesh Ray cheering on runners, participants, and youth volunteers.",
    descriptionNe: "मुख्य संरक्षक ई. राकेश राय सहभागी धावक तथा युवाहरूलाई हौसला प्रदान गर्दै।",
    category: "community",
  },
  {
    id: "photo-04",
    src: "/images/marathon-complete/marathon-event-04.jpg",
    title: "Drug-Free Parsa Campaign March",
    titleNe: "लागूऔषधमुक्त पर्सा अभियान–२०८३",
    description: "Raising strong community awareness for healthy lifestyles, sportsmanship, and drug-free youth.",
    descriptionNe: "लागूऔषधमुक्त पर्सा अभियान-२०८३ अन्तर्गत स्वस्थ समाज निर्माणको साझा संकल्प।",
    category: "community",
  },
  {
    id: "photo-05",
    src: "/images/marathon-complete/marathon-event-05.jpg",
    title: "Race Route & Volunteer Safety",
    titleNe: "दौड रुट तथा स्वयम्सेवक परिचालन",
    description: "Athletes pacing through the 15 KM course with dedicated hydration and safety checkpoints.",
    descriptionNe: "१५ किमी रुटमा सुरक्षा तथा स्वास्थ्य सहायता साथ अगाडि बढ्दै धावकहरू।",
    category: "race",
  },
  {
    id: "photo-06",
    src: "/images/marathon-complete/marathon-event-06.jpg",
    title: "Finish Line Moments & Celebration",
    titleNe: "समापन विन्दु तथा उत्सव",
    description: "Joy and celebration as runners cross the finish line after completing the endurance challenge.",
    descriptionNe: "कठिन १५ किमी दौड पूरा गरी फिनिश लाइन पार गरेपछिको विजय उत्सव।",
    category: "race",
  },
  {
    id: "photo-07",
    src: "/images/marathon-complete/marathon-event-07.jpg",
    title: "Podium & Medal Ceremony",
    titleNe: "पदक तथा पुरस्कार वितरण समारोह",
    description: "Distributing official medals to the Top 10 finishers and recognizing exceptional athletes.",
    descriptionNe: "शीर्ष १० स्थान हासिल गर्ने धावकहरूलाई पदक तथा पुरस्कार प्रदान।",
    category: "ceremony",
  },
  {
    id: "photo-08",
    src: "/images/marathon-complete/marathon-event-08.jpg",
    title: "NPR 50,000 Cash Prize & Trophies",
    titleNe: "नगद ५०,००० पुरस्कार तथा ट्रफी वितरण",
    description: "Grand cash awards distributed to Champion (25k), Runner-up (15k), and 3rd Place (10k).",
    descriptionNe: "प्रथम (२५,०००), द्वितीय (१५,०००) र तृतीय (१०,०००) विजेताहरूलाई सम्मान।",
    category: "ceremony",
  },
  {
    id: "photo-09",
    src: "/images/marathon-complete/marathon-event-09.jpg",
    title: "Youth Unity & Group Photo",
    titleNe: "युवा शक्ति तथा सामूहिक तस्बिर",
    description: "Organizers, runners, and Parsa youth uniting in mutual celebration of community fitness.",
    descriptionNe: "स्वस्थ नागरिक, सुरक्षित समाज, समृद्ध राष्ट्रको साझा संकल्प।",
    category: "community",
  },
  {
    id: "photo-10",
    src: "/images/marathon-complete/marathon-event-10.jpg",
    title: "Official Certificate Distribution",
    titleNe: "आधिकारिक प्रमाणपत्र वितरण",
    description: "Every participant honored with the official Certificate of Participation by Chief Patron Er Rakesh Ray.",
    descriptionNe: "प्रत्येक सहभागी धावकलाई आधिकारिक प्रमाणपत्र प्रदान गरिँदै।",
    category: "ceremony",
  },
];

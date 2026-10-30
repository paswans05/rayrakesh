export interface RangoliPrize {
  rank: number;
  label: string;
  badge: string;
  amountNPR: string;
  amountNumber: number;
  tier: "gold" | "silver" | "bronze";
  description: string;
  perks: string[];
}

export interface RangoliShowcaseEntry {
  entry_id: string;
  full_name: string;
  address: string;
  title: string;
  description: string;
  image_url: string;
  votes_count: number;
  featured?: boolean;
}

export interface RangoliFAQ {
  question: string;
  answer: string;
}

export const RANGOLI_FESTIVAL_DETAILS = {
  eventName: "Diwali Rangoli Festival 2026",
  eventNameNepali: "दीपोत्सव रङ्गोली प्रतियोगिता २०८३",
  tagline: "Celebrate Creativity, Tradition & Light. The Most Voted Rangolis Win Grand Prizes!",
  taglineNepali: "सृजनशीलता, संस्कृति र प्रकाशको उत्सव। सर्वाधिक भोट पाउने रङ्गोलीले जित्नेछन् भव्य पुरस्कार!",
  campaignLeader: "Rakesh Ray",
  campaignLeaderTitle: "Youth Leader & Social Worker",
  location: "Parsa, Madhesh Province, Nepal",
  currency: "NPR",
  totalPrizePool: "NPR 6,300 + Hampers & Medals",
  
  schedule: {
    status: "Submissions & Voting Open",
    submissionDeadline: "Diwali Night, 8:00 PM NPT",
    votingCloseTime: "Diwali Night, 11:59 PM NPT",
    resultsAnnouncement: "Govardhan Puja / Bhai Tika Celebration",
    eligibility: "Open to all residents, families, students, and artists across Parsa and Nepal. 100% Free Entry.",
  },

  prizesHeading: "CELEBRATE ART. WIN GRAND DIWALI PRIZES.",
  prizesHeadingNepali: "कलाको सम्मान। जित्नुहोस् आकर्षक दीपावली पुरस्कार।",
  prizesSubheading: "1st: NPR 3,100/- • 2nd: NPR 2,100/- • 3rd: NPR 1,100/- • Top 10: Medals & Hampers 🏅 • Certificate for Every Participant 📜",
  prizesSubheadingNepali: "प्रथम: रु. ३,१००/- • दोस्रो: रु. २,१००/- • तेस्रो: रु. १,१००/- • शीर्ष १० लाई पदक र उपहार 🏅 • सबै सहभागीलाई प्रमाणपत्र 📜",
};

export const RANGOLI_PRIZES: RangoliPrize[] = [
  {
    rank: 1,
    label: "Grand Champion",
    badge: "1st Place (Most Voted)",
    amountNPR: "NPR 3,100",
    amountNumber: 3100,
    tier: "gold",
    description: "The Rangoli with the highest verified public votes across the festival.",
    perks: [
      "Cash Award: NPR 3,100/-",
      "Grand Diwali Champion Trophy & Gold Medal 🏅",
      "Special Festive Sweets & Gift Hamper",
      "Certificate of Artistic Excellence",
      "Featured on Rakesh Ray Official Social Channels",
    ],
  },
  {
    rank: 2,
    label: "First Runner-Up",
    badge: "2nd Place",
    amountNPR: "NPR 2,100",
    amountNumber: 2100,
    tier: "silver",
    description: "Second most voted Rangoli in the competition.",
    perks: [
      "Cash Award: NPR 2,100/-",
      "Runner-Up Silver Trophy & Silver Medal 🥈",
      "Festive Gift Hamper",
      "Certificate of High Artistic Merit",
      "Public Recognition Ceremony",
    ],
  },
  {
    rank: 3,
    label: "Second Runner-Up",
    badge: "3rd Place",
    amountNPR: "NPR 1,100",
    amountNumber: 1100,
    tier: "bronze",
    description: "Third most voted Rangoli in the competition.",
    perks: [
      "Cash Award: NPR 1,100/-",
      "Bronze Trophy & Bronze Medal 🥉",
      "Festive Gift Hamper",
      "Certificate of High Artistic Merit",
      "Special Community Recognition",
    ],
  },
];

export const RANGOLI_SPECIAL_AWARDS = {
  topTen: {
    title: "Top 10 Most Voted Rangolis",
    titleNepali: "शीर्ष १० सर्वाधिक भोट पाउने रङ्गोली",
    badge: "Rank 1 to 10",
    reward: "Medal 🏅 + Festive Gift Hamper",
    description: "The top 10 creators receiving the highest votes will receive exclusive Diwali medals, certificates of honor, and celebratory gifts.",
  },
  allParticipants: {
    title: "Every Single Participant",
    titleNepali: "प्रत्येक सहभागी कलाकार",
    badge: "All Entries",
    reward: "Official Certificate of Participation 📜",
    description: "Every creator who submits an authentic Rangoli receives a verifiable digital Certificate of Participation recognizing their festive spirit.",
  },
};

export const INITIAL_RANGOLI_SHOWCASE: RangoliShowcaseEntry[] = [];

export const RANGOLI_RULES = [
  {
    step: "01",
    title: "Handmade & Authentic",
    titleNepali: "हस्तनिर्मित र मौलिक कला",
    description: "Rangolis must be handmade using colors, flower petals, grains, or eco-friendly materials. Printed or digital wallpapers are not eligible.",
    icon: "palette",
  },
  {
    step: "02",
    title: "Clear Photo with Name Slip",
    titleNepali: "नामको पर्चासहितको स्पष्ट तस्बिर",
    description: "When taking a picture of your Rangoli, place a small paper slip beside it displaying your name or 'Diwali 2026' to verify authentic ownership.",
    icon: "camera",
  },
  {
    step: "03",
    title: "Fair Public Voting (1 Vote Per IP)",
    titleNepali: "निष्पक्ष अनलाइन भोटिङ (प्रति व्यक्ति १ भोट)",
    description: "Anyone can browse entries and cast their 1 official vote (strictly 1 vote per person IP-wise) for their favorite artwork to ensure 100% fair, transparent, and authentic results.",
    icon: "vote",
  },
  {
    step: "04",
    title: "Top 3 Win Grand Prizes",
    titleNepali: "शीर्ष ३ लाई आकर्षक नगद तथा पुरस्कार",
    description: "The 3 entries with the highest verified votes at the close of voting win 1st, 2nd, and 3rd place prizes. Top 10 win medals, and every participant gets a certificate!",
    icon: "trophy",
  },
];

export const RANGOLI_FAQS: RangoliFAQ[] = [
  {
    question: "Who can participate in the Rangoli Festival?",
    answer: "This competition is exclusively for female participants (women & girls). It is completely free and open to all female artists, students, homemakers, and art enthusiasts residing in Parsa, Madhesh Province, or across Nepal.",
  },
  {
    question: "How are the winners decided?",
    answer: "Winners are decided transparently based on the highest number of public votes received by the deadline. The entry with the most votes wins 1st prize (NPR 3,100), followed by 2nd prize (NPR 2,100) and 3rd prize (NPR 1,100).",
  },
  {
    question: "Is there any registration or entry fee?",
    answer: "No. Participation is 100% complimentary as part of Rakesh Ray's Diwali community cultural initiatives.",
  },
  {
    question: "How do I cast my vote? Can I vote multiple times?",
    answer: "Browse the live Rangoli gallery and click 'Vote for this' on your favorite artwork. To ensure 100% fair, transparent, and spam-free competition, each voter (verified strictly by IP address) is permitted only ONE single vote across the entire festival. Once cast, your vote is officially locked.",
  },
  {
    question: "What prizes will participants receive?",
    answer: "1st place wins NPR 3,100 + Champion Trophy + Hamper; 2nd place wins NPR 2,100 + Silver Trophy; 3rd place wins NPR 1,100 + Bronze Trophy. The Top 10 will receive special medals and gift hampers, and every single participant receives an official Certificate of Participation.",
  },
  {
    question: "Can I share my Rangoli to get more votes?",
    answer: "Yes, absolutely! Each submitted Rangoli has a direct link and a one-click WhatsApp share button. You can share it with your friends, family, and social networks to gather votes.",
  },
];


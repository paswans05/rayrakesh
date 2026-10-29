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
  totalPrizePool: "NPR 37,100 + Hampers & Medals",
  
  schedule: {
    status: "Submissions & Voting Open",
    submissionDeadline: "Diwali Night, 8:00 PM NPT",
    votingCloseTime: "Diwali Night, 11:59 PM NPT",
    resultsAnnouncement: "Govardhan Puja / Bhai Tika Celebration",
    eligibility: "Open to all residents, families, students, and artists across Parsa and Nepal. 100% Free Entry.",
  },

  prizesHeading: "CELEBRATE ART. WIN GRAND DIWALI PRIZES.",
  prizesHeadingNepali: "कलाको सम्मान। जित्नुहोस् आकर्षक दीपावली पुरस्कार।",
  prizesSubheading: "1st: NPR 21,000/- • 2nd: NPR 11,000/- • 3rd: NPR 5,100/- • Top 10: Medals & Hampers 🏅 • Certificate for Every Participant 📜",
  prizesSubheadingNepali: "प्रथम: रु. २१,०००/- • दोस्रो: रु. ११,०००/- • तेस्रो: रु. ५,१००/- • शीर्ष १० लाई पदक र उपहार 🏅 • सबै सहभागीलाई प्रमाणपत्र 📜",
};

export const RANGOLI_PRIZES: RangoliPrize[] = [
  {
    rank: 1,
    label: "Grand Champion",
    badge: "1st Place (Most Voted)",
    amountNPR: "NPR 21,000",
    amountNumber: 21000,
    tier: "gold",
    description: "The Rangoli with the highest verified public votes across the festival.",
    perks: [
      "Cash Award: NPR 21,000/-",
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
    amountNPR: "NPR 11,000",
    amountNumber: 11000,
    tier: "silver",
    description: "Second most voted Rangoli in the competition.",
    perks: [
      "Cash Award: NPR 11,000/-",
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
    amountNPR: "NPR 5,100",
    amountNumber: 5100,
    tier: "bronze",
    description: "Third most voted Rangoli in the competition.",
    perks: [
      "Cash Award: NPR 5,100/-",
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

export const INITIAL_RANGOLI_SHOWCASE: RangoliShowcaseEntry[] = [
  {
    entry_id: "RF2026-101",
    full_name: "Sunita Kumari Shah",
    address: "Birgunj-12, Parsa",
    title: "Peacock Splendor (मयूर रङ्गोली)",
    description: "An intricate traditional peacock Rangoli designed with vibrant organic powders, petals, and traditional diyas symbolizing prosperity and graceful joy.",
    image_url: "https://images.unsplash.com/photo-1605335193910-b4bc2f8c0506?auto=format&fit=crop&w=800&q=80",
    votes_count: 168,
    featured: true,
  },
  {
    entry_id: "RF2026-102",
    full_name: "Anjali & Team",
    address: "Jingadawa, Parsa",
    title: "Lotus & Diya Mandala (कमल र दीप)",
    description: "Sacred lotus mandala crafted with natural marigold flower petals, gulal, and clay oil lamps inviting Goddess Lakshmi into our community.",
    image_url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80",
    votes_count: 142,
    featured: true,
  },
  {
    entry_id: "RF2026-103",
    full_name: "Pooja Shrestha",
    address: "Ghanta Ghar, Birgunj",
    title: "Shree Ganesha Swastik (गणेश शुभ-लाभ)",
    description: "Centering Lord Ganesha and sacred Swastika auspicious motifs with dual contrast shades of vermilion, turmeric yellow, and rice flour.",
    image_url: "https://images.unsplash.com/photo-1605335193616-b82522778738?auto=format&fit=crop&w=800&q=80",
    votes_count: 119,
    featured: true,
  },
  {
    entry_id: "RF2026-104",
    full_name: "Rita & Suman Mahato",
    address: "Bahudarmai, Parsa",
    title: "Navrang Sanskar (नवरंग संस्कार चक्र)",
    description: "Geometric nine-color circular mandala reflecting unity, peace, and heritage handed down through generations of Madhesh art.",
    image_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=800&q=80",
    votes_count: 97,
  },
  {
    entry_id: "RF2026-105",
    full_name: "Priya Gupta",
    address: "Pokhariya, Parsa",
    title: "Pushpanjali Festive Bloom (पुष्पाञ्जली)",
    description: "Eco-friendly floral Rangoli crafted using fresh marigold, rose petals, and whole grains glowing with handmade earthen lamps.",
    image_url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
    votes_count: 84,
  },
  {
    entry_id: "RF2026-106",
    full_name: "Kavita Chaudhary",
    address: "Alau, Birgunj",
    title: "Aura of Deepawali (दीपोत्सव रश्मि)",
    description: "Traditional threshold Rangoli featuring concentric circular petals illuminated by sixteen ghee diyas spreading warmth and community fellowship.",
    image_url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    votes_count: 73,
  },
];

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
    title: "Fair Public Voting",
    titleNepali: "निष्पक्ष अनलाइन भोटिङ",
    description: "Anyone can browse entries and vote for their favorites! Share your entry's direct link with friends, family, and neighbors. Anti-bot checks prevent spam.",
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
    answer: "Anyone! The competition is completely free and open to individuals, families, students, and art enthusiasts residing in Parsa, Madhesh Province, or across Nepal.",
  },
  {
    question: "How are the winners decided?",
    answer: "Winners are decided transparently based on the highest number of public votes received by the deadline. The entry with the most votes wins 1st prize (NPR 21,000), followed by 2nd prize (NPR 11,000) and 3rd prize (NPR 5,100).",
  },
  {
    question: "Is there any registration or entry fee?",
    answer: "No. Participation is 100% complimentary as part of Rakesh Ray's Diwali community cultural initiatives.",
  },
  {
    question: "How do I cast my vote?",
    answer: "Browse the live Rangoli gallery on this page and click the 'Vote' button on your favorite artwork. You can vote for multiple different designs you love!",
  },
  {
    question: "What prizes will participants receive?",
    answer: "1st place wins NPR 21,000 + Champion Trophy + Hamper; 2nd place wins NPR 11,000 + Silver Trophy; 3rd place wins NPR 5,100 + Bronze Trophy. The Top 10 will receive special medals and gift hampers, and every single participant receives an official Certificate of Participation.",
  },
  {
    question: "Can I share my Rangoli to get more votes?",
    answer: "Yes, absolutely! Each submitted Rangoli has a direct link and a one-click WhatsApp share button. You can share it with your friends, family, and social networks to gather votes.",
  },
];

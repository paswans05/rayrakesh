export type AboutStatItem = {
  id: string;
  value: string;
  label: string;
  sublabel: string;
};

export const ABOUT_STATS_DATA: AboutStatItem[] = [
  {
    id: "stat-1",
    value: "100%",
    label: "Satisfaction",
    sublabel: "Clients",
  },
  {
    id: "stat-2",
    value: "250 +",
    label: "Employees On",
    sublabel: "Worldwide",
  },
  {
    id: "stat-3",
    value: "3469",
    label: "Projects Completed",
    sublabel: "On 60 Countries",
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutProfile {
  name: string;
  role: string;
  education: string;
  goal: string;
  status: string;
  interests: string[];
}

export interface AboutData {
  sectionLabel: string;
  heading: string;
  description: string;
  timeline: TimelineItem[];
  currentFocus: string[];
  profile: AboutProfile;
}
// About page data
import {
  Target,
  Heart,
  Shield,
  TrendingUp,
  Landmark,
  Building2,
  Factory,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

export const ABOUT_VALUES = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our mission. We partner deeply to achieve your business goals.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "We build lasting relationships founded on transparency and ethical practices.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Excellence",
    description:
      "We never settle. Every day we strive to deliver better results and exceed expectations.",
  },
];

export const LEADERSHIP_TEAM = [
  {
    name: "James Anderson",
    role: "Chief Executive Officer",
    bio: "5+ years leading technology transformations at Fortune 500 companies.",
  },
  {
    name: "Maria Rodriguez",
    role: "Chief Technology Officer",
    bio: "Former VP Engineering at leading cloud platforms. PhD in Computer Science.",
  },
  {
    name: "David Kim",
    role: "Chief Operating Officer",
    bio: "Scaled operations from startup to enterprise serving 50+ global clients.",
  },
  {
    name: "Sarah Thompson",
    role: "Chief Strategy Officer",
    bio: "20 years consulting experience with Fortune 100, driving digital strategies.",
  },
];

export const ABOUT_STATS = [
  { icon: "Users", value: "50+", label: "Clients" },
  { icon: "Globe", value: "5+", label: "Countries" },
  { icon: "Award", value: "5+", label: "Years" },
  { icon: "Zap", value: "97%", label: "Satisfaction" },
];

// Navigation data
export const NAVIGATION_ITEMS = [
  { name: "Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Realisation", path: "/realisation" },
  { name: "Insights", path: "/insights" },
  { name: "About", path: "/about" },
];

// Footer data
export const FOOTER_LINKS = {
  solutions: [
    { name: "Cloud Platform", path: "/solutions/cloud-platform" },
    { name: "Data Analytics", path: "/solutions/data-analytics" },
    { name: "Enterprise Software", path: "/solutions/enterprise-software" },
    { name: "View All Solutions", path: "/solutions" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Contact", path: "/contact" },
  ],
  resources: [
    { name: "Blog & Insights", path: "/insights" },
    { name: "Realisation", path: "/realisation" },
    { name: "Documentation", path: "/documentation" },
    { name: "Support", path: "/support" },
  ],
};

// Social media links
export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "#", icon: "Linkedin" },
  { name: "Twitter", url: "#", icon: "Twitter" },
  { name: "Facebook", url: "#", icon: "Facebook" },
  { name: "YouTube", url: "#", icon: "Youtube" },
];

// Company information
export const COMPANY_INFO = {
  name: "SarayaTech",
  tagline:
    "Empowering enterprises with innovative technology solutions for digital transformation.",
  location: "Columbus, Ohio",
  founded: "2020",
};

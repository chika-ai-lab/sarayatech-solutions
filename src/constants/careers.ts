export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const CAREERS_SAMPLE: Career[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Columbus, OH",
    type: "Full-time",
    salary: "$90k - $130k",
    description:
      "Join our engineering team to build scalable enterprise solutions using modern technologies.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "Columbus, OH",
    type: "Full-time",
    salary: "$85k - $115k",
    description:
      "Lead product strategy and development for our enterprise clients.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$95k - $125k",
    description:
      "Design and maintain our cloud infrastructure and deployment pipelines.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "UX/UI Designer",
    department: "Design",
    location: "Columbus, OH",
    type: "Full-time",
    salary: "$70k - $95k",
    description:
      "Create intuitive and beautiful user experiences for our enterprise applications.",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

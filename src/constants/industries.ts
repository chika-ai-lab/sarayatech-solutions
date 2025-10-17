import {
  Landmark,
  Factory,
  Heart,
  ShoppingCart,
  GraduationCap,
  Building2,
  TrendingUp,
  Lock,
  Users,
  Zap,
} from "lucide-react";

export const industries = [
  {
    id: "financial-services",
    icon: Landmark,
    name: "Financial Services",
    description: "Secure, compliant solutions for banking and finance",
    shortDescription: "Banking & Finance Solutions",
    tagline: "Trust in Every Transaction",

    // Détails complets
    detailedDescription: `Our Financial Services platform combines cutting-edge security with regulatory compliance to help banks, credit unions, and fintech companies thrive in a rapidly evolving landscape.`,

    features: [
      {
        icon: Lock,
        title: "Enterprise Security",
        description:
          "Military-grade encryption and multi-layer security protocols to protect sensitive financial data",
      },
      {
        icon: TrendingUp,
        title: "Real-time Analytics",
        description:
          "Advanced analytics dashboards for real-time monitoring of transactions and market trends",
      },
      {
        icon: Users,
        title: "Customer Management",
        description:
          "Comprehensive CRM system designed specifically for financial institutions",
      },
      {
        icon: Zap,
        title: "API Integration",
        description:
          "Seamless integration with legacy systems and third-party financial services",
      },
    ],

    whatWeDo: [
      "Develop HIPAA-compliant banking platforms for secure transaction processing",
      "Implement advanced fraud detection systems using AI and machine learning",
      "Create digital payment solutions and mobile banking applications",
      "Design regulatory compliance frameworks for international finance standards",
      "Build risk management and analytics platforms for investment firms",
    ],

    benefits: [
      "Reduce fraud by up to 92% with intelligent detection systems",
      "Improve customer satisfaction with seamless digital experiences",
      "Ensure 99.99% uptime with enterprise-grade infrastructure",
      "Achieve regulatory compliance across multiple jurisdictions",
      "Scale operations without proportional cost increases",
    ],

    caseStudies: [
      {
        title: "Regional Bank Digital Transformation",
        result: "40% reduction in operational costs",
      },
      {
        title: "FinTech Fraud Prevention",
        result: "92% fraud detection improvement",
      },
    ],

    technologies: [
      "Cloud Infrastructure",
      "Machine Learning",
      "Blockchain",
      "API Gateway",
    ],
  },

  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description: "Digital transformation for modern production",
    shortDescription: "Production & Supply Chain",
    tagline: "Precision in Production",

    detailedDescription: `Transform your manufacturing operations with IoT-enabled platforms that provide real-time visibility into every aspect of your production process, from factory floor to supply chain.`,

    features: [
      {
        icon: Zap,
        title: "IoT Integration",
        description:
          "Connect and monitor thousands of devices on your production floor in real-time",
      },
      {
        icon: TrendingUp,
        title: "Predictive Maintenance",
        description:
          "AI-powered predictive maintenance reduces downtime and extends equipment life",
      },
      {
        icon: Users,
        title: "Supply Chain Visibility",
        description:
          "End-to-end supply chain tracking from raw materials to finished goods",
      },
      {
        icon: Lock,
        title: "Quality Control",
        description:
          "Automated quality assurance systems with defect detection and traceability",
      },
    ],

    whatWeDo: [
      "Implement Industry 4.0 solutions with IoT sensors and edge computing",
      "Develop production planning and scheduling systems",
      "Create supply chain optimization platforms",
      "Build quality management and traceability systems",
      "Design worker safety and compliance monitoring solutions",
    ],

    benefits: [
      "Increase production efficiency by up to 35%",
      "Reduce equipment downtime through predictive maintenance",
      "Improve product quality and reduce defect rates",
      "Optimize inventory and reduce waste by 25%",
      "Enhance worker safety with real-time monitoring",
    ],

    caseStudies: [
      {
        title: "Automotive Supplier Smart Factory",
        result: "35% efficiency improvement",
      },
      {
        title: "Food Manufacturing Quality Control",
        result: "87% defect detection rate",
      },
    ],

    technologies: [
      "IoT Sensors",
      "AI/ML",
      "Cloud Computing",
      "Real-time Analytics",
    ],
  },

  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    description: "HIPAA-compliant platforms for patient care",
    shortDescription: "Patient Care & Health Systems",
    tagline: "Care That Connects",

    detailedDescription: `Empower healthcare providers with secure, HIPAA-compliant platforms that improve patient outcomes, streamline operations, and enable data-driven clinical decisions.`,

    features: [
      {
        icon: Lock,
        title: "HIPAA Compliance",
        description:
          "Full HIPAA compliance with encryption, audit trails, and access controls",
      },
      {
        icon: Users,
        title: "Patient Management",
        description: "Comprehensive EHR and patient record management systems",
      },
      {
        icon: TrendingUp,
        title: "Clinical Analytics",
        description:
          "Advanced analytics for evidence-based decision making and research",
      },
      {
        icon: Zap,
        title: "Telemedicine",
        description:
          "Secure telehealth platforms for remote consultations and monitoring",
      },
    ],

    whatWeDo: [
      "Build secure Electronic Health Record (EHR) systems",
      "Develop patient portal applications for engagement and self-service",
      "Create appointment scheduling and resource management systems",
      "Implement clinical decision support systems with AI",
      "Design prescription management and pharmacy integration solutions",
    ],

    benefits: [
      "Improve patient satisfaction by reducing wait times",
      "Enhance clinical outcomes with data-driven insights",
      "Reduce administrative overhead by 30%",
      "Ensure complete data security and HIPAA compliance",
      "Enable remote care with telemedicine capabilities",
    ],

    caseStudies: [
      {
        title: "Hospital Network Digital Health Platform",
        result: "30% reduction in administrative time",
      },
      {
        title: "Telehealth Expansion for Rural Clinics",
        result: "50% increase in patient access",
      },
    ],

    technologies: [
      "HL7/FHIR Standards",
      "Cloud Healthcare",
      "AI Diagnostics",
      "Mobile Apps",
    ],
  },

  {
    id: "retail-ecommerce",
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Omnichannel commerce solutions",
    shortDescription: "Retail & Commerce",
    tagline: "Commerce Without Limits",

    detailedDescription: `Create seamless shopping experiences across all channels with our omnichannel retail platform that unifies inventory, customer data, and sales operations.`,

    features: [
      {
        icon: TrendingUp,
        title: "Omnichannel Retail",
        description:
          "Unified experience across online, mobile, and physical stores",
      },
      {
        icon: Users,
        title: "Customer Intelligence",
        description:
          "360-degree customer view with personalization and loyalty programs",
      },
      {
        icon: Zap,
        title: "Inventory Management",
        description:
          "Real-time inventory sync across all channels and locations",
      },
      {
        icon: Lock,
        title: "Payment Processing",
        description:
          "Secure, PCI-compliant payment processing with multiple options",
      },
    ],

    whatWeDo: [
      "Build scalable e-commerce platforms with high conversion rates",
      "Implement inventory management systems synchronized across channels",
      "Create personalization engines based on customer behavior",
      "Develop mobile shopping apps with push notifications",
      "Design loyalty and rewards program management systems",
    ],

    benefits: [
      "Increase conversion rates by up to 45%",
      "Reduce cart abandonment through personalization",
      "Improve inventory accuracy to 98%+",
      "Enable data-driven marketing decisions",
      "Enhance customer lifetime value",
    ],

    caseStudies: [
      {
        title: "Fashion Retailer Omnichannel Launch",
        result: "45% increase in online sales",
      },
      {
        title: "E-commerce Platform Scaling",
        result: "10x traffic capacity increase",
      },
    ],

    technologies: [
      "Headless Commerce",
      "AI Personalization",
      "Payment Gateways",
      "Analytics",
    ],
  },

  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    description: "Modern learning management systems",
    shortDescription: "Learning & Education",
    tagline: "Empower Every Learner",

    detailedDescription: `Transform education with comprehensive learning platforms that engage students, empower educators, and provide insights into learning outcomes and student progress.`,

    features: [
      {
        icon: Users,
        title: "Learning Management",
        description:
          "Complete LMS with course creation, student tracking, and grading",
      },
      {
        icon: Zap,
        title: "Interactive Content",
        description:
          "Tools for creating engaging multimedia content and assessments",
      },
      {
        icon: TrendingUp,
        title: "Analytics & Insights",
        description:
          "Detailed learning analytics to identify at-risk students and improve outcomes",
      },
      {
        icon: Lock,
        title: "Collaboration Tools",
        description:
          "Secure communication and collaboration features for remote learning",
      },
    ],

    whatWeDo: [
      "Build comprehensive learning management systems (LMS)",
      "Develop virtual classroom platforms with video conferencing",
      "Create adaptive learning systems that personalize education paths",
      "Implement student assessment and grading systems",
      "Design alumni engagement and career services platforms",
    ],

    benefits: [
      "Increase student engagement and participation",
      "Improve learning outcomes with personalized paths",
      "Reduce instructor workload by 25%",
      "Enable hybrid and remote learning seamlessly",
      "Provide comprehensive learning analytics",
    ],

    caseStudies: [
      {
        title: "University LMS Implementation",
        result: "35% improvement in student retention",
      },
      {
        title: "EdTech Platform for Corporate Training",
        result: "60% faster time-to-competency",
      },
    ],

    technologies: [
      "LMS Technology",
      "Video Conferencing",
      "AI Tutoring",
      "Adaptive Learning",
    ],
  },

  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise",
    description: "Scalable solutions for large organizations",
    shortDescription: "Enterprise Solutions",
    tagline: "Scale with Confidence",

    detailedDescription: `Support large, complex organizations with enterprise-grade solutions designed for scalability, security, and integration with legacy systems.`,

    features: [
      {
        icon: Lock,
        title: "Enterprise Security",
        description:
          "Multi-layer security with SSO, MFA, and advanced access controls",
      },
      {
        icon: Zap,
        title: "System Integration",
        description:
          "Seamless integration with existing ERP, CRM, and legacy systems",
      },
      {
        icon: TrendingUp,
        title: "Business Intelligence",
        description:
          "Enterprise-wide analytics and reporting across all business units",
      },
      {
        icon: Users,
        title: "User Management",
        description:
          "Advanced user management with role-based access and permissions",
      },
    ],

    whatWeDo: [
      "Design and implement enterprise-wide digital transformation initiatives",
      "Integrate multiple systems into unified platforms",
      "Build custom solutions tailored to specific industry requirements",
      "Implement governance, risk, and compliance frameworks",
      "Create change management and training programs",
    ],

    benefits: [
      "Streamline operations across multiple departments and locations",
      "Reduce IT infrastructure costs by 40%",
      "Improve decision-making with unified data",
      "Ensure regulatory compliance across the organization",
      "Enable rapid innovation and time-to-market",
    ],

    caseStudies: [
      {
        title: "Fortune 500 Digital Transformation",
        result: "40% operational cost reduction",
      },
      {
        title: "Multi-Region Enterprise Integration",
        result: "20% faster business processes",
      },
    ],

    technologies: [
      "Cloud Architecture",
      "API Management",
      "Data Warehousing",
      "Security",
    ],
  },
];

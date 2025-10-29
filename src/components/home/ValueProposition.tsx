import { Cloud, BarChart3, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUpVariants,
  staggerItemVariants,
} from "@/constants/animations";

const VALUES = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Scalable, resilient infrastructure that grows with your business. Deploy globally in minutes with 99.99% uptime SLA.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Turn data into actionable insights. Real-time dashboards, predictive analytics, and AI-powered recommendations.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 Type II certified, and compliant with global data protection standards.",
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description:
      "Connect with existing systems effortlessly. Pre-built connectors for 50+ enterprise applications and APIs.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Why Leading Enterprises Choose SarayaTech
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            Our enterprise-grade platform combines cutting-edge technology with
            proven methodologies to deliver measurable business outcomes.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={staggerItemVariants}
                className="group relative bg-card rounded-2xl p-8 shadow-card border border-border hover-lift"
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 40px -10px rgba(220, 70%, 25%, 0.25)",
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-card"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;

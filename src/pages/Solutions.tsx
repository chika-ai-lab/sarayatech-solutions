import { useState } from "react";
import {
  Cloud,
  Database,
  Cpu,
  ArrowRight,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SOLUTIONS_DATA } from "@/constants/solutions";
import {
  containerVariants,
  fadeInUpVariants,
  staggerItemVariants,
} from "@/constants/animations";

const iconMap = {
  Cloud,
  Database,
  Cpu,
  Server,
  Shield,
  Zap,
};

const Solutions = () => {
  const [activeFilter, setActiveFilter] = useState("All Solutions");

  const solutions = [
    SOLUTIONS_DATA["cloud-platform"],
    SOLUTIONS_DATA["data-analytics"],
    SOLUTIONS_DATA["enterprise-software"],
    SOLUTIONS_DATA["infrastructure"],
    SOLUTIONS_DATA["security"],
    SOLUTIONS_DATA["performance"],
  ];

  const filters = [
    "All Solutions",
    "Cloud Platform",
    "Data Analytics",
    "Enterprise Software",
  ];

  const filteredSolutions =
    activeFilter === "All Solutions"
      ? solutions
      : solutions.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              Discover our portfolio of innovative solutions and successful
              implementations. Each project represents our commitment to
              excellence and creative problem-solving.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "150+", label: "Projects Completed", color: "text-primary" },
              { value: "98%", label: "Client Satisfaction", color: "text-accent" },
              { value: "5+", label: "Years Experience", color: "text-gold" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItemVariants} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filteredSolutions.map((solution) => {
                const Icon = iconMap[solution.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={solution.title}
                    variants={staggerItemVariants}
                    layout
                    className="bg-card rounded-xl shadow-card border border-border hover-lift group overflow-hidden"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image placeholder */}
                    <motion.div
                      className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(220, 70%, 25%, 0.15)" }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Icon className="w-16 h-16 text-primary/60" />
                      </motion.div>
                      <motion.div
                        className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {solution.category}
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed">
                        {solution.description}
                      </p>

                      {/* Tech tags */}
                      <motion.div className="flex flex-wrap gap-2">
                        {solution.featuresList.map((feature, idx) => (
                          <motion.span
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="text-xs bg-muted text-foreground px-3 py-1 rounded-full"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.a
                        href={solution.link}
                        className="inline-flex items-center text-primary hover:text-primary-light font-semibold text-sm"
                        whileHover={{ x: 4 }}
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Contact us today to
            discuss your requirements and get a personalized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start a Project
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
              View Our Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

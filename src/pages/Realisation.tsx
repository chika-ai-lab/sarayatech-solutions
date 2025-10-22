import { realisations } from "@/constants";
import { Building2, TrendingUp, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInUpVariants,
  staggerItemVariants,
  hoverLiftVariants,
} from "@/constants/animations";

const STATS = [
  { icon: Building2, value: "500+", label: "Enterprise Clients" },
  { icon: TrendingUp, value: "247%", label: "Average ROI" },
  { icon: Users, value: "10M+", label: "End Users Served" },
  { icon: Clock, value: "97%", label: "Client Satisfaction" },
];

const Realisation = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <motion.section
          className="pt-32 pb-20 gradient-primary text-primary-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center space-y-6"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Realisation
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                See how leading organizations achieve breakthrough results with
                SarayaTech
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={staggerItemVariants}
                    whileHover="hover"
                    className="text-center bg-card rounded-xl p-6 shadow-card border border-border hover-lift cursor-pointer"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Realisations */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {realisations.map((realisation) => (
                <motion.div
                  key={realisation.company}
                  variants={staggerItemVariants}
                  className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover-lift"
                  whileHover={{ y: -8 }}
                >
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="mb-8">
                      <motion.div
                        className="inline-block bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {realisation.industry}
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {realisation.company}
                      </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <h3 className="text-lg font-bold text-primary mb-2">
                            Challenge
                          </h3>
                          <p className="text-secondary leading-relaxed">
                            {realisation.challenge}
                          </p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h3 className="text-lg font-bold text-primary mb-2">
                            Solution
                          </h3>
                          <p className="text-secondary leading-relaxed">
                            {realisation.solution}
                          </p>
                        </motion.div>
                        <motion.div
                          className="bg-muted/50 rounded-xl p-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <blockquote className="text-foreground italic leading-relaxed mb-4">
                            "{realisation.quote}"
                          </blockquote>
                          <div className="font-semibold">
                            {realisation.author}
                          </div>
                          <div className="text-sm text-secondary">
                            {realisation.role}
                          </div>
                        </motion.div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-bold mb-6">Results</h3>
                        <motion.div
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {realisation.results.map((result) => (
                            <motion.div
                              key={result.label}
                              variants={staggerItemVariants}
                              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border hover-lift"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="text-4xl font-extrabold text-primary mb-2">
                                {result.metric}
                              </div>
                              <div className="text-foreground font-semibold">
                                {result.label}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Realisation;

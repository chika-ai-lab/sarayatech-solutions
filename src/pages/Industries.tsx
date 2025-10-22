import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { industries } from "@/constants/industries";
import {
  containerVariants,
  fadeInUpVariants,
  staggerItemVariants,
} from "@/constants/animations";

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
                  Industry-Leading Solutions for{" "}
                  <span className="text-primary">Every</span>
                  <br />
                  <span className="text-primary">Sector</span>
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                  Transform your business with our specialized platforms
                  designed for Financial Services, Manufacturing, Healthcare,
                  Retail, and Education industries.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all duration-300">
                  Explore Industries
                </button>
                <button className="px-8 py-3 border-2 border-border text-foreground font-bold rounded-lg hover:border-primary hover:text-primary transition-all duration-300 bg-background">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid Section */}
        <section className="relative py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-black text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-secondary">
                Specialized solutions tailored to meet the unique challenges and
                requirements of your industry.
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                // Show last industry as custom solutions on wider screens
                const isLastAndWide = index === industries.length - 1;

                return isLastAndWide ? (
                  <a
                    key={industry.id}
                    href={`/industry/${industry.id}`}
                    className="lg:col-span-1 lg:row-span-2"
                  >
                    <div className="h-full bg-foreground rounded-2xl p-8 text-primary-foreground flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                      <div>
                        <Icon className="w-10 h-10 mb-6 text-gold opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-primary-foreground/80 mb-6">
                          {industry.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Custom Development",
                          "Industry Expertise",
                          "Scalable Architecture",
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-gold" />
                            <span className="text-sm text-primary-foreground/80">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="mt-6 text-gold font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Contact Us <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </a>
                ) : (
                  <a
                    key={industry.id}
                    href={`/industry/${industry.id}`}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Title and Tagline */}
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {industry.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent mb-4">
                        {industry.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-secondary text-sm mb-6 flex-1">
                        {industry.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6 border-t border-border pt-4">
                        {industry.features &&
                          industry.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-secondary">
                                {feature.title}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* Learn More Link */}
                      <button className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-primary-foreground/80">
                Our solutions power businesses across all sectors
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Enterprise Clients" },
                { number: "99.9%", label: "Uptime Guarantee" },
                { number: "50M+", label: "Transactions Processed" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-black mb-2">{stat.number}</div>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-gradient-to-r from-primary via-primary/90 to-accent overflow-hidden">
          {/* Decorative Element */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gold/30 rounded-full blur-lg"></div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black text-primary-foreground leading-tight">
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-lg text-primary-foreground/90">
                  Join hundreds of companies that trust our industry-specific
                  solutions to drive their digital transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold rounded-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Industries;

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
import { SOLUTIONS_DATA } from "@/constants/solutions";

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
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              Discover our portfolio of innovative solutions and successful
              implementations. Each project represents our commitment to
              excellence and creative problem-solving.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                150+
              </div>
              <div className="text-sm text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                98%
              </div>
              <div className="text-sm text-secondary">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                5+
              </div>
              <div className="text-sm text-secondary">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => {
              const Icon = iconMap[solution.icon as keyof typeof iconMap];
              return (
                <div
                  key={solution.title}
                  className="bg-card rounded-xl shadow-card border border-border hover:shadow-glow transition-all group overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center">
                    <Icon className="w-16 h-16 text-primary/60" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                      {solution.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{solution.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {solution.featuresList.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-muted text-foreground px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href={solution.link}
                      className="inline-flex items-center text-primary hover:text-primary-light font-semibold text-sm group-hover:translate-x-1 transition-all"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
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

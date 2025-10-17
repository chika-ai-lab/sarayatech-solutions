import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Cpu, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SOLUTIONS_DATA } from "@/constants/solutions";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import architectureIllustration from "@/assets/architecture-illustration.jpg";

const imageMap = {
  "architecture-illustration": architectureIllustration,
  "dashboard-mockup": dashboardMockup,
};

const iconMap = {
  Cloud,
  Database,
  Cpu,
};

const SolutionsShowcase = () => {
  const solutions = [
    SOLUTIONS_DATA["cloud-platform"],
    SOLUTIONS_DATA["data-analytics"],
    SOLUTIONS_DATA["enterprise-software"],
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Technology Solutions
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            Purpose-built platforms designed to accelerate digital
            transformation and drive business growth.
          </p>
        </div>

        <div className="space-y-32">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon as keyof typeof iconMap];
            return (
              <div
                key={solution.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  solution.reverse ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${
                    solution.reverse ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="inline-flex items-center space-x-3 bg-primary/5 rounded-full px-4 py-2">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      Solution {index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold">
                    {solution.title}
                  </h3>

                  <p className="text-lg text-secondary leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-3">
                    {solution.benefitsList.map((benefit) => (
                      <li key={benefit} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-foreground font-medium">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to={solution.link}>
                    <Button className="bg-primary hover:bg-primary-light shadow-card group mt-4">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div
                  className={`relative ${
                    solution.reverse ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border hover-lift">
                    <img
                      src={imageMap[solution.image as keyof typeof imageMap]}
                      alt={solution.title}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform translate-x-4 translate-y-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;

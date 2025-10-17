import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Database, Cpu, ArrowRight } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Enterprise-grade cloud infrastructure with multi-cloud support, auto-scaling, and 99.99% uptime SLA.",
      features: ["Multi-cloud orchestration", "Auto-scaling", "Global CDN", "Managed databases"],
      link: "/solutions/cloud-platform"
    },
    {
      icon: Database,
      title: "Data Analytics Suite",
      description: "Transform data into insights with real-time processing, predictive analytics, and custom dashboards.",
      features: ["Real-time processing", "Predictive analytics", "Custom dashboards", "AI recommendations"],
      link: "/solutions/data-analytics"
    },
    {
      icon: Cpu,
      title: "Enterprise Software",
      description: "Mission-critical applications with API-first design, 500+ integrations, and white-label options.",
      features: ["Modular architecture", "API-first design", "500+ integrations", "White-label ready"],
      link: "/solutions/enterprise-software"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Enterprise Solutions for Every Challenge
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Comprehensive technology platforms designed to accelerate your digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-1 gap-12">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={solution.title} className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border hover:shadow-glow transition-all group">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">{solution.title}</h2>
                        <p className="text-lg text-secondary leading-relaxed">{solution.description}</p>
                        <ul className="space-y-3">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-3">
                              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                              </div>
                              <span className="text-foreground font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to={solution.link}>
                          <Button className="bg-primary hover:bg-primary-light shadow-card group">
                            Learn More
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                          </Button>
                        </Link>
                      </div>
                      <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;

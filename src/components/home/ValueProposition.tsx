import { Cloud, BarChart3, Lock, Zap } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient infrastructure that grows with your business. Deploy globally in minutes with 99.99% uptime SLA.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Turn data into actionable insights. Real-time dashboards, predictive analytics, and AI-powered recommendations.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 Type II certified, and compliant with global data protection standards.",
    },
    {
      icon: Zap,
      title: "Rapid Integration",
      description: "Connect with existing systems effortlessly. Pre-built connectors for 500+ enterprise applications and APIs.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Why Leading Enterprises Choose SarayaTech
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            Our enterprise-grade platform combines cutting-edge technology with proven methodologies to deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-primary/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-card group-hover:shadow-glow group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

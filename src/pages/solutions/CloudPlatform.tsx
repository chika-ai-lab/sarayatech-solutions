import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Cpu, Lock, TrendingUp } from "lucide-react";
import architectureIllustration from "@/assets/architecture-illustration.jpg";

const CloudPlatform = () => {
  const features = [
    { icon: Cloud, title: "Multi-Cloud Orchestration", description: "Seamlessly manage workloads across AWS, Azure, and Google Cloud" },
    { icon: Zap, title: "Auto-Scaling Infrastructure", description: "Automatically scale resources based on demand" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and compliance certifications" },
    { icon: Globe, title: "Global CDN Integration", description: "Lightning-fast content delivery worldwide" },
    { icon: Database, title: "Managed Databases", description: "Fully managed SQL and NoSQL databases" },
    { icon: Cpu, title: "Container Orchestration", description: "Kubernetes-powered container management" },
    { icon: Lock, title: "Identity & Access", description: "Advanced IAM with SSO and MFA" },
    { icon: TrendingUp, title: "Cost Optimization", description: "AI-powered resource optimization to reduce costs" }
  ];

  const benefits = [
    { metric: "99.99%", label: "Uptime SLA", description: "Industry-leading reliability" },
    { metric: "10x", label: "Faster Deployment", description: "From weeks to hours" },
    { metric: "60%", label: "Cost Reduction", description: "Optimized resource usage" },
    { metric: "150+", label: "Regions", description: "Global infrastructure" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Cloud className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Cloud Platform</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  Enterprise Cloud Infrastructure That Scales
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Build, deploy, and scale applications on a cloud platform designed for enterprise performance, security, and reliability.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground shadow-accent">
                    Request Demo
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative animate-slide-in-right">
                <img src={architectureIllustration} alt="Cloud Architecture" className="rounded-2xl shadow-glow" />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Platform Overview</h2>
              <div className="space-y-4 text-lg text-secondary leading-relaxed">
                <p>
                  SarayaTech Cloud Platform provides enterprise-grade infrastructure with unmatched flexibility, security, and performance. Whether you're migrating legacy systems or building cloud-native applications, our platform delivers the tools and capabilities you need.
                </p>
                <p>
                  Used by Fortune 500 companies across finance, healthcare, manufacturing, and retail, our cloud platform handles billions of transactions daily with 99.99% uptime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Platform Capabilities</h2>
              <p className="text-xl text-secondary">
                Everything you need to run mission-critical workloads at scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elegant transition-all group">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-secondary">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Business Benefits</h2>
              <p className="text-xl text-secondary">
                Measurable impact on your bottom line
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="text-center bg-card rounded-2xl p-8 shadow-card border border-border">
                  <div className="text-5xl font-extrabold text-primary mb-2">{benefit.metric}</div>
                  <div className="text-xl font-semibold mb-2">{benefit.label}</div>
                  <p className="text-sm text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Schedule a personalized demo and see how our cloud platform can accelerate your business
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground shadow-accent">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudPlatform;
